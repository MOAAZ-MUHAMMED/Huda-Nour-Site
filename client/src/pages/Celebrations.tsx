import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import celebrationsImg from "@/assets/generated_images/celebration_men_only.png";

export default function Celebrations() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="relative h-[300px] overflow-hidden">
        <img
          src={celebrationsImg}
          alt="الإحتفالات"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">الإحتفالات</h1>
        </div>
      </div>

      <main className="container px-4 py-12 flex-1">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={celebrationsImg} className="w-full h-64 object-cover" alt="احتفال 1" />
            <div className="p-6 bg-card">
              <h3 className="text-xl font-bold text-primary mb-2">حفل تكريم المتفوقين</h3>
              <p className="text-muted-foreground">صور من حفل تكريم الطلاب المتفوقين للعام الدراسي الحالي.</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-64 bg-muted flex items-center justify-center text-muted-foreground">
              <span>صور قادمة قريباً</span>
            </div>
            <div className="p-6 bg-card">
              <h3 className="text-xl font-bold text-primary mb-2">الفعاليات القادمة</h3>
              <p className="text-muted-foreground">تابعونا لمعرفة أحدث الفعاليات والاحتفالات.</p>
            </div>
          </div>
        </div>
      </main>


      <Footer />
    </div >
  );
}
