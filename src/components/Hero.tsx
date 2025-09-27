
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div 
          ref={textRef}
          className="lg:w-1/2 text-center lg:text-left section-transition"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Hi, I'm <span className="text-purple">Josselyn</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Product manager with background in sales trading and product growth, driving scalable product experiences in regulated industries.
          </p>
        </div>
        
        <div 
          ref={imageRef}
          className="lg:w-1/2 flex justify-center lg:justify-end section-transition"
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple/20 rounded-2xl transform rotate-3 scale-105"></div>
            <img 
              src="/lovable-uploads/8cfa08cb-21ab-4f1e-ba09-3a3bfb4d2a41.png" 
              alt="Josselyn portrait" 
              className="hero-image w-full max-w-md rounded-2xl object-cover z-10 relative animate-fade-in shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
