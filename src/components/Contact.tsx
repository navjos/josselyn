
import React, { useEffect, useRef } from 'react';
import { Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
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
      className="py-20 px-6 md:px-10 bg-soft-purple section-transition"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full bg-white/80 text-purple mb-4">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-purple-dark">
            Let's Connect
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
            <p className="text-center text-muted-foreground mb-6">
              Interested in working together or have a question? Feel free to reach out.
            </p>
            
            <a 
              href="mailto:joss.navas09@gmail.com" 
              className="flex items-center justify-center gap-3 bg-purple hover:bg-purple-dark text-white py-4 px-6 rounded-lg w-full transition-all duration-300"
            >
              <Mail size={20} />
              joss.navas09@gmail.com
              <ExternalLink size={16} className="opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
