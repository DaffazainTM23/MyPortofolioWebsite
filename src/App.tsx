import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Interests from './sections/Interests';
import Languages from './sections/Languages';
import Awards from './sections/Awards';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
        {/* Classic animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg')] bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto relative mb-6">
              <div className="absolute inset-0 border-2 border-secondary-color rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dholsltcf/image/upload/v1748409749/DAFFA_csn4jq.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold text-white mb-2">
              My Portfolio
            </h1>
            <p className="text-2xl text-secondary-color font-medium">
              Ananda Nur Daffa Zain
            </p>
            <p className="text-lg text-gray-400">
              Mechanical Engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 text-gray-400"
          >
            Loading...
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-color text-text-color">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Awards />
        <Interests />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;