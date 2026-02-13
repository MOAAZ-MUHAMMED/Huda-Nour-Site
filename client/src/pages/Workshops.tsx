import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import workshopsImg from "@/assets/generated_images/professional_male-only_training_session.png";
import mathImg from "@/assets/generated_images/interactive_online_math_session_for_children.png";
import thesisImg from "@/assets/generated_images/thesis_and_academic_research_concept.png";
import roadmapImg from "@/assets/generated_images/teachers_roadmap_for_excellence_and_professional_growth.png";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Workshops() {
  const trainingItems = [
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

  const workshopsList = [
    {
      title: "تأسيس الرياضيات (Solid Math Foundations)",
      image: mathImg,
      description: "ورشة عمل متخصصة في تأسيس مفاهيم الرياضيات للتعلم عن بعد، تهدف إلى بناء قاعدة صلبة ومنطقية لدى الطلاب باستخدام أدوات تفاعلية حديثة.",
      details: "التعلم عن بعد لا يعني الجمود، نستخدم أحدث الوسائل لضمان وصول المفهوم الرياضي لكل طالب."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="relative h-[300px] overflow-hidden">

        <img
          src={workshopsImg}
          alt="الورش التدريبية والتطوير"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white font-arabic text-center">الورش التدريبية والتطوير</h1>
        </div>
      </div>

      <main className="container px-4 py-12 flex-1">
        <div className="space-y-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-primary text-center font-arabic underline underline-offset-8">برامج التطوير والتميز</h2>
            <div className="space-y-12">
              {trainingItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-card p-6 rounded-3xl border shadow-sm`}
                >
                  <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold text-primary font-arabic">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-primary text-center font-arabic underline underline-offset-8">الورش التدريبية التفاعلية</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {workshopsList.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-3xl overflow-hidden shadow-lg border border-primary/10 group hover:shadow-xl transition-all"
                >
                  <div className="h-64 bg-muted relative overflow-hidden">
                    <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <span className="text-white text-sm">ورشة عمل تفاعلية</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-4 font-arabic">{workshop.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {workshop.description}
                    </p>
                    <div className="bg-secondary/10 p-4 rounded-xl text-secondary-foreground text-sm font-medium">
                      {workshop.details}
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-muted/20 border-2 border-dashed border-muted flex items-center justify-center p-12 rounded-3xl min-h-[400px]">
                <div className="text-center text-muted-foreground">
                  <h3 className="text-xl font-bold mb-2 font-arabic">المزيد قريباً</h3>
                  <p>نعمل على إعداد المزيد من الورش التدريبية المتميزة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t">
          <h2 className="text-2xl font-bold text-primary mb-6 font-arabic">هل ترغب في الانضمام لإحدى ورشنا؟</h2>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 h-16 text-xl shadow-xl hover:scale-105 transition-all font-arabic"
          >
            <a
              href="https://wa.me/201091044501?text=السلام عليكم، أود الاستفسار عن الورش التدريبية"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-8 h-8 fill-current" />
              اضغط للتسجيل أو الاستفسار عبر واتساب
            </a>
          </Button>
        </div>
    </div>
      </main >

    <Footer />
    </div >
  );
}
