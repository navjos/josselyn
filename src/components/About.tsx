
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
                As a Product Growth Analyst at RentCheck, I use data insights to optimize conversions, enhance onboarding, and refine user journeys to boost activation and reduce churn. I'm also the founder of WealthOnThe7, a bilingual personal finance Substack newsletter that empowers readers to make better financial decisions. Previously, I was an equities trader at Goldman Sachs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover">
              <h3 className="text-xl font-semibold mb-4 text-purple">Leadership</h3>
              <p className="text-muted-foreground">
                I'm the co-founder of the Business Organization for Latino Development at the University of Chicago and serve as the youngest board member of La Unidad Latina Foundation, where I help create educational opportunities for underrepresented communities through a national scholarship.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm card-hover md:col-span-2">
              <h3 className="text-xl font-semibold mb-4 text-purple">Technical Skills</h3>
              <p className="text-muted-foreground">
                I continuously explore emerging AI tools and have built mini-apps such as a retirement planning tool and a debt repayment planner. With a minor in data science from the University of Chicago, I'm proficient in Python for statistical analysis. I also completed an IBM course on front-end development with React and back-end development with Node.js and Express.
                <br /><br />
                My blend of technical expertise and product acumen enables me to bridge the gap between engineering teams and user needs, translating insights into actionable technical requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
