import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | RootAMZ</title>
        <meta name="description" content="Get in touch with RootAMZ for your Amazon and E-commerce solutions." />
      </Head>
      <div className="bg-dark text-white min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 pt-32 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Image */}
            <div className="flex justify-center items-center">
              <Image 
                src="/images/contact-us.png"
                alt="Contact Illustration"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
            </div>

            {/* Right Side: Contact Form with Moving Purple Blur Background */}
            <div className="relative">
              {/* Moving Purple Blur Shape */}
              <div className="absolute inset-0 flex justify-end items-start pointer-events-none">
                <div className="w-64 h-64 bg-purple-600 opacity-30 rounded-full blur-3xl animate-moveBlur -mt-10 -mr-10"></div>
              </div>
              
              {/* Contact Form */}
              <div className="relative bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg">
                <form>
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-300 font-semibold mb-2">
                      Service*
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-purple-600"
                    >
                      <option>Free Account Audit</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="website" className="block text-gray-300 font-semibold mb-2">
                      Website link (optional)
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      placeholder="https://yourwebsite.com"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="amazonLink" className="block text-gray-300 font-semibold mb-2">
                      Amazon Store or Product link*
                    </label>
                    <input
                      type="text"
                      id="amazonLink"
                      name="amazonLink"
                      placeholder="Link to your Amazon store or product"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-purple-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <style jsx>{`
        @keyframes moveBlur {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, 15px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .animate-moveBlur {
          animation: moveBlur 10s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Contact; 