import { PostCard } from "@/components/blog/post-card";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "src/content/blog");
  
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date ? new Date(data.date) : new Date(),
        tags: data.tags || [],
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Thoughts, guides, and insights on building modern SaaS applications.
        </p>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
