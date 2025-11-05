import { Calendar, Users, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const NewsSection = () => {
  const { t } = useLanguage();

  const news = [
    {
      icon: Award,
      date: { ar: '15 نوفمبر 2025', en: 'November 15, 2025' },
      title: {
        ar: 'تكريم الطلاب المتفوقين',
        en: 'Honoring Outstanding Students'
      },
      description: {
        ar: 'احتفالية تكريم الطلاب المتفوقين لهذا العام الأكاديمي',
        en: 'Celebration honoring outstanding students for this academic year'
      }
    },
    {
      icon: Users,
      date: { ar: '10 نوفمبر 2025', en: 'November 10, 2025' },
      title: {
        ar: 'ورشة عمل البحث العلمي',
        en: 'Scientific Research Workshop'
      },
      description: {
        ar: 'ورشة عمل متخصصة في منهجيات البحث العلمي الحديثة',
        en: 'Specialized workshop on modern scientific research methodologies'
      }
    },
    {
      icon: BookOpen,
      date: { ar: '5 نوفمبر 2025', en: 'November 5, 2025' },
      title: {
        ar: 'افتتاح المكتبة الرقمية',
        en: 'Digital Library Opening'
      },
      description: {
        ar: 'افتتاح المكتبة الرقمية الجديدة بآلاف المراجع العلمية',
        en: 'Opening of the new digital library with thousands of scientific references'
      }
    },
    {
      icon: Calendar,
      date: { ar: '1 نوفمبر 2025', en: 'November 1, 2025' },
      title: {
        ar: 'بدء التسجيل للفصل الدراسي القادم',
        en: 'Registration Opens for Next Semester'
      },
      description: {
        ar: 'بدء فترة التسجيل للطلاب الجدد والقدامى',
        en: 'Registration period begins for new and returning students'
      }
    }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('الأخبار والفعاليات', 'News & Events')}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              'تابع آخر أخبار الجامعة وفعالياتها المختلفة',
              'Follow the latest university news and various events'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-secondary group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-2">
                      {t(item.date.ar, item.date.en)}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {t(item.title.ar, item.title.en)}
                    </CardTitle>
                    <CardDescription>
                      {t(item.description.ar, item.description.en)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
