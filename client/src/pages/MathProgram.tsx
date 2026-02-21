import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calculator, Lightbulb, BookOpen, Star, MessageCircle } from "lucide-react";
import mathHero from "@/assets/generated_images/mathematics_education_background_with_geometric_shapes.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MathProgram() {
  const features = [
    { icon: <Calculator className="w-6 h-6 text-primary" />, title: "تأسيس منطقي", desc: "بناء التفكير الرياضي والمنطقي من الصغر." },
    { icon: <Lightbulb className="w-6 h-6 text-primary" />, title: "طرق حديثة", desc: "استخدام أحدث الوسائل التفاعلية في الشرح." },
    { icon: <Star className="w-6 h-6 text-primary" />, title: "متابعة دقيقة", desc: "تقييم مستمر لمستوى استيعاب الطالب." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="relative h-[400px] overflow-hidden">
        <img src={mathHero} alt="برنامج الرياضيات" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-arabic">برنامج الرياضيات</h1>
            <p className="text-xl text-white/90">نبني العقول وننمي الذكاء</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-card p-8 rounded-3xl border shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6 font-arabic flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              عن برنامج الرياضيات
            </h2>
            <p className="text-xl leading-relaxed text-muted-foreground">
              نهدف في برنامج الرياضيات بمؤسسة الهدى والنور إلى تحويل مادة الرياضيات من عبء إلى متعة ذهنية، من خلال تبسيط المفاهيم المعقدة وربطها بالواقع العملي، مع التركيز على مهارات الحل السريع والتفكير الإبداعي.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-4"
              >
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-primary font-arabic">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
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
                href="https://wa.me/201091044501?text=السلام عليكم، أود التسجيل في برنامج الرياضيات"
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
