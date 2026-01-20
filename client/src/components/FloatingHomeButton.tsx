import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export function FloatingHomeButton() {
  const [location] = useLocation();

  if (location === "/") return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Link href="/">
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-white transition-all hover:scale-110 active:scale-95"
          title="الرجوع للرئيسية"
        >
          <Home className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
}
