
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300 w-full blur-bg',
        scrolled ? 'bg-white/80 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold text-purple hover:opacity-80 transition-opacity"
        >
          Josselyn
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link
            to="/portfolio"
            className={cn(
              'py-2 px-4 rounded-full transition-all duration-300',
              location.pathname === '/portfolio'
                ? 'bg-purple text-white'
                : 'bg-soft-purple text-purple hover:bg-purple hover:text-white'
            )}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
