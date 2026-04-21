export default function ExperienceList({ experience, certifications }) {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Experience
          </h2>
          <div className="space-y-8 border-l border-white/10 pl-6 ml-2 relative">
            {experience.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-8 w-3 h-3 bg-primary rounded-full ring-4 ring-background top-1.5" />
                <div className="flex flex-col mb-1">
                  <span className="text-sm font-semibold text-primary">{item.date}</span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-text-muted font-medium">{item.organization}</span>
                </div>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-accent rounded-full"></span>
            Certifications
          </h2>
          <div className="space-y-8 border-l border-white/10 pl-6 ml-2 relative">
            {certifications.map((item, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-8 w-3 h-3 bg-accent rounded-full ring-4 ring-background top-1.5" />
                <div className="flex flex-col mb-1">
                  <span className="text-sm font-semibold text-accent">{item.date}</span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-text-muted font-medium">{item.organization}</span>
                </div>
                <p className="text-text-muted text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
