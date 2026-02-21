import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, PenTool, Brain, Star, MessageCircle } from "lucide-react";
import literacyHero from "@/assets/generated_images/arabic_literacy_foundation.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LiteracyProgram() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "القراءة بطلاقة",
      description: "تمكين الطفل من نطق الحروف والكلمات بشكل صحيح من خلال منهجية التبيان."
    },
    {
      icon: <PenTool className="w-6 h-6 text-primary" />,
      title: "إتقان الكتابة",
      description: "تدريب الطفل على رسم الحروف والكلمات بخط جميل ومنظم."
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "الاستيعاب القرائي",
      description: "تنمية قدرة الطفل على فهم ما يقرأ وبناء حصيلة لغوية قوية."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="relative h-[400px] overflow-hidden">
        <img src={literacyHero} alt="تأسيس القراءة والكتابة" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-arabic">تأسيس القراءة والكتابة</h1>
            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
              بناء حجر الزاوية في مسيرة طفلك التعليمية بأساليب ممتعة وتفاعلية تناسب الفئات العمرية الصغيرة.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl border border-primary/10 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4 font-arabic">{f.title}</h3>
              <p className="text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/5 rounded-3xl p-8 border border-secondary/10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-arabic text-secondary">منهجية خاصة للأطفال</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            نعتمد في هذا البرنامج على التعلم باللعب والوسائل البصرية الجذابة، لضمان حب الطفل للغة العربية من الصغر وتمكينه من المهارات الأساسية في وقت قياسي.
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 text-primary font-bold"><Star className="fill-primary w-5 h-5" /> متابعة دورية</div>
            <div className="flex items-center gap-2 text-primary font-bold"><Star className="fill-primary w-5 h-5" /> بيئة آمنة</div>
            <div className="flex items-center gap-2 text-primary font-bold"><Star className="fill-primary w-5 h-5" /> معلمين متخصصين</div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 h-16 text-xl shadow-xl hover:scale-105 transition-all font-arabic"
            >
              <a
                href="https://wa.me/201091044501?text=السلام عليكم، أود التسجيل في برنامج تأسيس القراءة والكتابة"
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
