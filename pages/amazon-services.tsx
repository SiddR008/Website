import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AmazonServices = () => {
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
              Amazon Services – Vendor & Seller Management
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              RootAMZ provides comprehensive <span className="font-bold">Amazon Services Vendor Seller Management</span> solutions to optimize your online retail success across multiple platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vendor Services Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Amazon Vendor Services</h2>
              <p className="text-gray-300 mb-6">
                Amazon Vendor Central is a web interface for manufacturers, distributors, and vendors to sell directly on Amazon. While the platform makes it easy to process orders, track product details and manage inventory, it requires an invitation to sell through Vendor Central.
              </p>
              <p className="text-gray-300 mb-6">
                RootAMZ offers Amazon Vendor Central management services globally. Our experts assist with complex tasks like inventory management, order processing, shipment handling, and order tracking, among others.
              </p>
              <h3 className="text-xl font-semibold mb-4">Amazon Vendor Central Management Services We Offer:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>NIS (New Item Setup) creations</li>
                <li>Product listing optimization as per Amazon&apos;s product search algorithm</li>
                <li>Vendor Central account management</li>
                <li>Inventory management</li>
                <li>A+ content creation</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] flex items-center justify-center"
            >
              <Image
                src="/images/Amazon-Vendor-Account-Management.png"
                alt="Amazon Vendor Account Management"
                fill
                className="object-contain rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seller Management Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Seller Management Services</h2>
            <p className="text-gray-300 mb-6">
              We possess the required Amazon seller central experts to carry out complex store setup and management processes without any hassles. Our experienced Amazon specialists can efficiently handle all tasks related to the setup and management of your Amazon Seller Central account.
            </p>
            <p className="text-gray-300 mb-6">
              No matter if you are selling limited products or in bulk, they should be customer-engaging. The next important thing to do is present your interesting products to the customers in an even more engaging way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                "Product organic optimisation",
                "Product listing optimisation",
                "Product image editing",
                "Account Health management",
                "Inventory management",
                "Amazon SEO/PPC Marketing and Advertising",
                "A + Content Design",
                "Storefront Design",
                "Amazon Account Audit"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
                >
                  <p className="text-lg">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Elevate Your E-commerce?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step towards maximizing your online business potential. Contact us today for a tailored e-commerce solution.
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

export default AmazonServices; 