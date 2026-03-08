import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, FolderOpen, CreditCard, Users, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (path === '/') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          if (sectionId) {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', url: '/', icon: Home, sectionId: '' },
    { name: 'Services', url: '/', icon: Briefcase, sectionId: 'services' },
    { name: 'Work', url: '/', icon: FolderOpen, sectionId: 'portfolio' },
    { name: 'Pricing', url: '/', icon: CreditCard, sectionId: 'pricing' },
    { name: 'About', url: '/', icon: Users, sectionId: 'about' },
    { name: 'Contact', url: '/', icon: Mail, sectionId: 'contact' },
  ];

  const tubelightItems = navItems.map(({ name, url, icon }) => ({ name, url, icon }));

  return (
    <>
      {/* Main Navbar — logo + book a call */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-[0_1px_0_0_#E5E7EB]' : ''
          }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center gap-2 z-50"
          >
            <div className="h-12 flex items-center">
              <img
                src="/pixonx-full-logo.png"
                alt="Pixonx AI Studio"
                className="h-full w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop — Tubelight Nav (centered) */}
          <div className="hidden lg:block">
            <NavBar
              items={tubelightItems}
              className="!fixed !left-1/2 !-translate-x-1/2 !top-0 !pt-3 !mb-0 !bottom-auto"
              onItemClick={(item) => {
                const navItem = navItems.find(n => n.name === item.name);
                if (navItem) handleNavigation(navItem.url, navItem.sectionId);
              }}
            />
          </div>

          {/* Book a Call — Desktop */}
          <div className="hidden lg:block">
            <button
              data-cal-link="pixonx-ai-rr9on1/30min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="btn-book-call"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#111111] p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6">
              {navItems.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.url, link.sectionId)}
                  className="text-xl font-medium text-[#111111] hover:text-[#3B82F6] transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => setMobileMenuOpen(false)}
                data-cal-link="pixonx-ai-rr9on1/30min"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="btn-book-call text-base mt-4 px-8 py-3"
              >
                Book a Call
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile — Tubelight nav at bottom */}
      <div className="lg:hidden">
        <NavBar
          items={tubelightItems}
          className="!top-auto !bottom-0 !pt-0 !mb-4"
          onItemClick={(item) => {
            const navItem = navItems.find(n => n.name === item.name);
            if (navItem) handleNavigation(navItem.url, navItem.sectionId);
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
