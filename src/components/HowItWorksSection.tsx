import { motion } from "framer-motion";
import { Smartphone, MicVocal, ThumbsUp, TrendingUp } from "lucide-react";
import stepsImage from "@/assets/steps-illustration.jpg";

const steps = [
  {
    icon: Smartphone,
    step: "1",
    title: "Open the App",
    description: "Choose a speech sound or activity tailored to your child's age and needs.",
    color: "bg-mint",
  },
  {
    icon: MicVocal,
    step: "2",
    title: "Practice Together",
    description: "Follow guided prompts and encourage your child to repeat sounds.",
    color: "bg-sky",
  },
  {
    icon: ThumbsUp,
    step: "3",
    title: "Encourage & Reward",
    description: "Celebrate each attempt with positive reinforcement and fun animations.",
    color: "bg-warm",
  },
  {
    icon: TrendingUp,
    step: "4",
    title: "Track Progress",
    description: "Watch your child's confidence and skills grow over time.",
    color: "bg-mint",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            How It Works
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four simple steps to start your child's speech journey.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-4 relative`}>
                <s.icon className="w-7 h-7 text-foreground/70" />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary rounded-full text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-xl shadow-primary/5 max-w-3xl mx-auto"
        >
          <img
            src={stepsImage}
            alt="Visual guide showing the four steps of speech practice"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
