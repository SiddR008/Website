import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { JobType } from '../../types/job';

const jobsDirectory = path.join(process.cwd(), 'jobs');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { page = 1, limit = 6 } = req.query;
    const jobs = getSortedJobsData(Number(page), Number(limit));
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
}

function getSortedJobsData(page: number, limit: number) {
  // ... same implementation as before
}