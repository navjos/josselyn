import React, { useEffect, useRef } from 'react';
import { Building, GraduationCap, Globe, MapPin, Music, Utensils, Palette, CircuitBoard, Database, Send } from 'lucide-react';
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return <section ref={sectionRef} className="py-20 px-6 md:px-10 bg-soft-gray section-transition">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full bg-soft-purple text-purple mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Product, Impact, and Innovation
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm card-hover max-w-4xl w-full mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <p className="text-muted-foreground mb-6 leading-relaxed">I’m a product professional and ecosystem builder focused on creating solutions that merge innovation with real-world impact. Currently, I serve as an Associate Product Manager at American Express. Before that, I drove product-led growth at RentCheck, a Techstars-backed startup automating rental property inspections.</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">Earlier in my career, I was an equities sales trader at Goldman Sachs. I hold a bachelor’s degree in Economics with a minor in Data Science from the University of Chicago, where I graduated magna cum laude.</p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-soft-purple rounded-lg">
                      <Building className="w-5 h-5 text-purple" />
                    </div>
                    <span className="text-sm">Startup operator, Goldman Sachs</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-soft-purple rounded-lg">
                      <GraduationCap className="w-5 h-5 text-purple" />
                    </div>
                    <span className="text-sm">University of Chicago</span>
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
                <img src="/lovable-uploads/aea47397-7398-463e-9ed2-11a341a6a7e3.png" alt="RentCheck interface" className="w-full rounded-lg mb-6 shadow-md" />
              </div>
            </div>
          </div>
          
          {/* Technical background card */}
          <div className="bg-white p-8 rounded-xl shadow-sm card-hover max-w-4xl w-full">
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Background</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-3">
                  <CircuitBoard className="w-8 h-8 text-purple" />
                </div>
                <p className="font-medium">Python</p>
                <p className="text-sm text-muted-foreground">3+ years</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-3">
                  <Database className="w-8 h-8 text-purple" />
                </div>
                <p className="font-medium">SQL</p>
                <p className="text-sm text-muted-foreground">1+ years</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-soft-purple rounded-full mb-3">
                  <Send className="w-8 h-8 text-purple" />
                </div>
                <p className="font-medium">REST APIs</p>
                <p className="text-sm text-muted-foreground">1+ years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;