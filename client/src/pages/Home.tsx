import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionCard } from "@/components/SectionCard";
import heroBg from "@/assets/generated_images/educational_institution_hero_background_with_subtle_islamic_geometric_patterns.png";
import workshopsImg from "@/assets/generated_images/professional_male-only_training_session.png";
import testsImg from "@/assets/generated_images/modern_islamic_geometric_patterns_background.png";
import celebrationsImg from "@/assets/generated_images/celebration_men_only.png";
import arabicImg from "@/assets/generated_images/arabic_calligraphy_clear_text.png";
import programsImg from "@/assets/generated_images/quran_on_a_wooden_stand.png"; 
import mathImg from "@/assets/generated_images/mathematics_education_background_with_geometric_shapes.png";
import englishImg from "@/assets/generated_images/english_language_education_background_with_books_and_alphabets.png";
import historyImg from "@/assets/generated_images/ancient_maps_and_historical_landmarks_collage.png";
import literacyImg from "@/assets/generated_images/arabic_literacy_foundation.png";
import germanImg from "@/assets/generated_images/german_language_promo.png";
import booksSectionImg from "@/assets/generated_images/stack_of_educational_books_and_curricula.png";
import teachingImg from "@/assets/attached_images/image_1769177021689.png";

export default function Home() {
  const sections = [
    {
      title: "تأسيس القراءة والكتابة",
      image: literacyImg,
      href: "/programs/literacy",
      description: "برنامج متخصص للأطفال لتأسيس مهارات القراءة والكتابة بمنهجية التبيان بأسلوب ممتع وشيق."
    },
    {
      title: "برنامج القرآن الكريم",
      image: programsImg,
      href: "/programs/quran",
      description: "حفظ وتلاوة وتدبر القرآن الكريم على يد نخبة من المشايخ والمحفظين لبناء جيل قرآني متقن."
    },
    {
      title: "برنامج اللغة العربية",
      image: arabicImg,
      href: "/programs/arabic",
      description: "إتقان اللغة العربية قراءة وكتابة وتحدثاً بمنهجية متدرجة وشاملة لغرس حب لغة الضاد."
    },
    {
      title: "برنامج الرياضيات",
      image: mathImg,
      href: "/programs/math",
      description: "منهج تفاعلي متطور يبسط الرياضيات ويحولها من مادة جافة إلى تجربة عقلية ممتعة تنمي مهارات التفكير المنطقي والذكاء الرياضي."
    },
    {
      title: "برنامج اللغة الإنجليزية",
      image: englishImg,
      href: "/programs/english",
      description: "إتقان مهارات التواصل باللغة الإنجليزية بطلاقة من خلال مناهج عالمية وبيئة تعليمية تفاعلية."
    },
    {
      title: "برنامج التاريخ والجغرافيا",
      image: historyImg,
      href: "/programs/history",
      description: "رحلة شيقة عبر الزمن والمكان لاستكشاف تاريخ وحضارات العالم وفهم جغرافية كوكبنا بأسلوب تفاعلي."
    },
    {
      title: "برنامج اللغة الألمانية",
      image: germanImg,
      href: "#",
      description: "Bald verfügbar (قريباً)"
    },
    {
      title: "الورش التدريبية والتطوير",
      image: workshopsImg,
      href: "/workshops",
      description: "برامج وورش عمل متكاملة لتطوير الكوادر التعليمية والإدارية وفق أحدث المعايير العالمية وبأساليب تفاعلية."
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
      title: "الكتب الدراسية",
      image: booksSectionImg,
      href: "/curriculum-books",
      description: "تحميل المناهج الدراسية والكتب التعليمية لمختلف المراحل الدراسية."
    },
    {
      title: "كيفية التدريس",
      image: teachingImg,
      href: "/teaching-method",
      description: "تعرف على الوسائل التعليمية والتقنيات الحديثة المستخدمة في دروسنا."
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl font-arabic tracking-wide">
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
