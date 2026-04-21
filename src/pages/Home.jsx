import HeroSection from '../components/HeroSection';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import ExperienceList from '../components/ExperienceList';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';

export default function Home() {
  const handleEmailClick = () => {
    window.location.href = "mailto:dummy@example.com";
  };

  return (
    <div className="flex flex-col">
      <HeroSection personalInfo={portfolioData.personalInfo} />

      <TechStack techStack={portfolioData.techStack} />

      {/* Project Grid */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <ExperienceList
        experience={portfolioData.experience}
        certifications={portfolioData.certifications}
      />

      {/* Email Me Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <div className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Let's Connect</h2>
          <p className="text-lg text-text-muted max-w-xl mb-10 relative z-10 leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <button
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-3 bg-primary text-black hover:bg-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 z-10 shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1"
          >
            <Mail className="w-6 h-6 group-hover:-rotate-12 transition-transform" />
            zxdxsprx@gmail.com
          </button>
        </div>
      </section>
    </div>
  );
}
