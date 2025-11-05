import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, CheckCircle, Upload } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

export const AdmissionSection = () => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    program: '',
    documents: {
      highSchool: null as File | null,
      id: null as File | null,
      photo: null as File | null,
    }
  });

  const colleges = [
    { ar: 'كلية الهندسة', en: 'College of Engineering' },
    { ar: 'كلية الطب', en: 'College of Medicine' },
    { ar: 'كلية إدارة الأعمال', en: 'College of Business Administration' },
    { ar: 'كلية العلوم الإنسانية', en: 'College of Humanities' }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFileUpload = (field: keyof typeof formData.documents, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [field]: file }
    }));
  };

  const handleSubmit = () => {
    toast.success(
      t(
        'تم إرسال طلب القبول بنجاح! سنتواصل معك قريباً.',
        'Admission application submitted successfully! We will contact you soon.'
      )
    );
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      college: '',
      program: '',
      documents: { highSchool: null, id: null, photo: null }
    });
    setCurrentStep(1);
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <section id="admission" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('القبول والتسجيل', 'Admission & Registration')}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t(
              'ابدأ رحلتك الأكاديمية معنا من خلال التقديم عبر النموذج التالي',
              'Start your academic journey with us by applying through the following form'
            )}
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardTitle className="text-2xl text-center">
              {t('نموذج التقديم', 'Application Form')}
            </CardTitle>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between mb-2 text-sm">
                <span>{t('الخطوة', 'Step')} {currentStep}</span>
                <span>{totalSteps} {t('من', 'of')} {currentStep}</span>
              </div>
              <div className="w-full h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-display font-bold mb-4">
                  {t('المعلومات الشخصية', 'Personal Information')}
                </h3>
                
                <div>
                  <Label htmlFor="fullName">
                    {t('الاسم الكامل', 'Full Name')}
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t('أدخل الاسم الكامل', 'Enter full name')}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">
                    {t('البريد الإلكتروني', 'Email')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('أدخل البريد الإلكتروني', 'Enter email')}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">
                    {t('رقم الهاتف', 'Phone Number')}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('أدخل رقم الهاتف', 'Enter phone number')}
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Step 2: College Selection */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-display font-bold mb-4">
                  {t('اختيار الكلية والبرنامج', 'College and Program Selection')}
                </h3>

                <div>
                  <Label htmlFor="college">
                    {t('الكلية', 'College')}
                  </Label>
                  <Select
                    value={formData.college}
                    onValueChange={(value) => setFormData({ ...formData, college: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder={t('اختر الكلية', 'Select College')} />
                    </SelectTrigger>
                    <SelectContent>
                      {colleges.map((college, index) => (
                        <SelectItem key={index} value={t(college.ar, college.en)}>
                          {t(college.ar, college.en)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="program">
                    {t('البرنامج', 'Program')}
                  </Label>
                  <Input
                    id="program"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    placeholder={t('أدخل اسم البرنامج', 'Enter program name')}
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Documents Upload */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-display font-bold mb-4">
                  {t('رفع الوثائق', 'Upload Documents')}
                </h3>

                {[
                  { key: 'highSchool', label: { ar: 'شهادة الثانوية', en: 'High School Certificate' } },
                  { key: 'id', label: { ar: 'صورة الهوية', en: 'ID Photo' } },
                  { key: 'photo', label: { ar: 'صورة شخصية', en: 'Personal Photo' } }
                ].map((doc) => (
                  <div key={doc.key} className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-secondary transition-colors">
                    <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                    <Label htmlFor={doc.key} className="cursor-pointer">
                      <span className="text-secondary hover:text-secondary/80">
                        {t(doc.label.ar, doc.label.en)}
                      </span>
                      <Input
                        id={doc.key}
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileUpload(doc.key as keyof typeof formData.documents, e.target.files?.[0] || null)}
                      />
                    </Label>
                    {formData.documents[doc.key as keyof typeof formData.documents] && (
                      <p className="mt-2 text-sm text-green-600 flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {formData.documents[doc.key as keyof typeof formData.documents]?.name}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-display font-bold mb-4">
                  {t('مراجعة البيانات', 'Review Information')}
                </h3>

                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <div>
                    <span className="font-semibold">{t('الاسم:', 'Name:')}</span> {formData.fullName}
                  </div>
                  <div>
                    <span className="font-semibold">{t('البريد الإلكتروني:', 'Email:')}</span> {formData.email}
                  </div>
                  <div>
                    <span className="font-semibold">{t('الهاتف:', 'Phone:')}</span> {formData.phone}
                  </div>
                  <div>
                    <span className="font-semibold">{t('الكلية:', 'College:')}</span> {formData.college}
                  </div>
                  <div>
                    <span className="font-semibold">{t('البرنامج:', 'Program:')}</span> {formData.program}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center">
                  {t(
                    'تأكد من صحة جميع البيانات قبل الإرسال',
                    'Make sure all information is correct before submitting'
                  )}
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="gap-2"
              >
                {language === 'ar' ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                {t('السابق', 'Previous')}
              </Button>

              {currentStep < totalSteps ? (
                <Button onClick={handleNext} className="bg-secondary text-primary hover:bg-secondary/90 gap-2">
                  {t('التالي', 'Next')}
                  {language === 'ar' ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="bg-secondary text-primary hover:bg-secondary/90 gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {t('إرسال الطلب', 'Submit Application')}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
