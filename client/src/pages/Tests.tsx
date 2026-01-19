import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, AlertCircle, CheckCircle } from "lucide-react";
import testsImg from "@assets/generated_images/students_taking_exams_focused_and_calm.png";

export default function Tests() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={testsImg} 
          alt="الاختبارات والتقييم" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">الاختبارات والتقييم</h1>
        </div>
      </div>

      <main className="container px-4 py-12 flex-1 space-y-12">
        
        {/* Teachers Guidelines */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary">إرشادات هامة للمعلمين أثناء جلسات الامتحانات</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border rounded-2xl p-8 shadow-sm"
          >
            <p className="text-muted-foreground mb-6">حرصًا على انتظام سير الامتحانات، نأمل الالتزام بما يلي:</p>
            <ul className="space-y-4">
              {[
                "إرسال رابط الجلسة قبل 15 دقيقة من موعد الامتحان.",
                "البدء فورًا في إجلاس التلاميذ والتأكد من الجلسة الصحيحة (وضوح التلميذ وورقة الإجابة في الكاميرا).",
                "تسجيل الحضور والغياب قبل إرسال نموذج الامتحان.",
                "ضبط الجلسة وتحقيق الهدوء التام طوال فترة الامتحان.",
                "التعامل مع المشكلات الطارئة بحكمة وحسن تصرف وفق التعليمات المعتمدة.",
                "كتابة تقرير في الحجرة يوضح كيف سارت الجلسة وأي ملاحظات تم رصدها.",
                "تسليم أوراق الإجابة مع التأكد من الاستلام والتسليم لمعلم المادة المختص."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t text-center text-primary font-medium">
              شاكرين ومقدّرين تعاونكم وحرصكم على إخراج الامتحانات بالشكل اللائق.
            </div>
          </motion.div>
        </section>

        {/* Students Guidelines */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-secondary/10 text-secondary-foreground">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">تنبيهات هامة للتلاميذ قبل الامتحان</h2>
          </div>
          
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8 shadow-sm"
          >
            <p className="text-muted-foreground mb-6">حرصًا على سير الامتحان بشكل منظم، يرجى الالتزام بما يلي:</p>
            <ul className="space-y-4">
              {[
                "الدخول إلى رابط الامتحان قبل 15 دقيقة من موعده، وذلك بمجرد إرسال الرابط.",
                "التأكد من توفر اتصال إنترنت جيد ومستقر قبل بدء الامتحان.",
                "فتح الكاميرا طوال فترة الامتحان، مع وضوح التلميذ وورقة الإجابة بشكل كامل.",
                "تجهيز جميع الأدوات اللازمة للامتحان (أقلام – مسطرة – أدوات هندسية… إلخ) قبل وقت كافٍ.",
                "التأكد من أن التصوير واضح وكامل لجميع ورقة الامتحان.",
                "المراقب غير مسؤول عن أي تصوير ناقص أو غير واضح أو مشوّش."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-secondary/20 text-center font-medium">
              الالتزام بهذه التعليمات يساعدكم على أداء الامتحان بهدوء ودون أي مشكلات.
              <br />
              <span className="text-primary font-bold mt-2 block">🌟 مع تمنياتنا لكم بالتوفيق والنجاح 🌟</span>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
