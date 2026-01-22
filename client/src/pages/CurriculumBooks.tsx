import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import booksHero from "@/assets/generated_images/stack_of_educational_books_and_curricula.png";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Download, FileText } from "lucide-react";

export default function CurriculumBooks() {
  const books = [
    { title: "منهج التبيان المستوى الأول", link: "#" },
    { title: "منهج التبيان المستوى الثاني", link: "#" },
    { title: "مناهج الصف الأول الإبتدائي", link: "#" },
    { title: "مناهج الصف الثاني الإبتدائي", link: "#" },
    { title: "مناهج الصف الثالث الإبتدائي", link: "#" },
    { title: "مناهج الصف الرابع الإبتدائي", link: "#" },
    { title: "مناهج الصف الخامس الإبتدائي", link: "#" },
    { title: "مناهج الصف السادس الإبتدائي", link: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <WhatsAppButton />
      
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={booksHero} 
          alt="الكتب الدراسية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white font-arabic">الكتب الدراسية</h1>
        </div>
      </div>

      <main className="container px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-4">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card p-6 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-arabic">{book.title}</h3>
              </div>
              <a 
                href={book.link}
                className="flex items-center gap-2 bg-secondary/10 hover:bg-secondary text-secondary-foreground hover:text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                <span>تحميل PDF</span>
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
