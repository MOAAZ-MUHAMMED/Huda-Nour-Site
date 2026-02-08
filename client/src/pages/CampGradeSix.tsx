import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, Users, Trophy, Lightbulb, Heart, Zap } from "lucide-react";
import campImg from "@/assets/generated_images/quran_teacher_and_students.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function CampGradeSix() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <WhatsAppButton />
      
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
              معسكر صيفي متكامل للطلاب في الصف السادس الابتدائي، يهدف إلى تعزيز المهارات الأكاديمية والاجتماعية والرياضية 
              من خلال برنامج تعليمي ممتع وأنشطة تفاعلية متنوعة، في بيئة آمنة وداعمة يشرف عليها كوادر متخصصة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-secondary/20">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-secondary" />
                المسارات التعليمية
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  { label: "تعزيز مهارات القراءة والكتابة", icon: <BookOpen className="w-4 h-4 text-secondary" /> },
                  { label: "تطوير مهارات الرياضيات والعلوم", icon: <Lightbulb className="w-4 h-4 text-secondary" /> },
                  { label: "بناء المهارات الاجتماعية والقيادية", icon: <Users className="w-4 h-4 text-secondary" /> },
                  { label: "الأنشطة الرياضية والترويحية", icon: <Trophy className="w-4 h-4 text-secondary" /> }
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
                لماذا معسكرنا؟
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium">منسوبو تدريس ذوو خبرة عالية</span>
                </li>
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium">برامج متوازنة بين الأكاديمية والترفيه</span>
                </li>
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium">بيئة آمنة وداعمة للطلاب</span>
                </li>
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium">تتبع مستمر لتقدم كل طالب</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Removed 'معلومات المعسكر', 'الأنشطة اليومية' and 'هل أنت مهتم' sections as requested */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
