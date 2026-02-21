import { motion } from "framer-motion";
import { Award, Users, BookOpen, Heart } from "lucide-react";

export function AboutSection() {
    const stats = [
        { icon: <Award className="w-8 h-8 text-primary" />, label: "خبرة تعليمية", value: "30+ عاماً" },
        { icon: <Users className="w-8 h-8 text-primary" />, label: "كوادر مؤهلة", value: "نخبة من المعلمين" },
        { icon: <BookOpen className="w-8 h-8 text-primary" />, label: "مناهج متطورة", value: "منهج التبيان" },
        { icon: <Heart className="w-8 h-8 text-primary" />, label: "رعاية وقيم", value: "بناء جيل واعٍ" },
    ];

    return (
        <section className="py-20 bg-primary/5 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-6 text-right"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-arabic leading-tight">
                            من نحن؟
                            <span className="block text-xl md:text-2xl text-secondary mt-2">مؤسسة الهدى والنور التعليمية: ريادة في التأسيس وبناء القيم</span>
                        </h2>

                        <p className="text-lg leading-relaxed text-muted-foreground font-arabic">
                            نحن في **مؤسسة الهدى والنور التعليمية**، نعتبر أنفسنا شركاءكم في رحلة بناء عقول أبنائكم. بخبرة تمتد لأكثر من **30 عاماً** في الحقل التربوي، نقدم منظومة تعليمية متكاملة تجمع بين **تحفيظ القرآن الكريم** بأحكام التجويد، و**تأسيس اللغة العربية** للأطفال بمنهجية "التبيان" العالمية.
                        </p>

                        <p className="text-lg leading-relaxed text-muted-foreground font-arabic">
                            تعتمد رؤيتنا على دمج الأساليب التربوية الأصيلة مع تقنيات **التعليم التفاعلي الحديثة**، لتشمل برامجنا تقوية الطلاب في **الرياضيات، الإنجليزية، والتاريخ**، بالإضافة إلى دوراتنا المتميزة في **تطوير المعلمين** ورفع كفاءة الكوادر التعليمية عبر "خارطة التميز للمعلم".
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm border border-primary/10"
                                >
                                    {stat.icon}
                                    <span className="mt-2 font-bold text-primary">{stat.value}</span>
                                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content / Featured Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition duration-500"></div>
                            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-primary/10 space-y-6">
                                <h3 className="text-2xl font-bold text-primary font-arabic underline underline-offset-8 decoration-secondary">رسالتنا التعليمية</h3>
                                <ul className="space-y-4">
                                    {[
                                        "توفير بيئة تعليمية آمنة ومحفزة للإبداع والتميز.",
                                        "إتقان مهارات القراءة والكتابة والبحث العلمي من النص إلى الأطروحة.",
                                        "بناء الشخصية القيادية المعتزة بهويتها وقيمها الإسلامية.",
                                        "استخدام أحدث الوسائل التقنية لضمان تجربة تعليمية ممتعة."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                                                <div className="h-2 w-2 rounded-full bg-secondary"></div>
                                            </div>
                                            <span className="font-arabic leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
