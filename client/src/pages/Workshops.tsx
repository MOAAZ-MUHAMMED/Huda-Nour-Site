import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import workshopsImg from "@assets/generated_images/interactive_educational_workshop.png";

export default function Workshops() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-sm border group hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="flex items-center justify-center h-full text-muted-foreground/50">
                  <span className="text-4xl">Coming Soon</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">ورشة تدريبية {item}</h3>
                <p className="text-muted-foreground text-sm">
                  تفاصيل الورشة التدريبية ومحاورها الأساسية والفئة المستهدفة.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
