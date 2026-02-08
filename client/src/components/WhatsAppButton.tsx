import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "+201091044501";
  const message = "السلام عليكم، أود التسجيل في برامج مؤسسة الهدى والنور";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-center p-8">
      <Button 
        asChild
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white gap-2 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-green-200 transition-all"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-6 h-6" />
          اضغط للتسجيل
        </a>
      </Button>
    </div>
  );
}
