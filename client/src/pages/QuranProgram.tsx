import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Book, Heart, Sparkles, Trophy, CheckCircle, GraduationCap } from "lucide-react";
import quranImg from "@assets/generated_images/quran_on_a_wooden_stand.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function QuranProgram() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <WhatsAppButton />
      
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={quranImg} 
          alt="برنامج القرآن الكريم" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">برنامج القرآن الكريم</h1>
            <p className="text-xl text-white/90">ورتل القرآن ترتيلاً</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="prose prose-lg prose-headings:text-primary max-w-none">
            <h2 className="text-3xl font-bold mb-6 border-r-4 border-secondary pr-4 font-arabic flex items-center gap-3">
              <Book className="w-8 h-8 text-primary" />
              عن البرنامج
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              برنامج متكامل لحفظ ومراجعة القرآن الكريم، يهدف تخريج حفظة متقنين لكتاب الله، 
              عاملين به، متخلقين بأخلاقه.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-secondary/20">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-secondary" />
                المسارات
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  { label: "مسار الحفظ المكثف", icon: <Sparkles className="w-4 h-4 text-secondary" /> },
                  { label: "مسار المراجعة والتثبيت", icon: <CheckCircle className="w-4 h-4 text-secondary" /> },
                  { label: "مسار تصحيح التلاوة", icon: <Heart className="w-4 h-4 text-secondary" /> },
                  { label: "مسار التلقين للصغار", icon: <GraduationCap className="w-4 h-4 text-secondary" /> }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-secondary/5 p-3 rounded-xl border border-transparent hover:border-secondary/20 transition-all">
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-secondary/20">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                لماذا برنامجنا؟
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-medium">حلقات نموذجية بأعداد محدودة</span>
                </li>
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-medium">منح إجازات بالسند المتصل</span>
                </li>
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-medium">بيئة قرآنية تربوية آمنة</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
