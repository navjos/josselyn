
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // Add scroll reveal functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-transition');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        
        if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
          section.classList.add('active');
        }
      });
    };
    
    // Initial check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Product Growth Analyst at RentCheck",
      description: "Leveraging data insights to drive product decisions and growth strategies for a proptech startup. I analyze user behavior patterns and implement A/B tests to optimize conversion funnels and improve user retention.",
      delay: 0.1
    },
    {
      title: "Founder of WealthOnThe7",
      description: "Created and manage a bilingual personal finance newsletter on Substack that breaks down complex financial concepts into accessible advice. The newsletter has grown organically through word-of-mouth and consistently maintains high engagement rates.",
      delay: 0.2
    },
    {
      title: "Founder of Business Organization for Latino Development",
      description: "Established a student organization at UChicago dedicated to supporting Latino students interested in business careers. Organized networking events, workshops, and mentorship programs to connect students with industry professionals.",
      delay: 0.3
    },
    {
      title: "Board Member at La Unidad Latina Foundation",
      description: "Serve as the youngest board member of this foundation, helping to provide scholarships and educational opportunities for underrepresented communities. Contribute to strategic planning and outreach initiatives to expand the foundation's impact.",
      delay: 0.4
    }
  ];

  const applications = [
    {
      title: "Retirement Planning Tool",
      description: "An interactive calculator that helps users plan for financial independence and retirement. The tool visualizes savings growth over time and provides customized recommendations based on user inputs.",
      link: "https://navjos.github.io/fire-calculator/",
      delay: 0.5
    },
    {
      title: "Debt Repayment Planner",
      description: "A comprehensive web application that assists users in creating personalized debt repayment strategies. Features include payment scheduling, progress tracking, and optimization algorithms to minimize interest payments.",
      link: "https://payplanwizard.lovable.app/auth",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex mb-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md transition-colors shadow-sm"
            >
              <Home size={18} />
              Back to Home
            </Link>
          </div>
          
          <div className="section-transition">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A showcase of my professional experiences, leadership roles, and technical projects.
            </p>
          </div>
          
          <section className="mb-20 section-transition">
            <div className="inline-block px-3 py-1 rounded-full bg-soft-purple text-purple mb-6">
              Professional Experience
            </div>
            <h2 className="text-3xl font-bold mb-8">Roles & Organizations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <ProjectCard 
                  key={index}
                  title={exp.title}
                  description={exp.description}
                  delay={exp.delay}
                />
              ))}
            </div>
          </section>
          
          <section className="section-transition">
            <div className="inline-block px-3 py-1 rounded-full bg-soft-purple text-purple mb-6">
              Web Applications
            </div>
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <ProjectCard 
                  key={index}
                  title={app.title}
                  description={app.description}
                  link={app.link}
                  delay={app.delay}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
