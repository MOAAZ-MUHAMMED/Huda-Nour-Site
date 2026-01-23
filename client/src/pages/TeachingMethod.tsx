import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import img1 from "@/assets/attached_images/image_1769177021689.png";
import img2 from "@/assets/attached_images/image_1769177044862.png";
import img3 from "@/assets/attached_images/image_1769177064101.png";
import img4 from "@/assets/attached_images/image_1769177077626.png";
import img5 from "@/assets/attached_images/image_1769177089594.png";
import img6 from "@/assets/attached_images/359b46e3-0a62-4dd6-8167-088845cd662b_1769177095462.png";

export default function TeachingMethod() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <WhatsAppButton />
      
      <div className="bg-primary/5 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-arabic mb-4">كيفية التدريس</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          تعرف على منهجيتنا التعليمية الحديثة والوسائل التقنية التي نستخدمها لضمان أفضل تجربة تعليمية.
        </p>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="grid gap-12 max-w-5xl mx-auto">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 bg-white"
            >
              <img 
                src={img} 
                alt={`Teaching Method ${index + 1}`} 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
