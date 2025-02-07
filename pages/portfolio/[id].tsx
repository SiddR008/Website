import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllPortfolioIds, getPortfolioData } from '../../lib/portfolio';

type PortfolioDetailProps = {
  portfolioData: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    contentHtml: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPortfolioIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PortfolioDetailProps> = async ({ params }) => {
  const portfolioData = await getPortfolioData(params?.id as string);
  return {
    props: {
      portfolioData,
    },
  };
};

export default function PortfolioDetail({ portfolioData }: PortfolioDetailProps) {
  return (
    <>
      <Head>
        <title>{portfolioData.title} - RootAMZ Portfolio</title>
        <meta name="description" content={portfolioData.description} />
      </Head>

      <div className="min-h-screen bg-dark text-white">
        <Navbar />

        <main className="pt-32 pb-20">
          <article className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <span className="text-purple-400 mb-4 block">{portfolioData.category}</span>
                <h1 className="text-4xl font-bold mb-6">{portfolioData.title}</h1>
                <p className="text-xl text-gray-300 mb-8">{portfolioData.description}</p>

                <div className="relative h-[400px] rounded-xl overflow-hidden mb-12">
                  <img
                    src={portfolioData.image}
                    alt={portfolioData.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid gap-12">
                  <section>
                    <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                    <p className="text-gray-300">{portfolioData.challenge}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
                    <p className="text-gray-300">{portfolioData.solution}</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">Results</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {portfolioData.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section 
                    className="prose prose-invert prose-purple max-w-none"
                    dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }} 
                  />
                </div>
              </motion.div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
} 