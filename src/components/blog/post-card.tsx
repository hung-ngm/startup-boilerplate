import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  date: Date;
  tags?: string[];
}

export function PostCard({ slug, title, description, date, tags }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="h-full transition-colors hover:border-primary">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={date.toISOString()}>{formatDate(date)}</time>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {tags && tags.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
