import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import arabicHero from "@assets/generated_images/arabic_calligraphy_art.png";
import arabicBookImg from "@assets/generated_images/arabic_language_educational_book_cover_art.png";

export default function ArabicProgram() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={arabicHero} 
          alt="برنامج اللغة العربية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">برنامج اللغة العربية</h1>
            <p className="text-xl text-white/90">الهدى والنور أساس إتقان العربية</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-5xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-primary border-r-4 border-secondary pr-4">الهدى والنور أساس إتقان العربية</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                منهج تعليمي متخصص صمم ليكون المرجع الأول في تأسيس اللغة العربية للأجيال، يجمع بين القواعد الأساسية والجماليات اللغوية لضمان إتقان القراءة والكتابة بأسلوب مبسط وشيق.
              </p>
              <div className="bg-muted/30 p-6 rounded-xl border">
                <h4 className="font-bold mb-2">أهداف البرنامج:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• التأسيس الصحيح لمخارج الحروف</li>
                  <li>• إتقان مهارات الإملاء والكتابة</li>
                  <li>• تنمية الذوق اللغوي لدى الطالب</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
              <img src={arabicBookImg} alt="الهدى والنور أساس إتقان العربية" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">المستويات الدراسية</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  التأسيس (القراءة والكتابة)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  المستوى المتوسط (النحو والصرف)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  المستوى المتقدم (البلاغة والأدب)
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">مميزات البرنامج</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  معلمون متخصصون
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  مناهج تفاعلية حديثة
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  متابعة دورية وتقييم مستمر
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
