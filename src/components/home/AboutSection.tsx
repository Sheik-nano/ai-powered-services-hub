import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const technologies = [
  "IoT Solutions",
  "AI & Machine Learning",
  "Cloud Platforms",
  "Automation",
  "Mobile Apps",
  "Web Applications",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="About DataApps"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 glass-effect rounded-2xl p-6 shadow-xl max-w-xs hidden md:block"
            >
              <blockquote className="text-sm italic text-muted-foreground">
                "To empower businesses through smart software, automation, and modern technology."
              </blockquote>
              <div className="mt-3 text-xs font-semibold text-primary">— Our Mission</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">About DataApps</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              Experience the Future of{" "}
              <span className="gradient-text">Smart Operations</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              DataApps is a technology solutions company focused on simplifying work and driving innovation across healthcare, education, automotive, and sustainability. We design cloud-based web and mobile platforms that automate processes, improve decision-making, and deliver seamless digital experiences.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              With deep domain expertise and modern technologies like IoT, AI, and automation, we create real impact. From smarter hospitals to next-gen ERPs and sustainable building systems, our solutions empower businesses and communities to thrive.
            </p>

            {/* Technology Stack */}
            <div className="space-y-4 pt-4">
              <h4 className="font-semibold text-foreground">Our Technology Stack</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { value: "250+", label: "Projects Completed", description: "Successfully delivered data solutions across industries" },
            { value: "98%", label: "Client Satisfaction", description: "Consistently exceeding client expectations" },
            { value: "24/7", label: "Monitoring & Support", description: "Round-the-clock service reliability" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
