import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, content, rating, index }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
          <span className="text-xl">👤</span>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{content}</p>
      <div className="flex text-purple-400">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      role: "eCommerce Manager",
      content: "Amazing service that helped us scale our Amazon business significantly. The team's expertise in vendor central operations was invaluable.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Digital Marketing Director",
      content: "Their PPC strategies transformed our advertising performance. We saw a 300% increase in ROAS within the first three months.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Brand Owner",
      content: "The brand creative services helped us stand out in a crowded marketplace. Our product listings now convert much better.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Clients Say About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 