import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ranjit Swain",
      role: "CEO & Founder",
      image: "/images/ranjit.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Amazon Strategy Director",
      image: "/images/team/member2.jpg",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/images/team/member3.jpg",
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of e-commerce trends to deliver cutting-edge solutions"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project we undertake"
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of professional integrity"
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
              About RootAMZ
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Empowering brands to thrive in the digital marketplace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                RootAMZ was founded with a vision to help businesses navigate and succeed in the complex world of e-commerce. Our journey began with a simple mission: to provide comprehensive Amazon solutions that drive real results.
              </p>
              <p className="text-gray-300">
                Today, we're proud to have helped numerous brands establish and grow their presence on Amazon, delivering exceptional results through our expertise in vendor management, creative services, and strategic marketing solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/about-us.png"
                alt="Our Story"
                fill
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to take your Amazon business to the next level?
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

export default AboutUs; 