import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Import all available teaching method images
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

      <div className="bg-primary/5 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-arabic mb-4">كيفية التدريس</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-4 font-arabic">
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-2xl overflow-hidden shadow-xl border border-primary/10 bg-white"
            >
              <img
                src={img}
                alt={`Teaching Method ${index + 1}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-primary/10">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 h-16 text-xl shadow-xl hover:scale-105 transition-all font-arabic"
          >
            <a
              href="https://wa.me/201091044501?text=السلام عليكم، أود الاستفسار عن منهجية التدريس"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-8 h-8 fill-current" />
              إضغط للتسجيل
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
