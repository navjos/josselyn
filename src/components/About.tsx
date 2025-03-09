
import React, { useEffect, useRef } from 'react';
import { Database, Send, CircuitBoard } from 'lucide-react';

const About = () => {
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
      className="py-20 px-6 md:px-10 bg-soft-gray section-transition"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full bg-soft-purple text-purple mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Product, Growth & Innovation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <h3 className="text-xl font-semibold mb-4 text-purple">Experience</h3>
              <div className="flex flex-col space-y-4">
                <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                  <li>Currently a Product Growth Analyst at RentCheck, an early-stage Techstars-backed startup helping automate rental property inspections.</li>
                  <li>I use data insights to optimize trial conversions, enhance onboarding, and refine user journeys to boost activation.</li>
                  <li>Previously, I was an equities trader at Goldman Sachs.</li>
                </ul>
                <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/aea47397-7398-463e-9ed2-11a341a6a7e3.png" 
                    alt="RentCheck product interface" 
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <h3 className="text-xl font-semibold mb-4 text-purple">Leadership</h3>
              <div className="flex flex-col space-y-4">
                <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                  <li>Founder of WealthOnThe7, a bilingual Substack newsletter democratizing personal finance education for Main Street Professionals.</li>
                  <li>Co-founder of the University of Chicago's BOLD, the first organization aimed at preparing Latino undergraduate students for careers in business.</li>
                  <li>Youngest board member of La Unidad Latina Foundation.</li>
                </ul>
                <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/508237c3-a768-496c-9512-d3c3cc6a76e0.png" 
                    alt="BOLD organization" 
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-purple">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-8 mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                    <CircuitBoard className="w-8 h-8 text-purple" />
                  </div>
                  <p className="font-medium text-lg">Python</p>
                  <p className="text-muted-foreground">3 years</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                    <Database className="w-8 h-8 text-purple" />
                  </div>
                  <p className="font-medium text-lg">SQL</p>
                  <p className="text-muted-foreground">1 year</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                    <Send className="w-8 h-8 text-purple" />
                  </div>
                  <p className="font-medium text-lg">Postman</p>
                  <p className="text-muted-foreground">1 year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
