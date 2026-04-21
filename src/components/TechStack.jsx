import { motion } from 'framer-motion';

export default function TechStack({ techStack }) {
  // 4 copies ensures it's wide enough for large monitors, and 50% shift precisely equates to 2 copies
  const duplicatedTech = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <section id="tech" className="py-12 w-full overflow-hidden relative">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
          Core Tech Stack
        </h2>
      </div>
      
      {/* Edge Fades & Marquee Track */}
      <div className="relative w-full flex group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedTech.map((tech, i) => (
            <div 
              key={i}
              className="px-6 py-3 glass-card rounded-full font-medium text-text-main shadow-lg border border-white/5 flex items-center justify-center shrink-0 hover:-translate-y-1 hover:border-primary/50 transition-all cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
