export type PostType = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content?: string;
  contentHtml?: string;
  tags: string[];
  category: string;
  readingTime?: string;
} 