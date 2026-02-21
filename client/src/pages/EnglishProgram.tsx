import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Languages, MessageSquare, Globe, Sparkles, BookOpen, MessageCircle } from "lucide-react";
import englishHero from "@/assets/generated_images/english_language_education_background_with_books_and_alphabets.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function EnglishProgram() {
  const highlights = [
    { icon: <Languages className="w-6 h-6 text-secondary" />, title: "تحدث بطلاقة", desc: "التركيز على مهارات المحادثة والنطق الصحيح." },
    { icon: <Globe className="w-6 h-6 text-secondary" />, title: "منهج عالمي", desc: "استخدام مناهج معتمدة دولياً." },
    { icon: <MessageSquare className="w-6 h-6 text-secondary" />, title: "بيئة تفاعلية", desc: "تواصل مستمر باللغة الإنجليزية داخل الحلقات." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="relative h-[400px] overflow-hidden">
        <img src={englishHero} alt="برنامج اللغة الإنجليزية" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">برنامج اللغة الإنجليزية</h1>
            <p className="text-xl text-white/90">نافذتك على العالم</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-card p-8 rounded-3xl border shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6 font-arabic flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-secondary" />
              عن برنامج اللغة الإنجليزية
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              نقدم في مؤسسة الهدى والنور برنامجاً متطوراً لتعليم اللغة الإنجليزية، يجمع بين القواعد الأساسية ومهارات التواصل الحيوي. نهدف إلى تمكين الطالب من التعبير عن نفسه بثقة واقتدار في مختلف المواقف الاجتماعية والأكاديمية.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 text-center space-y-4"
              >
                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  {h.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-foreground font-arabic">{h.title}</h3>
                <p className="text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 h-16 text-xl shadow-xl hover:scale-105 transition-all font-arabic"
            >
              <a
                href="https://wa.me/201091044501?text=السلام عليكم، أود التسجيل في برنامج اللغة الإنجليزية"
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
