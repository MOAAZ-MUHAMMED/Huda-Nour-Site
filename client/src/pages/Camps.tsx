import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import campImg from "@/assets/generated_images/camp_6.jpg";


export default function Camps() {
  const camps = [
    {
      title: "معسكر الصف السادس الابتدائي",
      image: campImg,
      href: "/camps/grade-six",
      description: "معسكر تفاعلي للطلاب في الصف السادس الابتدائي، يجمع بين الأنشطة التعليمية والترفيهية والرياضية.",
      color: "border-primary/50"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />


      <div className="relative h-[300px] overflow-hidden">
        <img
          src={campImg}
          alt="المعسكرات التعليمية"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white font-arabic text-center">المعسكرات التعليمية</h1>
        </div>
      </div>

      <main className="container px-4 py-12 flex-1">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-arabic">العودة إلى الرئيسية</span>
        </Link>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-primary text-center font-arabic">معسكراتنا</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {camps.map((camp, index) => (
              <motion.div
                key={camp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={camp.href}>
                  <Card className={`h-full cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-l-4 ${camp.color}`}>
                    <div className="w-full h-48 overflow-hidden rounded-t-lg">
                      <img
                        src={camp.image}
                        alt={camp.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-right font-arabic text-xl text-primary">
                        {camp.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-right text-muted-foreground text-sm leading-relaxed font-arabic">
                        {camp.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
