
import React, { useEffect, useRef } from 'react';
import { Building, GraduationCap, Globe, MapPin, Music, Utensils, Palette } from 'lucide-react';

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
            Product, Impact, and Innovation
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm card-hover max-w-4xl w-full">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm a product professional and ecosystem builder dedicated to crafting solutions that blend innovation and impact for real-world problems. Currently, I am leading product growth at RentCheck, a Tech-stars backed early stage startup automating rental property inspections.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Previously, I was an emerging markets sales trader at Goldman Sachs. I graduated from the University of Chicago magna cum laude with a degree in Economics and Data Science.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-soft-purple rounded-lg">
                      <Building className="w-5 h-5 text-purple" />
                    </div>
                    <span className="text-sm">RentCheck</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-soft-purple rounded-lg">
                      <GraduationCap className="w-5 h-5 text-purple" />
                    </div>
                    <span className="text-sm">UChicago</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-soft-purple rounded-lg">
                      <Globe className="w-5 h-5 text-purple" />
                    </div>
                    <span className="text-sm">Ecuador</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-soft-purple rounded-lg">
                      <MapPin className="w-5 h-5 text-purple" />
                    </div>
                    <span className="text-sm">Queens, NYC</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/aea47397-7398-463e-9ed2-11a341a6a7e3.png" 
                  alt="RentCheck interface" 
                  className="w-full rounded-lg mb-6 shadow-md"
                />
                
                <div className="bg-soft-purple p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple mb-3">Fun Facts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex items-center gap-2">
                      <Utensils className="w-4 h-4 text-purple" />
                      <span className="text-sm">Ceviche lover</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-purple" />
                      <span className="text-sm">Bachata dancer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-purple" />
                      <span className="text-sm">Purple enthusiast</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-5">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                        <span className="font-bold text-purple">Py</span>
                      </div>
                      <p className="text-xs text-center">Python</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                        <span className="font-bold text-purple">SQL</span>
                      </div>
                      <p className="text-xs text-center">Database</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 flex items-center justify-center bg-soft-purple rounded-full mb-2">
                        <span className="font-bold text-purple">API</span>
                      </div>
                      <p className="text-xs text-center">Postman</p>
                    </div>
                  </div>
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
