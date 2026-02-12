import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "201091044501";
  const message = "السلام عليكم، أود الاستفسار عن برامج مؤسسة الهدى والنور";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-8 left-8 z-[100]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          asChild
          size="icon"
          className="h-20 w-20 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 border-none"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل معنا عبر واتساب"
            className="flex items-center justify-center w-full h-full"
          >
            <MessageCircle className="w-10 h-10 fill-current" />
          </a>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}


