import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      t(
        'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
        'Your message has been sent successfully! We will contact you soon.'
      )
    );
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: { ar: 'الهاتف', en: 'Phone' },
      content: '+964 XXX XXX XXXX'
    },
    {
      icon: Mail,
      title: { ar: 'البريد الإلكتروني', en: 'Email' },
      content: 'info@ngu.edu'
    },
    {
      icon: MapPin,
      title: { ar: 'العنوان', en: 'Address' },
      content: { ar: 'بغداد، العراق', en: 'Baghdad, Iraq' }
    }
  ];

  const socialMedia = [
    { icon: Facebook, link: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, link: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, link: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, link: '#', color: 'hover:text-blue-700' }
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('تواصل معنا', 'Contact Us')}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              'نحن هنا للإجابة على استفساراتكم ومساعدتكم',
              'We are here to answer your questions and assist you'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <h3 className="text-2xl font-display font-bold mb-6">
              {t('معلومات الاتصال', 'Contact Information')}
            </h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {t(info.title.ar, info.title.en)}
                  </h4>
                  <p className="text-muted-foreground">
                    {typeof info.content === 'string' 
                      ? info.content 
                      : t(info.content.ar, info.content.en)
                    }
                  </p>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="font-semibold mb-4">
                {t('تابعنا على', 'Follow Us')}
              </h4>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`w-12 h-12 rounded-full bg-background flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105905.68573654724!2d44.36219804963375!3d33.31240499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2sBaghdad%2C%20Iraq!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t('أرسل رسالة', 'Send a Message')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">
                    {t('الاسم', 'Name')}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('أدخل اسمك', 'Enter your name')}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email">
                    {t('البريد الإلكتروني', 'Email')}
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('أدخل بريدك الإلكتروني', 'Enter your email')}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">
                    {t('الموضوع', 'Subject')}
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t('أدخل موضوع الرسالة', 'Enter message subject')}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">
                    {t('الرسالة', 'Message')}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('اكتب رسالتك هنا', 'Write your message here')}
                    required
                    rows={5}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary text-primary hover:bg-secondary/90 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  {t('إرسال', 'Send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
