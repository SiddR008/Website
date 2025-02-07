import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-dark text-white">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
