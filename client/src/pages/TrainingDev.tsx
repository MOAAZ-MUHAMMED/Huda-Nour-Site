import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import trainingImg from "@assets/generated_images/professional_teacher_training_session.png";

export default function TrainingDev() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none prose-headings:text-primary"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold text-primary mb-4">خارطة التميز للمعلم</h2>
                <p className="text-muted-foreground leading-relaxed">
                  برنامج شامل يهدف إلى تزويد المعلمين بأحدث الاستراتيجيات التعليمية وأساليب الإدارة الصفية الفعالة. 
                  يركز البرنامج على تطوير المهارات الشخصية والمهنية للمعلم لضمان تقديم تجربة تعليمية ملهمة ومؤثرة.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  <li>استراتيجيات التعلم النشط</li>
                  <li>الإدارة الصفية الذكية</li>
                  <li>تفعيل التقنية في التعليم</li>
                  <li>مراعاة الفروق الفردية</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold text-primary mb-4">من النص إلى الأطروحة</h2>
                <p className="text-muted-foreground leading-relaxed">
                  مسار تطويري يركز على مهارات البحث العلمي والتحليل النقدي، وينقل المتدرب من مرحلة فهم النصوص 
                  إلى مرحلة إنتاج المعرفة وصياغة الأطروحات العلمية الرصينة.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  <li>منهجيات البحث العلمي</li>
                  <li>التحليل النقدي للنصوص</li>
                  <li>مهارات الكتابة الأكاديمية</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
