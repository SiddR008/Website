import type { NextApiRequest, NextApiResponse } from 'next';
import { getSortedPostsData, searchPosts, getPostsByTag } from '../../lib/posts.server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  try {
    switch (method) {
      case 'GET':
        if (query.search) {
          const results = searchPosts(query.search as string);
          res.status(200).json(results);
        } else if (query.tag) {
          const results = getPostsByTag(query.tag as string);
          res.status(200).json(results);
        } else {
          const page = Number(query.page) || 1;
          const limit = Number(query.limit) || 6;
          const posts = getSortedPostsData(page, limit);
          res.status(200).json(posts);
        }
        break;
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error processing request' });
  }
} 