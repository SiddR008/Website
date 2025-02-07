import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { PostType } from '../types/post';

const postsDirectory = join(process.cwd(), 'posts');

// Calculate reading time
function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Get all posts with pagination
export function getSortedPostsData(page = 1, limit = 6): {
  posts: PostType[];
  totalPages: number;
} {
  const fileNames = readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName): PostType => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Ensure all required fields have default values
    return {
      id,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      excerpt: matterResult.data.excerpt || '',
      coverImage: matterResult.data.coverImage || '',
      tags: matterResult.data.tags || [], // Ensure tags is always an array
      category: matterResult.data.category || 'uncategorized',
      readingTime: getReadingTime(matterResult.content),
    };
  });

  // Sort posts by date
  const sortedPosts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  
  // Calculate pagination
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const offset = (page - 1) * limit;
  const paginatedPosts = sortedPosts.slice(offset, offset + limit);

  return {
    posts: paginatedPosts,
    totalPages
  };
}

// Get all categories
export function getAllCategories(): string[] {
  const { posts } = getSortedPostsData(1, 1000);
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

// Get all tags
export function getAllTags(): string[] {
  const { posts } = getSortedPostsData(1, 1000);
  const tags = new Set(posts.flatMap(post => post.tags));
  return Array.from(tags);
}

// Get posts by category
export function getPostsByCategory(category: string): PostType[] {
  const { posts } = getSortedPostsData(1, 1000);
  return posts.filter(post => post.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): PostType[] {
  const { posts } = getSortedPostsData(1, 1000);
  return posts.filter(post => post.tags.includes(tag));
}

// Search posts
export function searchPosts(query: string): PostType[] {
  const { posts } = getSortedPostsData(1, 1000);
  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  );
}

export async function getPostData(id: string) {
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    readingTime: getReadingTime(matterResult.content),
    ...(matterResult.data as Omit<PostType, 'id' | 'readingTime'>)
  };
}

export function getAllPostIds() {
  const fileNames = readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}
