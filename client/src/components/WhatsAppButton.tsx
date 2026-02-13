import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "201091044501";
  const message = "السلام عليكم، أود الاستفسار عن برامج مؤسسة الهدى والنور";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      id="custom-whatsapp-trigger"
      className="fixed top-[30%] left-6 z-[99999]"
      style={{ isolation: 'isolate' }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0, opacity: 0, x: -50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative flex items-center justify-center"
        >
          {/* Pulsing White Circular Background */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-24 h-24 bg-white rounded-full shadow-2xl"
          />

          {/* Main White Container */}
          <div className="relative bg-white p-3 rounded-full shadow-2xl border-4 border-blue-500 flex items-center justify-center">
            <Button
              asChild
              size="icon"
              className="h-16 w-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all hover:scale-110 active:scale-95 border-none shadow-lg flex items-center justify-center p-0"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تواصل معنا عبر واتساب"
                className="w-full h-full flex items-center justify-center"
              >
                <MessageCircle className="w-10 h-10 fill-current text-white" />
              </a>
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
