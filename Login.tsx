import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { GraduationCap, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

type UserType = 'student' | 'teacher' | null;

export default function Login() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    academicNumber: '',
    password: '',
    phone: '',
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', { userType, formData });
    
    // Navigate to appropriate dashboard
    if (userType === 'student') {
      navigate('/student-dashboard');
    } else if (userType === 'teacher') {
      navigate('/doctor-dashboard');
    }
  };

  const teamMembers = [
    'البراء نشوان نعمان',
    'أسامة محمد الرجوي',
    'رياض محمد الروحاني',
    'عماد عادل الكوكباني',
    'حمزة منصور الحرازي',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="w-full max-w-4xl">
          {/* User Type Selection */}
          {!userType && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  تسجيل الدخول
                </h1>
                <p className="text-lg text-muted-foreground">
                  اختر نوع الحساب للمتابعة
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
                <Card
                  className="p-8 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-secondary group"
                  onClick={() => setUserType('student')}
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <GraduationCap className="w-10 h-10 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">تسجيل دخول الطالب</h3>
                    <p className="text-muted-foreground">للطلاب المسجلين في الجامعة</p>
                  </div>
                </Card>

                <Card
                  className="p-8 cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-secondary group"
                  onClick={() => setUserType('teacher')}
                >
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <User className="w-10 h-10 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">تسجيل دخول الدكتور</h3>
                    <p className="text-muted-foreground">لأعضاء هيئة التدريس</p>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Student Login Form */}
          {userType === 'student' && (
            <Card className="p-8 md:p-12 max-w-md mx-auto animate-fade-in">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">تسجيل دخول الطالب</h2>
                <p className="text-muted-foreground">أدخل بياناتك للدخول إلى حسابك</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="academicNumber" className="text-right block text-foreground font-semibold">
                    الرقم الأكاديمي
                  </Label>
                  <Input
                    id="academicNumber"
                    type="text"
                    value={formData.academicNumber}
                    onChange={(e) => setFormData({ ...formData, academicNumber: e.target.value })}
                    placeholder="أدخل الرقم الأكاديمي"
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-right block text-foreground font-semibold">
                    كلمة المرور
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="أدخل كلمة المرور"
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-right block text-foreground font-semibold">
                    رقم الهاتف
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="أدخل رقم الهاتف"
                    required
                    className="text-right"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-primary font-bold py-6"
                  >
                    دخول
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setUserType(null)}
                    className="px-8 py-6"
                  >
                    رجوع
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Teacher Login Form */}
          {userType === 'teacher' && (
            <Card className="p-8 md:p-12 max-w-md mx-auto animate-fade-in">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">تسجيل دخول الدكتور</h2>
                <p className="text-muted-foreground">أدخل بياناتك للدخول إلى حسابك</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-right block text-foreground font-semibold">
                    الاسم
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل الاسم الكامل"
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teacherPhone" className="text-right block text-foreground font-semibold">
                    رقم الهاتف
                  </Label>
                  <Input
                    id="teacherPhone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="أدخل رقم الهاتف"
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-right block text-foreground font-semibold">
                    البريد الإلكتروني
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="أدخل البريد الإلكتروني"
                    required
                    className="text-right"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-primary font-bold py-6"
                  >
                    دخول
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setUserType(null)}
                    className="px-8 py-6"
                  >
                    رجوع
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </main>

      {/* Team Section */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              فريق العمل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg border border-border hover:shadow-lg hover:border-secondary transition-all duration-300"
                >
                  <p className="text-base font-semibold text-foreground">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
