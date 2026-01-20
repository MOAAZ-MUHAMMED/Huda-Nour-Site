import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionCard } from "@/components/SectionCard";
import heroBg from "@assets/generated_images/educational_institution_hero_background_with_subtle_islamic_geometric_patterns.png";
import trainingImg from "@assets/generated_images/professional_teacher_training_session.png";
import workshopsImg from "@assets/generated_images/interactive_educational_workshop.png";
import testsImg from "@assets/generated_images/modern_islamic_geometric_patterns_background.png";
import celebrationsImg from "@assets/generated_images/graduation_celebration_or_award_ceremony.png";
import programsImg from "@assets/generated_images/quran_on_a_wooden_stand.png"; // Using Quran image as representative for programs

export default function Home() {
  const sections = [
    {
      title: "التدريب والتطوير",
      image: trainingImg,
      href: "/training-dev",
      description: "برامج تدريبية متكاملة لتطوير الكوادر التعليمية والإدارية وفق أحدث المعايير العالمية."
    },
    {
      title: "الورش التدريبية",
      image: workshopsImg,
      href: "/workshops",
      description: "ورش عمل تفاعلية عملية تهدف إلى إكساب المشاركين مهارات تطبيقية في مجالات متنوعة."
    },
    {
      title: "الاختبارات والتقييم",
      image: testsImg,
      href: "/tests",
      description: "نظم تقييم شاملة وموضوعية لقياس مستوى التحصيل الدراسي وتحديد نقاط القوة والتحسين."
    },
    {
      title: "الإحتفالات",
      image: celebrationsImg,
      href: "/celebrations",
      description: "توثيق لحظات النجاح والتكريم والفعاليات المميزة التي تقيمها المؤسسة."
    },
    {
      title: "البرامج",
      image: programsImg,
      href: "/programs",
      description: "برامج تعليمية متخصصة تشمل اللغة العربية والقرآن الكريم لبناء جيل قرآني متقن."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col geometric-pattern">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
            مؤسسة الهدى والنور
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            نسعى لبناء جيل واعٍ، متميز خلقاً وعلماً، من خلال بيئة تعليمية محفزة وكوادر مؤهلة
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="container px-4 md:px-6 py-16 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <SectionCard
              key={section.title}
              {...section}
              delay={index * 0.1}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
