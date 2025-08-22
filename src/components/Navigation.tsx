import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg border-b border-white/50 shadow-card' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="group flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("#")}>
            <div className="p-2 rounded-xl bg-primary-gradient text-white shadow-glow group-hover:animate-bounce transition-transform">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-black text-xl bg-text-gradient bg-clip-text text-transparent group-hover:animate-pulse">
              HARIDASS G
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-semibold group py-2"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            <Button 
              className="group bg-primary-gradient hover:shadow-glow text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6 text-primary" /> : 
              <Menu className="h-6 w-6 text-primary" />
            }
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 p-6 bg-white/90 backdrop-blur-lg rounded-2xl border border-white/50 shadow-card animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium py-3 px-4 rounded-xl hover:bg-primary/5 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-primary/20">
                <Button 
                  className="w-full bg-primary-gradient hover:shadow-glow text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;