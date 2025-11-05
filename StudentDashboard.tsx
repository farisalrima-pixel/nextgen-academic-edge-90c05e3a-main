import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { User, BookOpen, DollarSign, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome Section */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              لوحة تحكم الطالب
            </h1>
            <p className="text-lg text-muted-foreground">
              مرحباً بك في نظام إدارة الطلاب
            </p>
          </div>

          {/* Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile" className="text-lg">
                <User className="w-5 h-5 ml-2" />
                الملف الشخصي
              </TabsTrigger>
              <TabsTrigger value="coursework" className="text-lg">
                <BookOpen className="w-5 h-5 ml-2" />
                المقررات الدراسية
              </TabsTrigger>
              <TabsTrigger value="fees" className="text-lg">
                <DollarSign className="w-5 h-5 ml-2" />
                الرسوم الدراسية
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card className="p-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">معلومات الطالب</h2>
                    <p className="text-muted-foreground">بياناتك الأكاديمية والشخصية</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">الرقم الأكاديمي</p>
                      <p className="text-lg font-semibold text-foreground">202401234</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">الاسم الكامل</p>
                      <p className="text-lg font-semibold text-foreground">محمد أحمد علي</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">الكلية</p>
                      <p className="text-lg font-semibold text-foreground">كلية الهندسة</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">التخصص</p>
                      <p className="text-lg font-semibold text-foreground">هندسة البرمجيات</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">المستوى الدراسي</p>
                      <p className="text-lg font-semibold text-foreground">المستوى الثالث</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">المعدل التراكمي</p>
                      <p className="text-lg font-semibold text-secondary">3.85 / 4.00</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Coursework Tab */}
            <TabsContent value="coursework" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">المقررات المسجلة</h2>
                
                <div className="space-y-4">
                  {[
                    { code: 'CS301', name: 'هندسة البرمجيات', hours: '3', grade: 'A' },
                    { code: 'CS302', name: 'قواعد البيانات', hours: '3', grade: 'A-' },
                    { code: 'CS303', name: 'الذكاء الاصطناعي', hours: '3', grade: 'B+' },
                    { code: 'CS304', name: 'أمن المعلومات', hours: '3', grade: 'A' },
                    { code: 'GEN201', name: 'اللغة الإنجليزية', hours: '2', grade: 'B' },
                  ].map((course, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-secondary/10 text-secondary font-mono rounded">
                              {course.code}
                            </span>
                            <h3 className="text-lg font-bold text-foreground">{course.name}</h3>
                          </div>
                          <p className="text-muted-foreground">الساعات المعتمدة: {course.hours}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-1">التقدير</p>
                          <p className="text-2xl font-bold text-secondary">{course.grade}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">إجمالي الساعات المسجلة:</span>
                    <span className="text-2xl font-bold text-secondary">14 ساعة</span>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Fees Tab */}
            <TabsContent value="fees" className="space-y-6">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">الرسوم الدراسية</h2>
                
                <div className="space-y-6">
                  {/* Fee Summary */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="p-6 bg-secondary/5 border-secondary/20">
                      <p className="text-sm text-muted-foreground mb-2">إجمالي الرسوم</p>
                      <p className="text-3xl font-bold text-foreground">$2,800</p>
                    </Card>
                    <Card className="p-6 bg-green-500/5 border-green-500/20">
                      <p className="text-sm text-muted-foreground mb-2">المبلغ المدفوع</p>
                      <p className="text-3xl font-bold text-green-600">$1,400</p>
                    </Card>
                    <Card className="p-6 bg-red-500/5 border-red-500/20">
                      <p className="text-sm text-muted-foreground mb-2">المبلغ المتبقي</p>
                      <p className="text-3xl font-bold text-red-600">$1,400</p>
                    </Card>
                  </div>

                  {/* Payment History */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">سجل الدفعات</h3>
                    
                    {[
                      { date: '2024-09-01', amount: '$700', status: 'مدفوع', method: 'تحويل بنكي' },
                      { date: '2024-10-01', amount: '$700', status: 'مدفوع', method: 'بطاقة ائتمان' },
                      { date: '2024-11-01', amount: '$700', status: 'قيد الانتظار', method: '-' },
                      { date: '2024-12-01', amount: '$700', status: 'قيد الانتظار', method: '-' },
                    ].map((payment, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-6">
                            <div>
                              <p className="text-sm text-muted-foreground">التاريخ</p>
                              <p className="font-semibold text-foreground">{payment.date}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">المبلغ</p>
                              <p className="font-bold text-foreground">{payment.amount}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">طريقة الدفع</p>
                              <p className="font-semibold text-foreground">{payment.method}</p>
                            </div>
                          </div>
                          <div>
                            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                              payment.status === 'مدفوع' 
                                ? 'bg-green-500/10 text-green-600' 
                                : 'bg-yellow-500/10 text-yellow-600'
                            }`}>
                              {payment.status}
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6">
                    دفع القسط التالي
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="px-8 py-6"
            >
              العودة للصفحة الرئيسية
            </Button>
          </div>
        </div>
      </main>

      {/* Team Members Section */}
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              فريق العمل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Albaraa Nashwan Naaman',
                'Osama Mohammed Al-Rujwai',
                'Riyadh Mohammed Al-Rouhani',
                'Emad Adel Al-Kawkabani',
                'Hamzah Mansour Al-Harazi',
              ].map((member, index) => (
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
}
