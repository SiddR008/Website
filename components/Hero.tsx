import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When the user scrolls more than 50px, switch to the happy girl image.
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link
            href="/contact"
            className="inline-block bg-purple-600 px-8 py-4 rounded-lg text-white hover:bg-purple-700 transition-colors"
          >
            Free Audit
          </Link>
        </motion.div>
        <div className="relative mt-12 w-[900px] h-[900px] mx-auto">
          <AnimatePresence exitBeforeEnter>
            {scrolled ? (
              <motion.div
                key="happy"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/happy-girl.png"
                  alt="Happy Girl"
                  width={900}
                  height={900}
                  className="object-contain"
                />
              </motion.div>
            ) : (
              <motion.div
                key="sad"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/sad-girl.png"
                  alt="Sad Girl"
                  width={900}
                  height={900}
                  className="object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero; 