import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mom of 3-year-old",
    text: "Within just two weeks, my daughter started saying sounds she never could before. This app made speech practice feel like playtime!",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Dad of twins",
    text: "As a busy dad, I love that I can fit in short practice sessions. The progress tracking keeps me motivated too.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Mom of 2-year-old",
    text: "Our speech therapist recommended this app and we've seen incredible results. The exercises are so gentle and encouraging.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Loved by Families
          </motion.h2>
          <p className="text-muted-foreground text-lg">Real stories from real parents.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
