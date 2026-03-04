import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-mint rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-mint-foreground">Parent-led speech therapy</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Help Your Child
              <span className="text-primary"> Find Their Voice</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              A gentle, science-backed app that empowers parents to guide their toddlers through fun speech exercises — at home, at their own pace.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 rounded-full px-8 text-base font-semibold">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 text-base">
                <Play className="w-4 h-4" /> Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-lg">10K+</span> Families
              </div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-lg">4.9★</span> Rating
              </div>
              <div className="w-px h-5 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold text-lg">Free</span> to start
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={heroImage}
                alt="Parent and child practicing speech together in a warm, cozy living room"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-warm rounded-full opacity-60 blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-mint rounded-full opacity-50 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
