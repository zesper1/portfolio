import { Link } from 'react-router-dom';
import { Menu, Terminal } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0 border-x-0 border-t-0 bg-surface/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="text-secondary w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">zedrick.dev</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#about" className="text-text-muted hover:text-white transition-colors">About</a>
              <a href="#tech" className="text-text-muted hover:text-white transition-colors">Tech Stack</a>
              <a href="#projects" className="text-text-muted hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-text-muted hover:text-white transition-colors">Experience</a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-text-muted hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
