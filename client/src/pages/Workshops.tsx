import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import workshopsImg from "@assets/generated_images/interactive_educational_workshop.png";
import mathImg from "@assets/generated_images/interactive_online_math_session_for_children.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Workshops() {
  const workshops = [
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
      <WhatsAppButton />
      
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={workshopsImg} 
          alt="الورش التدريبية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">الورش التدريبية</h1>
        </div>
      </div>

      <main className="container px-4 py-12 flex-1">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg border border-primary/10 group hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-muted relative overflow-hidden">
                <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm">ورشة عمل تفاعلية</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{workshop.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {workshop.description}
                </p>
                <div className="bg-secondary/10 p-4 rounded-xl text-secondary-foreground text-sm font-medium">
                  {workshop.details}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Placeholder for future workshops */}
          <div className="bg-muted/20 border-2 border-dashed border-muted flex items-center justify-center p-12 rounded-2xl min-h-[400px]">
            <div className="text-center text-muted-foreground">
              <h3 className="text-xl font-bold mb-2">المزيد قريباً</h3>
              <p>نعمل على إعداد المزيد من الورش التدريبية المتميزة</p>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
