import { GetStaticProps } from 'next';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/blog/SearchBar';
import Pagination from '../components/blog/Pagination';
import TagsList from '../components/blog/TagsList';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData, getAllTags } from '../lib/posts.server';
import { PostType } from '../types/post';
import { searchPosts as clientSearchPosts } from '../utils/posts.client';
import Head from 'next/head';

type BlogPageProps = {
  initialPosts: {
    posts: PostType[];
    totalPages: number;
  };
  tags: string[];
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const initialPosts = getSortedPostsData(1, 6);
  const tags = getAllTags();

  return {
    props: {
      initialPosts,
      tags,
    },
    revalidate: 3600, // Revalidate every hour
  };
};

const BlogPage = ({ initialPosts, tags }: BlogPageProps) => {
  const [posts, setPosts] = useState(initialPosts.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    try {
      const results = await clientSearchPosts(query);
      setPosts(results);
    } catch (error) {
      console.error('Error searching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagClick = async (tag: string) => {
    setSelectedTag(tag);
    setIsLoading(true);
    try {
      const res = await fetch(`/api/posts?tag=${encodeURIComponent(tag)}`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      if (!data.posts) {
        throw new Error('No posts returned');
      }
      setPosts(data.posts);
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = async (page: number) => {
    setCurrentPage(page);
    setIsLoading(true);
    try {
      const res = await fetch(`/api/posts?page=${page}`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      if (!data.posts) {
        throw new Error('No posts returned');
      }
      setPosts(data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Blog - Latest Insights & News</title>
        <meta name="description" content="Stay updated with the latest trends, strategies, and insights in Amazon e-commerce" />
        <meta property="og:title" content="Blog - Latest Insights & News" />
        <meta property="og:description" content="Stay updated with the latest trends, strategies, and insights in Amazon e-commerce" />
      </Head>
      
      <div className="bg-dark text-white min-h-screen">
        <Navbar />
        
        <section className="pt-32 pb-20 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Latest Insights & News
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stay updated with the latest trends, strategies, and insights in Amazon e-commerce
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SearchBar onSearch={handleSearch} />
            <TagsList 
              tags={tags} 
              onTagClick={handleTagClick} 
              selectedTag={selectedTag}
            />
            
            {isLoading ? (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                      <motion.article 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        className="bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                      >
                        {post.coverImage && (
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex gap-2 mb-3">
                            {post.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 hover:text-purple-400 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex justify-between items-center text-sm text-gray-400">
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {post.readingTime}
                            </span>
                          </div>
                        </div>
                      </motion.article>
                    </Link>
                  ))}
                </div>

                <Pagination 
                  currentPage={currentPage}
                  totalPages={initialPosts.totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage; 