
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface WorkCardProps {
  title: string;
  description: string;
  index: number;
}

const WorkCard = ({ title, description, index }: WorkCardProps) => (
  <div 
    className="bg-white p-8 rounded-xl shadow-sm card-hover"
    style={{ animationDelay: `${0.2 * index}s` }}
  >
    <h3 className="text-xl font-semibold mb-3 text-purple">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
  </div>
);

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

  const works = [
    {
      title: "Product Growth Analyst",
      description: "At RentCheck, I analyze user behavior and implement strategies to drive growth and engagement."
    },
    {
      title: "WealthOnThe7",
      description: "Founded a bilingual Substack newsletter focused on personal finance education and wealth building."
    },
    {
      title: "Web Applications",
      description: "Created practical financial tools including a retirement calculator and debt repayment planner."
    }
  ];

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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
            {works.map((work, index) => (
              <WorkCard 
                key={index}
                title={work.title}
                description={work.description}
                index={index}
              />
            ))}
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
