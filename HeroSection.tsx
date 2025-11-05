import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, GraduationCap, Users, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroCampus from '@/assets/ngu-building.jpg';

export const HeroSection = () => {
  const { t } = useLanguage();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: GraduationCap, number: '10,000+', label: { ar: 'طالب وطالبة', en: 'Students' } },
    { icon: Users, number: '500+', label: { ar: 'عضو هيئة تدريس', en: 'Faculty Members' } },
    { icon: Award, number: '15+', label: { ar: 'برنامج أكاديمي', en: 'Academic Programs' } },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <img
          src={heroCampus}
          alt="University Campus"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-display font-bold animate-fade-in-up">
            {t('جامعة الجيل الجديد', 'New Generation University')}
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary font-semibold animate-fade-in-up animation-delay-200">
            {t('نحو مستقبل أكاديمي متميز', 'Towards a Distinguished Academic Future')}
          </p>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            {t(
              'مؤسسة تعليمية رائدة تهدف إلى إعداد خريجين متخصصين ومؤهلين علميًا وتقنيًا لخدمة المجتمع',
              'A leading educational institution aiming to prepare specialized and scientifically qualified graduates to serve the community'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              onClick={() => document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-xl"
            >
              {t('التقديم الآن', 'Apply Now')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              {t('اكتشف المزيد', 'Discover More')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in animation-delay-600">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-md rounded-lg p-6 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <div className="text-3xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-primary-foreground">{t(stat.label.ar, stat.label.en)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-foreground hover:text-secondary transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
