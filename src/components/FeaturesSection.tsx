import { motion } from "framer-motion";
import { Mic, BarChart3, Heart, BookOpen, Star, Shield } from "lucide-react";
import micImage from "@/assets/mic-illustration.jpg";

const features = [
  {
    icon: Mic,
    title: "Speech Sound Practice",
    description: "Guided exercises targeting specific sounds your child needs to develop.",
    color: "bg-mint",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visual charts showing your child's improvement over weeks and months.",
    color: "bg-sky",
  },
  {
    icon: Heart,
    title: "Positive Reinforcement",
    description: "Encouraging feedback and rewards that keep your child motivated.",
    color: "bg-warm",
  },
  {
    icon: BookOpen,
    title: "Expert-Designed Activities",
    description: "Activities created by certified speech-language pathologists.",
    color: "bg-mint",
  },
  {
    icon: Star,
    title: "Personalized Plans",
    description: "Tailored practice plans based on your child's unique needs.",
    color: "bg-sky",
  },
  {
    icon: Shield,
    title: "Safe & Private",
    description: "Your child's data stays secure. COPPA compliant and privacy-first.",
    color: "bg-warm",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Everything You Need to Support Your Child
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, effective tools designed for parents — no clinical background required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-foreground/70" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={micImage}
            alt="Friendly microphone icon with encouraging elements"
            className="w-48 h-48 rounded-3xl shadow-lg shadow-primary/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
