
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import About from './components/About';
import Educational from './components/Educational';
import Catalog from './components/Catalog';
import Gallery from './components/Gallery';
import Advantages from './components/Advantages';
import QualityProcess from './components/QualityProcess';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a delay or when all images/assets have loaded
    const handleLoad = () => {
      // Small timeout for smoother transition
      setTimeout(() => setIsLoading(false), 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'showcase', 'about', 'catalog', 'quality', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-red-200">
      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      <Navbar activeTab={activeTab} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <ProductShowcase />

        <section id="about" className="py-20">
          <About />
        </section>

        <Educational />

        <section id="catalog" className="py-20 bg-white">
          <Catalog />
        </section>

        <section id="quality" className="py-20 bg-gray-50">
          <QualityProcess />
        </section>

        <section id="gallery" className="py-20 bg-white">
          <Gallery />
        </section>

        <Advantages />

        <section id="faq" className="py-20 bg-gray-50">
          <FAQ />
        </section>

        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
