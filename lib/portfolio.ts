import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PortfolioItem } from '../types/portfolio';

const portfolioDirectory = path.join(process.cwd(), 'portfolio');

export function getSortedPortfolioData() {
  const fileNames = fs.readdirSync(portfolioDirectory);
  const allPortfolioData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(portfolioDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as Omit<PortfolioItem, 'id'>),
    };
  });

  return allPortfolioData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPortfolioIds() {
  const fileNames = fs.readdirSync(portfolioDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPortfolioData(id: string) {
  const fullPath = path.join(portfolioDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<PortfolioItem, 'id'>),
  };
} 