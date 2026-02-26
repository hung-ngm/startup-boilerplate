import { ChatInterface } from "@/components/dashboard/chat-interface";
import { Card } from "@/components/ui/card";

export default function ChatPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight">AI Chat</h1>
        <p className="text-muted-foreground">Chat with AI powered by OpenAI and Pinecone RAG</p>
      </div>

      <Card className="h-[calc(100%-5rem)]">
        <ChatInterface />
      </Card>
    </div>
  );
}
