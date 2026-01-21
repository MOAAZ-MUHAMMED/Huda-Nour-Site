import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import arabicImg from "@assets/generated_images/arabic_calligraphy_art_with_educational_theme.png";
import quranImg from "@assets/generated_images/quran_on_a_wooden_stand.png";
import mathImg from "@assets/generated_images/mathematics_education_background_with_geometric_shapes.png";
import englishImg from "@assets/generated_images/english_language_education_background_with_books_and_alphabets.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Programs() {
  const programs = [
    {
      title: "برنامج القرآن الكريم",
      image: quranImg,
      href: "/programs/quran",
      description: "حفظ وتلاوة وتدبر القرآن الكريم على يد نخبة من المشايخ والمحفظين.",
      color: "border-secondary/50"
    },
    {
      title: "برنامج اللغة العربية",
      image: arabicImg,
      href: "/programs/arabic",
      description: "إتقان اللغة العربية قراءة وكتابة وتحدثاً بمنهجية متدرجة وشاملة.",
      color: "border-primary/50"
    },
    {
      title: "برنامج الرياضيات",
      image: mathImg,
      href: "/programs/math",
      description: "منهج تفاعلي متطور يبسط الرياضيات ويحولها من مادة جافة إلى تجربة عقلية ممتعة تنمي مهارات التفكير المنطقي والذكاء الرياضي.",
      color: "border-primary/50"
    },
    {
      title: "برنامج اللغة الإنجليزية",
      image: englishImg,
      href: "/programs/english",
      description: "إتقان مهارات التواصل باللغة الإنجليزية بطلاقة من خلال مناهج عالمية.",
      color: "border-secondary/50"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background geometric-pattern">
      <Navbar />
      <WhatsAppButton />
      
      <div className="container px-4 py-20 flex-1 flex flex-col justify-center items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-arabic">برامجنا التعليمية</h1>
          <p className="text-xl text-muted-foreground">اختر البرنامج التعليمي الذي ترغب بالاطلاع عليه</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          {programs.map((program, index) => (
            <Link key={index} href={program.href}>
              <div className="group cursor-pointer">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`overflow-hidden border-2 ${program.color} transition-colors h-full`}>
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                    </div>
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-primary font-bold font-arabic">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground">
                      <p className="mb-4">{program.description}</p>
                      <div className="inline-flex items-center text-primary font-bold">
                        تصفح البرنامج <ArrowLeft className="mr-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
