import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X, LogIn } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import nguLogo from '@/assets/ngu-building.jpg';

export const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const navigate = useNavigate();
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
    { ar: 'الرئيسية', en: 'Home', href: '#hero' },
    { ar: 'عن الجامعة', en: 'About', href: '#about' },
    { ar: 'الكليات', en: 'Colleges', href: '#colleges' },
    { ar: 'القبول', en: 'Admission', href: '#admission' },
    { ar: 'الأخبار', en: 'News', href: '#news' },
    { ar: 'تواصل معنا', en: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
              <img src={nguLogo} alt="NGU Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-primary-foreground">
              <h1 className="text-xl font-display font-bold leading-tight">
                {t('جامعة الجيل الجديد', 'New Generation University')}
              </h1>
              <p className="text-xs text-secondary font-semibold">NGU</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium text-sm relative group"
              >
                {t(item.ar, item.en)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Login, Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              onClick={() => navigate('/login')}
              className="bg-secondary text-primary hover:bg-secondary/90 font-semibold"
            >
              <LogIn className="w-4 h-4 ml-2" />
              {t('تسجيل الدخول', 'Login')}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="bg-transparent border-secondary text-primary-foreground hover:bg-secondary hover:text-primary"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'EN' : 'عربي'}
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary-foreground hover:text-secondary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 bg-primary/98 backdrop-blur-md animate-fade-in">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-right py-3 px-4 text-primary-foreground hover:bg-secondary hover:text-primary transition-colors"
              >
                {t(item.ar, item.en)}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
