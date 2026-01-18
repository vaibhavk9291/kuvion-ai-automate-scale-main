import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, hash?: string) => {
    if (location.pathname !== path) {
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      if (hash) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand & Socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">P</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">Pixonx AI</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sarthaksharmaai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/KUVIONai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:pionxai@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button
              onClick={() => handleNavigation('/', 'services')}
              className="hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="hover:text-foreground transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="hover:text-foreground transition-colors"
            >
              Contact Us
            </button>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2026 Pixonx AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
