import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface SectionCardProps {
  title: string;
  image: string;
  href: string;
  description?: string;
  delay?: number;
}

export function SectionCard({ title, image, href, description, delay = 0 }: SectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Link href={href}>
        <a className="block h-full group">
          <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium flex items-center gap-2">
                  عرض التفاصيل <ArrowLeft className="w-4 h-4" />
                </span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-primary">{title}</CardTitle>
            </CardHeader>
            {description && (
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {description}
                </p>
              </CardContent>
            )}
          </Card>
        </a>
      </Link>
    </motion.div>
  );
}
