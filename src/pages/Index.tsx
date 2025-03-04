
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedWorks from '@/components/FeaturedWorks';
import Contact from '@/components/Contact';

const Index = () => {
  // Add scroll reveal functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-transition');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
          section.classList.add('active');
        }
      });
    };
    
    // Initial check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWorks />
      <Contact />
    </div>
  );
};

export default Index;
