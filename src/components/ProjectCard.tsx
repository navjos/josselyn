
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  className?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link, 
  className = "",
  delay = 0 
}) => {
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-3 text-purple">{title}</h3>
        <p className="text-muted-foreground mb-5">{description}</p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-purple hover:text-purple-dark gap-1.5 transition-colors"
          >
            Visit Project <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
