import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-24 px-4">
        <div className="text-center space-y-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            لوحة تحكم الدكتور
          </h1>
          <p className="text-xl text-muted-foreground">
            هذه الصفحة قيد التطوير
          </p>
          <p className="text-lg text-muted-foreground">
            سيتم تخصيص هذه الواجهة لاحقاً حسب احتياجاتك
          </p>
          
          <div className="pt-8">
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
