import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index }: any) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
    >
      <div className="bg-purple-600/20 rounded-lg p-3 w-fit mb-4">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors">
        LEARN MORE 
        <span>→</span>
      </button>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Amazon Vendor Central",
      description: "Optimize your vendor central operations for maximum efficiency and growth",
      icon: "/icons/vendor.svg"
    },
    {
      title: "Amazon Seller Central",
      description: "Maximize your seller central performance with our expert strategies",
      icon: "/icons/seller.svg"
    },
    {
      title: "PPC Marketing Support",
      description: "Strategic PPC campaigns that drive results and increase ROI",
      icon: "/icons/ppc.svg"
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
          Elevate Your Amazon Success with Our Expert Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 