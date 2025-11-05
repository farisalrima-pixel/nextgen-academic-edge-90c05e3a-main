import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CollegesSection } from '@/components/CollegesSection';
import { NewsSection } from '@/components/NewsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Index = () => {
  const teamMembers = [
    'Albaraa Nashwan Naaman',
    'Osama Mohammed Al-Rujwai',
    'Riyadh Mohammed Al-Rouhani',
    'Emad Adel Al-Kawkabani',
    'Hamzah Mansour Al-Harazi',
  ];

  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CollegesSection />
        <NewsSection />
        <ContactSection />
      </main>

      {/* Team Members Section */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              فريق العمل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-lg hover:border-secondary transition-all duration-300"
                >
                  <p className="text-base font-semibold text-foreground">{member}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
