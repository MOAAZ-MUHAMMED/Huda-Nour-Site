import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import trainingImg from "@/assets/generated_images/professional_teacher_training_session.png";
import thesisImg from "@/assets/generated_images/thesis_and_academic_research_concept.png";
import roadmapImg from "@/assets/generated_images/teachers_roadmap_for_excellence_and_professional_growth.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function TrainingDev() {
  const items = [
    {
      title: "من النص إلى الأطروحة",
      image: thesisImg,
      description: "مسار تطويري يركز على مهارات البحث العلمي والتحليل النقدي، وينقل المتدرب من مرحلة فهم النصوص إلى مرحلة إنتاج المعرفة وصياغة الأطروحات العلمية الرصينة.",
      features: ["منهجيات البحث العلمي", "التحليل النقدي للنصوص", "مهارات الكتابة الأكاديمية"]
    },
    {
      title: "خارطة التميز للمعلم (Teacher Excellence Roadmap)",
      image: roadmapImg,
      description: "برنامج شامل يهدف إلى تزويد المعلمين بأحدث الاستراتيجيات التعليمية وأساليب الإدارة الصفية الفعالة لضمان تقديم تجربة تعليمية ملهمة ومؤثرة.",
      features: ["استراتيجيات التعلم النشط", "الإدارة الصفية الذكية", "تفعيل التقنية في التعليم", "مراعاة الفروق الفردية"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <WhatsAppButton />
      
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={trainingImg} 
          alt="التدريب والتطوير" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">التدريب والتطوير</h1>
        </div>
      </div>

      <main className="container px-4 py-12 flex-1">
        <div className="space-y-16">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-card p-6 rounded-2xl border shadow-sm`}
            >
              <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-primary">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
                <div className="pt-4">
                  <h4 className="font-bold text-foreground mb-2">أبرز المحاور:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
