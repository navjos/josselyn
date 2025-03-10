
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { ExternalLink, Briefcase, BookOpen, Building, GraduationCap } from 'lucide-react';

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
      title: "Product Growth at RentCheck",
      description: "Optimizing conversion funnels and improving user retention through data-driven product decisions.",
      icon: <Building className="w-5 h-5" />,
      image: "/lovable-uploads/eff3a298-3ca6-42a5-b87d-4ce21f5fa189.png",
      link: "https://www.getrentcheck.com/",
      delay: 0.1
    },
    {
      title: "WealthOnThe7",
      description: "Bilingual personal finance newsletter breaking down complex financial concepts for everyday professionals.",
      icon: <BookOpen className="w-5 h-5" />,
      image: "/lovable-uploads/3086d3c4-f336-4320-875f-782aa55748ae.png",
      link: "https://wealthonthe7.substack.com/",
      delay: 0.2
    },
    {
      title: "Business Organization for Latino Development",
      description: "Supporting Latino students at UChicago with networking events and mentorship programs.",
      icon: <GraduationCap className="w-5 h-5" />,
      image: "/lovable-uploads/508237c3-a768-496c-9512-d3c3cc6a76e0.png",
      link: "https://www.uchicagobold.org/",
      delay: 0.3
    },
    {
      title: "La Unidad Latina Foundation",
      description: "Board member providing scholarships and educational opportunities for underrepresented communities.",
      icon: <Briefcase className="w-5 h-5" />,
      image: "/lovable-uploads/a053c33f-3f54-4ec6-89ba-4ae4c0da1580.png",
      link: "https://www.lulfoundation.org/",
      delay: 0.4
    }
  ];

  const applications = [
    {
      title: "Retirement Planning Tool",
      description: "Interactive calculator for financial independence planning with personalized recommendations.",
      image: "/lovable-uploads/835acc7f-cc63-48ef-a46b-68c6555bc199.png",
      link: "https://navjos.github.io/fire-calculator/",
      delay: 0.5
    },
    {
      title: "Debt Repayment Planner",
      description: "Strategic debt repayment application minimizing interest through optimized payment scheduling.",
      image: "/lovable-uploads/82b3eb1b-f824-44a5-abbf-571b69c6db28.png",
      link: "https://payplanwizard.lovable.app/auth",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      <main className="pt-24 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="section-transition mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Professional experiences, leadership roles, and technical projects
            </p>
          </div>
          
          <section className="mb-16 section-transition">
            <div className="inline-block px-3 py-1 rounded-full bg-soft-purple text-purple mb-6">
              Experience & Leadership
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <ProjectCard 
                  key={index}
                  title={exp.title}
                  description={exp.description}
                  link={exp.link}
                  icon={exp.icon}
                  image={exp.image}
                  delay={exp.delay}
                />
              ))}
            </div>
          </section>
          
          <section className="section-transition">
            <div className="inline-block px-3 py-1 rounded-full bg-soft-purple text-purple mb-6">
              Web Applications
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <ProjectCard 
                  key={index}
                  title={app.title}
                  description={app.description}
                  link={app.link}
                  image={app.image}
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
