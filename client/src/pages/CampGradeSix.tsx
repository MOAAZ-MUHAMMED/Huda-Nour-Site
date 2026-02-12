import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, Users, Trophy, Lightbulb, Heart, Zap } from "lucide-react";
import campImg from "@/assets/generated_images/camp_6.jpg";


export default function CampGradeSix() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />


      <div className="relative h-[400px] overflow-hidden">
        <img
          src={campImg}
          alt="معسكر الصف السادس"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">معسكر الصف السادس الابتدائي</h1>
            <p className="text-xl text-white/90">تجربة تعليمية ممتعة وشاملة</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="prose prose-lg prose-headings:text-primary max-w-none">
            <h2 className="text-3xl font-bold mb-6 border-r-4 border-secondary pr-4 font-arabic flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              عن المعسكر
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              معسكر متكامل للطلاب في الصف السادس الابتدائي، يهدف إلى تعزيز المهارات الأكاديمية والاجتماعية والرياضية
              من خلال برنامج تعليمي ممتع وأنشطة تفاعلية متنوعة، في بيئة آمنة وداعمة يشرف عليها كوادر متخصصة.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-secondary/20">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                لماذا معسكرنا؟
              </h3>
              <ul className="space-y-4 text-muted-foreground mb-8">
                {[
                  "بإشراف معلمين ذوي خبرة تزيد عن 30 عامًا",
                  "حصص تفاعلية بأسلوب مبسّط ومشجّع",
                  "شرح وافي وشامل للمنهج",
                  "مراجعة مكثفة لجميع الدروس",
                  "حل ومتابعة الواجبات والتمارين",
                  "أوراق عمل + حل الامتحانات السابقة"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-secondary/20 pt-6 space-y-4 text-center">
                <div className="bg-secondary/10 p-4 rounded-xl">
                  <p className="font-bold text-primary flex items-center justify-center gap-2 mb-1">
                    🗓️ معك خطوة بخطوة حتى الامتحانات
                  </p>
                  <p className="text-xl font-bold text-secondary">26 / 4 / 2026</p>
                </div>

                <p className="text-lg font-bold text-primary animate-pulse">
                  📢 سارع بالتسجيل… المقاعد محدودة!
                </p>
              </div>
            </div>
          </div>

          {/* Removed 'معلومات المعسكر', 'الأنشطة اليومية' and 'هل أنت مهتم' sections as requested */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
