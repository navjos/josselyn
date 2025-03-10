
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 md:px-10 section-transition"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full bg-soft-purple text-purple mb-4">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Recent Projects & Roles
          </h2>
          
          <div className="max-w-2xl text-center mb-12">
            <p className="text-muted-foreground">
              Explore a selection of my recent work and projects that demonstrate my creativity and problem-solving skills.
            </p>
          </div>
          
          <Link 
            to="/portfolio" 
            className="group flex items-center gap-2 bg-purple hover:bg-purple-dark text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            View Full Portfolio 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
