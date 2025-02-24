import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="border border-white/20 rounded-[50px] bg-dark/80 backdrop-blur-sm px-8 py-5 flex justify-between items-center">
          <Link href="/" className="logo">
            <Image
              src="/images/Logo.png"
              alt="RootAMZ"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="flex gap-6 items-center">
            <Link
              href="/amazon-services"
              className={`text-gray-200 hover:text-white transition-colors ${router.pathname === '/amazon-services' ? 'text-white' : ''
                }`}
            >
              Amazon Services
            </Link>
            <Link
              href="/brand-creative-services"
              className={`text-gray-200 hover:text-white transition-colors ${router.pathname === '/brand-creative-services' ? 'text-white' : ''
                }`}
            >
              Brand Creative Services
            </Link>
            <Link
              href="/blog"
              className={`text-gray-200 hover:text-white transition-colors ${router.pathname === '/blog' ? 'text-white' : ''
                }`}
            >
              Blog
            </Link>
            <Link
              href="/portfolio"
              className={`text-gray-200 hover:text-white transition-colors ${router.pathname === '/portfolio' ? 'text-white' : ''
                }`}
            >
              Portfolio
            </Link>
            <Link
              href="/about-us"
              className={`text-gray-200 hover:text-white transition-colors ${router.pathname === '/about-us' ? 'text-white' : ''
                }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="bg-purple-600 px-4 py-2 rounded-lg text-white hover:bg-purple-700 transition-colors"
            >
              Free Account Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <Link href="/" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/blog" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;