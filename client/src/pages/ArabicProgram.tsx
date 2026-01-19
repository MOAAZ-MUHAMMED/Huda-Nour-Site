import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import arabicImg from "@assets/generated_images/arabic_calligraphy_art.png";

export default function ArabicProgram() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={arabicImg} 
          alt="برنامج اللغة العربية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">برنامج اللغة العربية</h1>
            <p className="text-xl text-white/90">الهدى والنور أساس إتقان العربية</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="prose prose-lg prose-headings:text-primary max-w-none">
            <h2 className="text-3xl font-bold mb-6 border-r-4 border-secondary pr-4">رؤية البرنامج</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              نسعى لتمكين الطلاب من أدوات اللغة العربية بأسلوب عصري يجمع بين الأصالة والمعاصرة، 
              لضمان التحدث بطلاقة والكتابة الصحيحة وفهم جماليات لغة الضاد.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">المستويات الدراسية</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  التأسيس (القراءة والكتابة)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  المستوى المتوسط (النحو والصرف)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  المستوى المتقدم (البلاغة والأدب)
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">مميزات البرنامج</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  معلمون متخصصون
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  مناهج تفاعلية حديثة
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  متابعة دورية وتقييم مستمر
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-primary mb-4">منهجية التعليم</h2>
            <p className="text-muted-foreground leading-relaxed">
              نعتمد على التدرج في تعليم المهارات اللغوية الأربعة: الاستماع، التحدث، القراءة، والكتابة. 
              يتم دمج النصوص الأدبية والقرآنية لتعزيز الملكة اللغوية لدى الطالب.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
