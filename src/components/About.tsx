
import React, { useEffect, useRef } from 'react';
import { Building, GraduationCap, LineChart, CircuitBoard, Database, Send } from 'lucide-react';

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
            Professional Background
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-soft-purple rounded-lg">
                  <Building className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-xl font-semibold text-purple">Current Role</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Product Growth Analyst at RentCheck (Techstars-backed startup), driving trial conversions and user activation through data-driven decisions.
              </p>
              <img 
                src="/lovable-uploads/aea47397-7398-463e-9ed2-11a341a6a7e3.png" 
                alt="RentCheck interface" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-soft-purple rounded-lg">
                  <LineChart className="w-6 h-6 text-purple" />
                </div>
                <h3 className="text-xl font-semibold text-purple">Leadership</h3>
              </div>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start gap-2">
                  <GraduationCap className="w-5 h-5 mt-1 flex-shrink-0" />
                  Founder of WealthOnThe7, a bilingual finance education newsletter
                </li>
                <li className="flex items-start gap-2">
                  <Building className="w-5 h-5 mt-1 flex-shrink-0" />
                  Co-founder of UChicago BOLD, preparing Latino students for business careers
                </li>
              </ul>
              <img 
                src="/lovable-uploads/508237c3-a768-496c-9512-d3c3cc6a76e0.png" 
                alt="BOLD organization" 
                className="w-full rounded-lg mt-4"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover md:col-span-2">
              <h3 className="text-xl font-semibold mb-6 text-purple">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                    <CircuitBoard className="w-8 h-8 text-purple" />
                  </div>
                  <p className="font-medium">Python</p>
                  <p className="text-sm text-muted-foreground">3 years</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                    <Database className="w-8 h-8 text-purple" />
                  </div>
                  <p className="font-medium">SQL</p>
                  <p className="text-sm text-muted-foreground">1 year</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                    <Send className="w-8 h-8 text-purple" />
                  </div>
                  <p className="font-medium">Postman</p>
                  <p className="text-sm text-muted-foreground">1 year</p>
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
