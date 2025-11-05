import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import studentsStudying from '@/assets/students-studying.jpg';

export const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Eye,
      title: { ar: 'الرؤية', en: 'Vision' },
      content: {
        ar: 'أن نكون جامعة رائدة في التعليم والبحث العلمي على المستوى الإقليمي والعالمي',
        en: 'To be a leading university in education and scientific research at the regional and global level'
      }
    },
    {
      icon: Target,
      title: { ar: 'الرسالة', en: 'Mission' },
      content: {
        ar: 'تقديم تعليم عالي الجودة وإعداد كوادر مؤهلة تساهم في بناء المجتمع وتطويره',
        en: 'Providing high-quality education and preparing qualified personnel who contribute to building and developing society'
      }
    },
    {
      icon: Heart,
      title: { ar: 'القيم', en: 'Values' },
      content: {
        ar: 'التميز الأكاديمي، النزاهة، الابتكار، المسؤولية المجتمعية، والتعاون',
        en: 'Academic excellence, integrity, innovation, social responsibility, and collaboration'
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('عن الجامعة', 'About the University')}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              'جامعة الجيل الجديد مؤسسة تعليمية رائدة تهدف إلى إعداد خريجين متخصصين ومؤهلين علميًا وتقنيًا للمساهمة في تنمية المجتمع',
              'New Generation University is a leading educational institution that aims to prepare specialized and scientifically qualified graduates to contribute to community development'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src={studentsStudying}
              alt="Students Studying"
              className="rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-display font-bold">
              {t('بيئة تعليمية متميزة', 'Distinguished Learning Environment')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'توفر جامعة الجيل الجديد بيئة تعليمية حديثة ومتطورة تشمل مختبرات مجهزة بأحدث التقنيات، مكتبة شاملة تحتوي على آلاف المراجع العلمية، وقاعات دراسية مريحة مصممة لتعزيز التفاعل والإبداع.',
                'New Generation University provides a modern and advanced educational environment including laboratories equipped with the latest technologies, a comprehensive library containing thousands of scientific references, and comfortable classrooms designed to enhance interaction and creativity.'
              )}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                'نؤمن بأهمية التعليم النوعي الذي يجمع بين الجانب النظري والتطبيقي، مع التركيز على تطوير المهارات العملية والقيادية لدى طلابنا.',
                'We believe in the importance of quality education that combines theoretical and practical aspects, with a focus on developing practical and leadership skills in our students.'
              )}
            </p>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-center mb-4">
                {t(value.title.ar, value.title.en)}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {t(value.content.ar, value.content.en)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
