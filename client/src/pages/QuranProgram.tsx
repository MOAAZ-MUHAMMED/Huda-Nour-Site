import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import quranImg from "@assets/generated_images/quran_on_a_wooden_stand.png";

export default function QuranProgram() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={quranImg} 
          alt="برنامج القرآن الكريم" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">برنامج القرآن الكريم</h1>
            <p className="text-xl text-white/90">ورتل القرآن ترتيلاً</p>
          </div>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="prose prose-lg prose-headings:text-primary max-w-none">
            <h2 className="text-3xl font-bold mb-6 border-r-4 border-secondary pr-4">عن البرنامج</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              برنامج متكامل لحفظ ومراجعة القرآن الكريم، يهدف تخريج حفظة متقنين لكتاب الله، 
              عاملين به، متخلقين بأخلاقه.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-secondary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">المسارات</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  مسار الحفظ المكثف
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  مسار المراجعة والتثبيت
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  مسار تصحيح التلاوة
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  مسار التلقين للصغار
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-secondary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">لماذا برنامجنا؟</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  حلقات نموذجية بأعداد محدودة
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  منح إجازات بالسند المتصل
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  بيئة قرآنية تربوية آمنة
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
