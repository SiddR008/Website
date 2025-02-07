import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const Clients = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: '-50%',
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls]);

  const clients = [
    { id: 1, logo: '/images/client-image/3dactive.png', name: '3D Active' },
    { id: 2, logo: '/images/client-image/eleven-australia.png', name: 'Eleven Australia' },
    { id: 3, logo: '/images/client-image/fire-sense.png', name: 'Fire Sense' },
    { id: 4, logo: '/images/client-image/huntley.png', name: 'G-Force' },
    { id: 5, logo: '/images/client-image/panther-martin.png', name: 'G-Force' },
    { id: 6, logo: '/images/client-image/g-force.png', name: 'G-Force' },
    { id: 7, logo: '/images/client-image/g-force.png', name: 'G-Force' },
    { id: 8, logo: '/images/client-image/g-force.png', name: 'G-Force' },


    { id: 4, logo: '/client-images/3dactive.png', name: 'Client 4' },

    { id: 5, logo: '/images/client5.png', name: 'Client 5' },
    { id: 6, logo: '/images/client6.png', name: 'Client 6' },
    { id: 7, logo: '/images/client7.png', name: 'Client 7' },
    { id: 8, logo: '/images/client8.png', name: 'Client 8' },
    // Duplicate first 4 clients for seamless loop
    { id: 9, logo: '/images/client1.png', name: 'Client 1' },
    { id: 10, logo: '/images/client2.png', name: 'Client 2' },
    { id: 11, logo: '/images/client3.png', name: 'Client 3' },
    { id: 12, logo: '/images/client4.png', name: 'Client 4' },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Brands</h2>
          <p className="text-gray-400">We've helped these amazing companies grow their Amazon business</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={controls}
          >
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-shrink-0 w-48 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-700/50 transition-colors group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.opacity = '0.7';
                    target.parentElement!.style.backgroundColor = '#374151';
                  }}
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Clients; 