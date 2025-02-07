import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-900 to-dark pt-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">
            Empower Your eCommerce Success
          </h1>
          <p className="text-xl mb-8">
            Power Your Growth with Our Expert Amazon Service Solutions
          </p>
          <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Free Audit
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 relative"
        >
          <div className="bg-gray-800/50 rounded-full p-8 max-w-md mx-auto">
            {/* Placeholder for illustration - replace src with your actual image */}
            <img 
              src="/images/hero-illustration.svg" 
              alt="Hero" 
              className="w-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#374151';
                target.style.padding = '2rem';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 