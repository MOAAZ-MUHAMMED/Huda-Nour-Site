import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Target, Zap, BookOpen, GraduationCap, Map, History, MessageCircle } from "lucide-react";
import historyHero from "@/assets/generated_images/ancient_maps_and_historical_landmarks_collage.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HistoryProgram() {
  const features = [
    {
      icon: <Map className="w-6 h-6 text-primary" />,
      title: "استكشاف العالم",
      description: "فهم الجغرافيا السياسية والطبيعية وتأثيرها على الحضارات."
    },
    {
      icon: <History className="w-6 h-6 text-primary" />,
      title: "عبر التاريخ",
      description: "دراسة الشخصيات والأحداث التاريخية التي شكلت عالمنا اليوم."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "تحليل نقدي",
      description: "تنمية مهارات التحليل والاستنتاج وربط الماضي بالحاضر."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="relative h-[400px] overflow-hidden">
        <img
          src={historyHero}
          alt="برنامج التاريخ والجغرافيا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-arabic">برنامج التاريخ والجغرافيا</h1>
            <p className="text-xl text-white/90 font-light leading-relaxed">
              رحلة عبر الزمن والمكان لاستكشاف عظمة الماضي وفهم أسرار الطبيعة من حولنا.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-arabic">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-arabic">لماذا تختار برنامجنا؟</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              نقدم مادة التاريخ والجغرافيا بأسلوب قصصي وتفاعلي يربط الطالب ببيئته وتاريخه العريق، مستخدمين أحدث الخرائط والوسائل التعليمية البصرية التي تجعل من التعلم متعة حقيقية.
            </p>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 h-16 text-xl shadow-xl hover:scale-105 transition-all font-arabic"
              >
                <a
                  href="https://wa.me/201091044501?text=السلام عليكم، أود التسجيل في برنامج التاريخ والجغرافيا"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-8 h-8 fill-current" />
                  اضغط للتسجيل عبر واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main >

      <Footer />
    </div >
  );
}

function History({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></svg>
  )
}
