import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getSortedPortfolioData } from '../../lib/portfolio';
import { PortfolioItem } from '../../types/portfolio';

type PortfolioPageProps = {
  portfolioItems: PortfolioItem[];
};

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  const portfolioItems = getSortedPortfolioData();
  return {
    props: {
      portfolioItems,
    },
  };
};

const PORTFOLIO_CATEGORIES = [
  'All Projects',
  'A+ Content',
  'Store Design',
  'Product Listings',
  'Marketing',
];

const PORTFOLIO_ITEMS = [
  {
    id: 'premium-electronics',
    title: 'Premium Electronics Brand',
    category: 'A+ Content',
    description: 'A+ Content design for a high-end electronics manufacturer',
    image: '/portfolio/electronics.jpg',
  },
  {
    id: 'fashion-store',
    title: 'Fashion Store Design',
    category: 'Store Design',
    description: 'Custom Amazon store design for a fashion brand',
    image: '/portfolio/fashion.jpg',
  },
  {
    id: 'home-goods',
    title: 'Home Goods Optimization',
    category: 'Product Listings',
    description: 'Product listing optimization for home goods seller',
    image: '/portfolio/home-goods.jpg',
  },
];

const STATS = [
  { value: '100+', label: 'Projects Completed' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '50M+', label: 'Revenue Generated' },
];

export default function PortfolioPage({ portfolioItems }: PortfolioPageProps) {
  return (
    <>
      <Head>
        <title>Portfolio - RootAMZ</title>
        <meta name="description" content="Explore our successful projects and see how we've helped brands grow on Amazon" />
      </Head>

      <div className="min-h-screen bg-dark text-white">
        <Navbar />

        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
              <p className="text-xl text-gray-300">
                Explore our successful projects and see how we've helped brands grow on Amazon
              </p>
            </motion.div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {PORTFOLIO_CATEGORIES.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
              {portfolioItems.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/portfolio/${item.id}`}
                  className="block"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-700/50 transition-all cursor-pointer h-full"
                  >
                    <div className="relative h-48">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <span className="text-purple-400">{item.category}</span>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gray-800/50 rounded-2xl p-12 max-w-4xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-8">Let's create something amazing together</p>
              <Link 
                href="/contact"
                className="inline-block bg-purple-600 px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
} 