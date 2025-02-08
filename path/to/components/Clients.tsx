import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { id: 1, logo: '/images/client-image/3dactive.png', name: '3D Active' },
    { id: 2, logo: '/images/client-image/eleven-australia.png', name: 'Eleven Australia' },
    { id: 3, logo: '/images/client-image/fire-sense.png', name: 'Fire Sense' },
    { id: 4, logo: '/images/client-image/huntley.png', name: 'G-Force' },
    { id: 5, logo: '/images/client-image/panther-martin.png', name: 'G-Force' },
    { id: 6, logo: '/images/client-image/patio-sense.png', name: 'G-Force' },
    { id: 7, logo: '/images/client-image/pop-sonic.png', name: 'G-Force' },
    { id: 8, logo: '/images/client-image/radius.png', name: 'G-Force' },
    { id: 9, logo: '/images/client-image/voom-sonic.png', name: 'Client 4' },
    { id: 10, logo: '/images/client-image/g-force.png', name: 'Client 5' },
    { id: 11, logo: '/images/client-image/g-force.png', name: 'Client 6' },
    { id: 12, logo: '/images/client7.png', name: 'Client 7' },
    { id: 13, logo: '/images/client8.png', name: 'Client 8' },
    // 10 Additional client logos
    { id: 14, logo: '/images/new-client1.png', name: 'New Client 1' },
    { id: 15, logo: '/images/new-client2.png', name: 'New Client 2' },
    { id: 16, logo: '/images/new-client3.png', name: 'New Client 3' },
    { id: 17, logo: '/images/new-client4.png', name: 'New Client 4' },
    { id: 18, logo: '/images/new-client5.png', name: 'New Client 5' },
    { id: 19, logo: '/images/new-client6.png', name: 'New Client 6' },
    { id: 20, logo: '/images/new-client7.png', name: 'New Client 7' },
    { id: 21, logo: '/images/new-client8.png', name: 'New Client 8' },
    { id: 22, logo: '/images/new-client9.png', name: 'New Client 9' },
    { id: 23, logo: '/images/new-client10.png', name: 'New Client 10' },
  ];

  // Duplicate the items for a continuous loop
  const duplicatedClients = [...clients, ...clients];

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
          <p className="text-gray-400">
            We've helped these amazing companies grow their Amazon business
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: '-50%' }}
            transition={{
              duration: 100,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-700/50 transition-colors group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  style={
                    client.id === 3 || client.id === 6
                      ? {}
                      : { filter: 'brightness(0) invert(1)' }
                  }
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