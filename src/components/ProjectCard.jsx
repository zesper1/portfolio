import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  // Use the first image conceptually as the thumbnail
  const thumbnail = project.images.dashboard || project.images.flow || project.images.login;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
        <img 
          src={thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-text-muted text-sm mb-4 line-clamp-2">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs py-1 px-2 rounded bg-white/5 text-text-muted border border-white/10">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
             <span className="text-xs py-1 px-2 rounded bg-white/5 text-text-muted border border-white/10">
               +{project.techStack.length - 3}
             </span>
          )}
        </div>
        
        <Link 
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors"
        >
          View Project Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
