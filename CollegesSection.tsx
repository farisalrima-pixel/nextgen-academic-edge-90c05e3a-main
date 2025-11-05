import { Stethoscope, Laptop, Building2, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export const CollegesSection = () => {
  const { t } = useLanguage();

  const colleges = [
    {
      icon: Laptop,
      title: { ar: 'كلية الهندسة', en: 'College of Engineering' },
      description: {
        ar: 'برامج هندسية متقدمة في مختلف التخصصات',
        en: 'Advanced engineering programs in various specializations'
      },
      programs: [
        { ar: 'هندسة الكمبيوتر', en: 'Computer Engineering' },
        { ar: 'الهندسة المدنية', en: 'Civil Engineering' },
        { ar: 'الهندسة الكهربائية', en: 'Electrical Engineering' },
        { ar: 'الهندسة الميكانيكية', en: 'Mechanical Engineering' }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Stethoscope,
      title: { ar: 'كلية الطب', en: 'College of Medicine' },
      description: {
        ar: 'برامج طبية شاملة مع تدريب عملي متقدم',
        en: 'Comprehensive medical programs with advanced practical training'
      },
      programs: [
        { ar: 'الطب العام', en: 'General Medicine' },
        { ar: 'طب الأسنان', en: 'Dentistry' },
        { ar: 'الصيدلة', en: 'Pharmacy' },
        { ar: 'التمريض', en: 'Nursing' }
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Building2,
      title: { ar: 'كلية إدارة الأعمال', en: 'College of Business Administration' },
      description: {
        ar: 'تطوير المهارات القيادية والإدارية',
        en: 'Developing leadership and management skills'
      },
      programs: [
        { ar: 'إدارة الأعمال', en: 'Business Management' },
        { ar: 'المحاسبة', en: 'Accounting' },
        { ar: 'التسويق', en: 'Marketing' },
        { ar: 'الاقتصاد', en: 'Economics' }
      ],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: BookOpen,
      title: { ar: 'كلية العلوم الإنسانية', en: 'College of Humanities' },
      description: {
        ar: 'دراسات إنسانية واجتماعية متنوعة',
        en: 'Diverse humanities and social studies'
      },
      programs: [
        { ar: 'اللغة الإنجليزية', en: 'English Language' },
        { ar: 'علم النفس', en: 'Psychology' },
        { ar: 'علم الاجتماع', en: 'Sociology' },
        { ar: 'القانون', en: 'Law' }
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="colleges" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('كلياتنا', 'Our Colleges')}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              'نقدم مجموعة متنوعة من البرامج الأكاديمية المتميزة في مختلف التخصصات',
              'We offer a diverse range of distinguished academic programs in various specializations'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {colleges.map((college, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${college.color}`}></div>
              
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${college.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <college.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      {t(college.title.ar, college.title.en)}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t(college.description.ar, college.description.en)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <h4 className="font-semibold mb-3 text-secondary">
                  {t('البرامج المتاحة:', 'Available Programs:')}
                </h4>
                <ul className="space-y-2">
                  {college.programs.map((program, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      {t(program.ar, program.en)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
