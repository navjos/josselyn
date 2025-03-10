
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  image?: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  link,
  image,
  icon,
  className = "",
  delay = 0 
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-[#e5deff]/40 z-10" /> {/* Soft lilac overlay */}
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          
          {link && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md flex items-center gap-1.5 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Visit {icon ? "" : "Project"} <ExternalLink size={16} />
              </a>
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {icon && (
            <div className="w-8 h-8 flex items-center justify-center bg-soft-purple rounded-full">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-purple-600">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-5">{description}</p>
        
        {/* Removed the link from here as it's now in the image */}
      </div>
    </div>
  );
};

export default ProjectCard;
