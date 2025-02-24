import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BrandCreativeServices = () => {
  const services = [
    {
      title: "Brand Registry",
      description: "We help you protect your brand and intellectual property on Amazon through brand registry services.",
      icon: "/icons/brand.svg"
    },
    {
      title: "EBC / A+ Content Design",
      description: "Create engaging Enhanced Brand Content to showcase your product features and brand story.",
      icon: "/icons/content.svg"
    },
    {
      title: "Store Design",
      description: "Custom Amazon store design to provide a premium shopping experience for your customers.",
      icon: "/icons/store.svg"
    }
  ];

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
              Brand Creative Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your brand presence with our expert creative services designed to enhance your Amazon store and product listings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="bg-purple-600/20 rounded-lg p-3 w-fit mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A+ Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">A+ Content Design</h2>
              <p className="text-gray-300 mb-6">
                Our A+ Content design services help you create compelling product stories that increase conversion rates and build brand trust. We combine professional design with strategic content to showcase your products effectively.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Professional design and layout</li>
                <li>Compelling product descriptions</li>
                <li>High-quality image integration</li>
                <li>Brand story development</li>
                <li>Mobile-optimized content</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/a-plus-content.jpg"
                alt="A+ Content Design"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Store Design Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] md:order-1"
            >
              <Image
                src="/images/store-design.jpg"
                alt="Store Design"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Amazon Store Design</h2>
              <p className="text-gray-300 mb-6">
                Create an immersive shopping experience with our custom Amazon store design services. We help you build a branded destination that showcases your product line and enhances customer engagement.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Custom store layout design</li>
                <li>Brand-aligned visuals</li>
                <li>Optimized navigation</li>
                <li>Mobile-responsive design</li>
                <li>Product category organization</li>
              </ul>
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
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a compelling brand presence that drives sales and builds customer trust.
            </p>
            <button className="bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandCreativeServices; 