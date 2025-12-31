import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Sparkles, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const floatingIcons = [
  { Icon: Zap, position: "top-20 left-[8%]", delay: 0, color: "bg-logo-pink text-white" },
  { Icon: Grid3X3, position: "top-28 right-[12%]", delay: 0.5, color: "bg-logo-blue text-white" },
  { Icon: Sparkles, position: "bottom-48 left-[12%]", delay: 1, color: "bg-logo-teal text-white" },
  { Icon: BarChart3, position: "bottom-36 right-[8%]", delay: 1.5, color: "bg-medium-blue text-white" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient - Data Apps style blue/pink/teal */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-logo-blue/15 to-logo-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-logo-teal/15 to-logo-pink/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-logo-blue/8 to-transparent rounded-full blur-3xl" />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay, color }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
          className={`absolute ${position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay }}
            className={`w-14 h-14 rounded-2xl ${color} shadow-xl flex items-center justify-center`}
          >
            <Icon className="w-7 h-7" />
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border shadow-sm mb-8"
          >
            <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </span>
            <span className="text-sm font-medium text-foreground">Best SaaS Analytics Management</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-secondary"
          >
            Using data intelligence to fuel{" "}
            <br className="hidden md:block" />
            your <span className="gradient-text">business success</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Our AI assistant helps marketers and businesses create high converting blog posts, ads, and emails in seconds.
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
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-8 h-14 text-lg font-medium group shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 h-14 text-lg font-medium border-2 border-border bg-card hover:bg-muted"
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                alt="Dashboard Preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -left-4 md:-left-8 top-1/4 bg-card rounded-2xl p-4 shadow-xl border border-border hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">56.8k</div>
                  <div className="text-xs text-muted-foreground">Active Users</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -right-4 md:-right-8 top-1/3 bg-card rounded-2xl p-4 shadow-xl border border-border hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-logo-teal/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-logo-teal" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">+28.4%</div>
                  <div className="text-xs text-muted-foreground">Growth Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;