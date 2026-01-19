import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import arabicImg from "@assets/generated_images/arabic_calligraphy_art.png";
import quranImg from "@assets/generated_images/quran_on_a_wooden_stand.png";

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col bg-background geometric-pattern">
      <Navbar />
      
      <div className="container px-4 py-20 flex-1 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">برامجنا التعليمية</h1>
          <p className="text-xl text-muted-foreground">اختر البرنامج التعليمي الذي ترغب بالاطلاع عليه</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Arabic Program */}
          <Link href="/programs/arabic">
            <a className="group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={arabicImg} 
                      alt="برنامج اللغة العربية" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary">برنامج اللغة العربية</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    <p className="mb-4">إتقان اللغة العربية قراءة وكتابة وتحدثاً بمنهجية متدرجة وشاملة.</p>
                    <span className="inline-flex items-center text-primary font-semibold">
                      تصفح البرنامج <ArrowLeft className="mr-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            </a>
          </Link>

          {/* Quran Program */}
          <Link href="/programs/quran">
            <a className="group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border-2 hover:border-secondary/50 transition-colors h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={quranImg} 
                      alt="برنامج القرآن الكريم" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-primary">برنامج القرآن الكريم</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    <p className="mb-4">حفظ وتلاوة وتدبر القرآن الكريم على يد نخبة من المشايخ والمحفظين.</p>
                    <span className="inline-flex items-center text-secondary-foreground font-semibold">
                      تصفح البرنامج <ArrowLeft className="mr-2 w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
