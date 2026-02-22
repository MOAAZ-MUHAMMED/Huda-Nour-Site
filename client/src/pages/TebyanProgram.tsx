import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Target, Zap, BookOpen, GraduationCap, Users, MessageCircle, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import tebHero from "@/assets/generated_images/teb1.jpg";
import tebInternal from "@/assets/generated_images/teb2.jpg";

export default function TebyanProgram() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="relative h-[400px] overflow-hidden">
        <img
          src={tebHero}
          alt="برنامج منهج التبيان"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">برنامج منهج التبيان</h1>
            <p className="text-xl text-white/90">إتقان القراءة والكتابة والحساب في وقت قياسي</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-5xl mx-auto space-y-16">

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-primary border-r-4 border-secondary pr-4 font-arabic">منهج التبيان التعليمي</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                نقدم لكم برنامج "منهج التبيان" الشامل، المصمم خصيصاً لتأسيس الطلاب في المهارات الأساسية بأسلوب علمي ومنظم يضمن النتائج السريعة والمستدامة.
              </p>
              <div className="bg-muted/30 p-6 rounded-xl border">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  أهم ما يميز البرنامج:
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>تعليم القراءة والكتابة والحساب في شهرين فقط</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-secondary" />
                    <span>نخبة من المعلمين بخبرة تزيد عن 30 عاماً</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span>منهجية معتمدة ومجربة تحقق نتائج مبهرة</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img src={tebInternal} alt="منهج التبيان" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                المحتوى التعليمي
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3 bg-muted/20 p-3 rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span>تأسيس القراءة باللغة العربية</span>
                </li>
                <li className="flex items-center gap-3 bg-muted/20 p-3 rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span>إتقان الإملاء والكتابة الصحيحة</span>
                </li>
                <li className="flex items-center gap-3 bg-muted/20 p-3 rounded-lg border border-transparent hover:border-secondary/20 transition-colors">
                  <Zap className="w-5 h-5 text-secondary" />
                  <span>مبادئ الحساب والعمليات الأساسية</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                لماذا تختار هذا البرنامج؟
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>خبرة تعليمية عريقة (30 سنة)</span>
                </li>
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>سرعة الإنجاز (شهرين فقط)</span>
                </li>
                <li className="flex items-center gap-3 bg-primary/5 p-3 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>بيئة تعليمية محفزة وداعمة</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 h-16 text-xl shadow-xl hover:scale-105 transition-all font-arabic"
            >
              <a
                href="https://wa.me/201091044501?text=السلام عليكم، أود التسجيل في برنامج منهج التبيان"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-8 h-8 fill-current" />
                إضغط للتسجيل
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
