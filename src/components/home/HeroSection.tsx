import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, Brain, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const floatingIcons = [
  { Icon: Code, position: "top-20 left-[10%]", delay: 0 },
  { Icon: Cloud, position: "top-32 right-[15%]", delay: 0.5 },
  { Icon: Brain, position: "bottom-40 left-[15%]", delay: 1 },
  { Icon: Cpu, position: "bottom-32 right-[10%]", delay: 1.5 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-logo-blue/20 to-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/15 to-logo-blue/10 rounded-full blur-3xl" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className={`absolute ${position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay }}
            className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 shadow-xl flex items-center justify-center"
          >
            <Icon className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Best SaaS Analytics Management</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Delivering Intelligent{" "}
            <span className="gradient-text">Solutions</span>
            <br />
            that Drive Progress
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Experience the future of healthcare, education, and sustainability with DataApps' unified digital platforms powered by AIoT and automation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary to-logo-blue hover:opacity-90 transition-opacity text-secondary-foreground rounded-full px-8 h-14 text-lg font-medium group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 h-14 text-lg font-medium border-2 hover:bg-muted"
            >
              <Link to="/#services">Explore Services</Link>
            </Button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -left-4 md:-left-8 top-1/4 glass-effect rounded-xl p-4 shadow-xl hidden md:block"
            >
              <div className="text-2xl font-bold text-primary">56.8k</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -right-4 md:-right-8 top-1/3 glass-effect rounded-xl p-4 shadow-xl hidden md:block"
            >
              <div className="text-2xl font-bold text-primary">+28.4%</div>
              <div className="text-sm text-muted-foreground">Growth Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
