import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { pineconeIndex } from "@/lib/pinecone";
import OpenAI from "openai";
import { env } from "@/env";

const openaiClient = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Generate embedding for the query
    const embeddingResponse = await openaiClient.embeddings.create({
      model: "text-embedding-3-small",
      input: lastMessage.content,
    });

    const embedding = embeddingResponse.data[0].embedding;

    // Query Pinecone for relevant context
    let context = "";
    try {
      const queryResponse = await pineconeIndex.query({
        vector: embedding,
        topK: 3,
        includeMetadata: true,
      });

      if (queryResponse.matches && queryResponse.matches.length > 0) {
        context = queryResponse.matches
          .map((match: any) => match.metadata?.text || "")
          .filter(Boolean)
          .join("\n\n");
      }
    } catch (error) {
      console.error("Pinecone query error:", error);
      // Continue without context if Pinecone fails
    }

    // Build system message with context
    const systemMessage = context
      ? `You are a helpful AI assistant. Use the following context to answer the user's question:\n\n${context}`
      : "You are a helpful AI assistant.";

    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages: [
        { role: "system", content: systemMessage },
        ...messages,
      ],
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
