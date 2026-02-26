import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/mdx-components";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

async function getPost(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), "src/content/blog");
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date ? new Date(data.date) : new Date(),
      tags: data.tags || [],
      content,
    };
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-24">
      <article className="mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
          </div>
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
