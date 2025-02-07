import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import { JobPost } from '../types/job';

const jobsDirectory = path.join(process.cwd(), 'jobs');

export function getAllJobs(): JobPost[] {
  const fileNames = fs.readdirSync(jobsDirectory);
  const allJobs = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(jobsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<JobPost, 'slug' | 'content'>),
      content: matterResult.content,
    };
  });

  return allJobs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllJobSlugs() {
  const fileNames = fs.readdirSync(jobsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getJobBySlug(slug: string) {
  const fullPath = path.join(jobsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(matterResult.content);
  const content = processedContent.toString();

  return {
    slug,
    content,
    ...(matterResult.data as Omit<JobPost, 'slug' | 'content'>),
  };
} 