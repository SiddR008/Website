// utils/clientSearchPosts.js

import { fetchBlogs } from './fetchBlogs';

export async function clientSearchPosts(query) {
  try {
    const allPosts = await fetchBlogs();
    
    if (!query.trim()) {
      return allPosts;
    }

    const searchQuery = query.toLowerCase().trim();

    return allPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(searchQuery);
      const contentMatch = post.content.toLowerCase().includes(searchQuery);
      
      return titleMatch || contentMatch;
    });
    
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}