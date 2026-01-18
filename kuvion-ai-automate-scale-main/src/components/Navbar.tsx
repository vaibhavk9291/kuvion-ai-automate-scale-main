import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);

    if (path === '/') {
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          if (sectionId) {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', sectionId: '' },
    { name: 'Services', path: '/', sectionId: 'services' },
    { name: 'Testimonials', path: '/', sectionId: 'testimonials' },
    { name: 'About Us', path: '/about', sectionId: '' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card py-3' : 'py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNavigation('/')} className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="Pixonx AI Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">Pixonx AI</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path, link.sectionId)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            data-cal-link="pixonx-ai-rr9on1/30min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className="btn-primary text-sm"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path, link.sectionId)}
                className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              data-cal-link="pixonx-ai-rr9on1/30min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="btn-primary text-lg mt-8"
            >
              Book a Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
