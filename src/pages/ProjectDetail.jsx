import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { ArrowLeft, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = portfolioData.projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors mb-8 bg-surface/30 px-4 py-2 rounded-lg border border-white/5"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            {project.title}
          </h1>
          <p className="text-xl text-primary font-medium mb-6">{project.role}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 glass-card rounded-md text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Core Feature Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-white">
            <span className="w-8 h-1 bg-secondary rounded-full"></span>
            Core Feature Showcase
          </h2>
          
          {project.isMobileMockup ? (
            <div className="grid md:grid-cols-3 gap-8 justify-center">
              {[
                { title: "Preview Image 1", src: project.images?.login, anim: false },
                { title: "Preview Image 2", src: project.images?.dashboard, anim: false },
                { title: "Preview Image 3", src: project.images?.flow, anim: true },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center w-full">
                  <h3 className="text-text-muted font-semibold text-sm mb-4">{item.title}</h3>
                  <div className="relative w-full max-w-[300px] aspect-[9/19] bg-surface/50 rounded-2xl shadow-xl overflow-hidden border border-white/10 glass-panel">
                    {item.src ? (
                      item.anim ? (
                        <motion.img 
                          src={item.src} 
                          alt={item.title} 
                          className="w-full h-full object-contain cursor-pointer"
                          animate={{ scale: [1, 1.03, 1], filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"] }}
                          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                          onClick={() => setSelectedImage(item.src)}
                        />
                      ) : (
                        <img 
                          src={item.src} 
                          alt={item.title} 
                          className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => setSelectedImage(item.src)}
                        />
                      )
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-text-muted">
                        No Image
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Login / Access UI */}
              <div className="glass-panel p-2 rounded-2xl">
                <div className="bg-surface/80 rounded-xl overflow-hidden aspect-video relative group">
                  <div className="absolute inset-x-0 top-0 h-10 bg-black/40 flex items-center px-4 backdrop-blur-md z-10 pointer-events-none">
                    <span className="text-xs font-semibold text-white/70">Preview Image 1</span>
                  </div>
                  {project.images?.login ? (
                    <img 
                      src={project.images.login} 
                      alt="Preview Image 1" 
                      className="w-full h-full object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-300" 
                      onClick={() => setSelectedImage(project.images.login)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                       <CheckCircle2 className="w-12 h-12 text-secondary mb-4 opacity-50" />
                       <p className="text-text-muted">Preview Image 1</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Dashboard Analytics */}
              <div className="glass-panel p-2 rounded-2xl">
                <div className="bg-surface/80 rounded-xl overflow-hidden aspect-video relative group">
                   <div className="absolute inset-x-0 top-0 h-10 bg-black/40 flex items-center px-4 backdrop-blur-md z-10 pointer-events-none">
                    <span className="text-xs font-semibold text-white/70">Preview Image 2</span>
                  </div>
                  {project.images?.dashboard ? (
                    <img 
                      src={project.images.dashboard} 
                      alt="Preview Image 2" 
                      className="w-full h-full object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                      onClick={() => setSelectedImage(project.images.dashboard)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                       <CheckCircle2 className="w-12 h-12 text-primary mb-4 opacity-50" />
                       <p className="text-text-muted">Preview Image 2</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Edge Function / Workflow (Spans full width if needed, or 3rd column) */}
              <div className="glass-panel p-2 rounded-2xl lg:col-span-2">
                 <div className="bg-surface/80 rounded-xl overflow-hidden aspect-[21/9] relative group">
                   <div className="absolute inset-x-0 top-0 h-10 bg-black/40 flex items-center px-4 backdrop-blur-md z-10 pointer-events-none">
                    <span className="text-xs font-semibold text-white/70">Preview Image 3</span>
                  </div>
                  {project.images?.flow ? (
                    <motion.img 
                      src={project.images.flow} 
                      alt="Preview Image 3" 
                      className="w-full h-full object-cover cursor-pointer"
                      animate={{ scale: [1, 1.03, 1], filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"] }}
                      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                      onClick={() => setSelectedImage(project.images.flow)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                       <CheckCircle2 className="w-12 h-12 text-accent mb-4 opacity-50" />
                       <p className="text-text-muted">Preview Image 3</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Technical Highlights */}
        <section className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <h3 className="text-2xl font-bold mb-6 text-white">Technical Highlights & Solutions</h3>
          <p className="text-lg text-text-muted leading-relaxed relative z-10">
            {project.technicalHighlights}
          </p>
        </section>

      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Full Preview" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
