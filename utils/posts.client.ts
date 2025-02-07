import { PostType } from '../types/post';

export async function fetchPosts(page = 1, limit = 6) {
  const res = await fetch(`/api/posts?page=${page}&limit=${limit}`);
  return res.json();
}

export async function searchPosts(query: string) {
  const res = await fetch(`/api/posts?search=${encodeURIComponent(query)}`);
  return res.json();
}

export async function getPostsByTag(tag: string) {
  const res = await fetch(`/api/posts?tag=${encodeURIComponent(tag)}`);
  return res.json();
} 