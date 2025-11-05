import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-display font-bold mb-2 text-secondary">
            {t('جامعة الجيل الجديد', 'New Generation University')}
          </h3>
          <p className="text-sm text-primary-foreground/80 mb-4">
            {t(
              'نحو مستقبل أكاديمي متميز',
              'Towards a Distinguished Academic Future'
            )}
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} {t('جامعة الجيل الجديد. جميع الحقوق محفوظة.', 'New Generation University. All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};
