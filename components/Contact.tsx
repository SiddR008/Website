import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            Ready to Elevate Your e-Commerce?
          </h2>
          <Link href="/contact">
            <button className="bg-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Get A Free Audit
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 