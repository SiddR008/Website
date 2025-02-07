import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'a-plus', name: 'A+ Content' },
    { id: 'store', name: 'Store Design' },
    { id: 'listing', name: 'Product Listings' }
  ];

  const portfolioItems = [
    {
      title: "Premium Electronics Brand",
      category: "a-plus",
      image: "/images/portfolio/a-plus-1.jpg",
      description: "A+ Content design for a high-end electronics manufacturer"
    },
    {
      title: "Fashion Store Design",
      category: "store",
      image: "/images/portfolio/store-1.jpg",
      description: "Custom Amazon store design for a fashion brand"
    },
    {
      title: "Home Goods Optimization",
      category: "listing",
      image: "/images/portfolio/listing-1.jpg",
      description: "Product listing optimization for home goods seller"
    },
    // Add more portfolio items as needed
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our successful projects and see how we've helped brands grow on Amazon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">50M+</div>
              <div className="text-gray-300">Revenue Generated</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together
            </p>
            <button className="bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage; 