import { GetStaticProps, GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ShareButtons from '../../components/blog/ShareButtons';
import ReadingProgress from '../../components/blog/ReadingProgress';
import TableOfContents from '../../components/blog/TableOfContents';
import { getAllPostIds, getPostData } from '../../lib/posts.server';
import { PostType } from '../../types/post';

type BlogPostProps = {
  postData: PostType & {
    contentHtml: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData
    }
  };
};

const BlogPost = ({ postData }: BlogPostProps) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  // Add IDs to headings for Table of Contents
  const processedContent = postData.contentHtml.replace(
    /<h([2-4])>(.+?)<\/h[2-4]>/g,
    (match, level, content) => {
      const id = content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<h${level} id="${id}">${content}</h${level}>`;
    }
  );

  return (
    <>
      <Head>
        <title>{postData.title} - Blog</title>
        <meta name="description" content={postData.excerpt} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.excerpt} />
        <meta property="og:image" content={postData.coverImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={postData.date} />
        <meta property="article:tag" content={postData.tags.join(', ')} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <ReadingProgress />
      
      <div className="bg-dark text-white min-h-screen">
        <Navbar />
        
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex gap-2 mb-4">
                  {postData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {postData.title}
                </h1>
                <div className="flex items-center justify-between text-gray-400 mb-8">
                  <time dateTime={postData.date}>
                    {new Date(postData.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {postData.readingTime}
                  </span>
                </div>
              </motion.div>

              {postData.coverImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative h-[400px] mb-12 rounded-xl overflow-hidden"
                >
                  <Image
                    src={postData.coverImage}
                    alt={postData.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="prose prose-invert prose-purple max-w-none"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                />

                <div className="space-y-8">
                  <div className="sticky top-24">
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Share this post</h3>
                      <ShareButtons url={url} title={postData.title} />
                    </div>
                    <TableOfContents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost; 