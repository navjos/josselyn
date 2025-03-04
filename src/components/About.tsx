
import React, { useEffect, useRef } from 'react';

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
              <p className="text-muted-foreground">
                As a Product Growth Analyst at RentCheck, I leverage data insights to drive product decisions. 
                I've also founded WealthOnThe7, a bilingual personal finance newsletter that empowers readers 
                to make better financial decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <h3 className="text-xl font-semibold mb-4 text-purple">Leadership</h3>
              <p className="text-muted-foreground">
                I'm the founder of the Business Organization for Latino Development at UChicago and serve as 
                the youngest board member of La Unidad Latina Foundation, where I help create opportunities for 
                underrepresented communities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-purple">Technical Skills</h3>
              <p className="text-muted-foreground">
                I've built several web applications including a retirement planning tool and a debt repayment planner. 
                My technical background combined with product expertise allows me to communicate effectively with 
                engineering teams and translate user needs into technical requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
