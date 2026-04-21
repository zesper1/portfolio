import { motion } from 'framer-motion';

export default function HeroSection({ personalInfo }) {
  return (
    <section id="about" className="pt-16 pb-12 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
          {personalInfo.location}
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Hi, I'm <br />
          <span className="text-gradient drop-shadow-md">{personalInfo.name}</span>
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {personalInfo.expertise.map((exp, index) => (
            <span key={index} className="text-sm font-medium text-text-muted glass-card px-4 py-2 rounded-lg">
              {exp}
            </span>
          ))}
        </div>
        
        <p className="max-w-2xl text-lg md:text-xl text-text-muted leading-relaxed">
          {personalInfo.intro}
        </p>
      </motion.div>
    </section>
  );
}
