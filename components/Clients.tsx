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

    // Additional client logos already in your list
    { id: 9, logo: '/images/client-image/voom-sonic.png', name: 'Client 4' },
    { id: 10, logo:'/images/client-image/etnies.png', name: 'Client 5' },
    { id: 11, logo: 'https://static2.nidecker.com/img/logo-17325316921.svg', name: 'Client 6' },

    { id: 12, logo: '/images/client-image/bataleon.png', name: 'Client 7' },
    { id: 13, logo: 'https://yessnowboards.com/cdn/shop/files/logo.svg', name: 'Client 8' },


    // Duplicate first 4 clients for seamless loop (optional if you duplicate again below)
    { id: 14, logo: 'https://thirtytwo.com/cdn/shop/files/thirtytwo_100x.png', name: 'Client 1' },
    { id: 15, logo: 'https://emerica.com/cdn/shop/files/emerica-logo_600x.png', name: 'Client 2' },
    { id: 16, logo: '/images/client-image/jones.png', name: 'Client 3' },
    { id: 17, logo: '/images/client-image/rome.png', name: 'Client 4' },

    

    // 10 Additional client logos
    { id: 18, logo: '/images/client-image/es.png', name: 'New Client 1' },
    { id: 19, logo: '/images/client-image/3dactive.png', name: 'New Client 2' },
    { id: 20, logo: '/images/client-image/eleven-australia.png', name: 'New Client 3' },


    { id: 21, logo: '/images/client-image/fire-sense.png', name: 'New Client 4' },
    { id: 22, logo: '/images/client-image/huntley.png', name: 'New Client 5' },
    { id: 23, logo: '/images/client-image/patio-sense.png', name: 'New Client 6' },

    { id: 24, logo: '/images/client-image/pop-sonic.png', name: 'New Client 7' },

    { id: 25, logo: '/images/client-image/radius.png', name: 'New Client 8' },

    { id: 26, logo: '/images/client-image/voom-sonic.png', name: 'New Client 9' },

    { id: 27, logo: '/images/client-image/etnies.png', name: 'New Client 10' },

  ];

  // Duplicate the clients array for seamless looping
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
            We&apos;ve helped these amazing companies grow their Amazon business
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* The motion container has its width based solely on its content (w-max)
              and contains two copies of the clients array */}
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 80, // Increase duration for a slower scroll speed
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`} // use a composite key since items are duplicated
                className="flex-shrink-0 w-48 h-24 bg-gray-800/50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-700/50 transition-colors group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  style={
                    client.id === 3 || client.id === 6 || client.id === 17|| client.id === 21|| client.id === 23
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