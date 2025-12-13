import { motion } from "framer-motion";

const clients = [
  { name: "MediCare+", icon: "🏥" },
  { name: "Global Edu", icon: "🎓" },
  { name: "EcoFuture", icon: "🌱" },
  { name: "HealthFirst", icon: "❤️" },
  { name: "LearnTech", icon: "📚" },
  { name: "GreenWorld", icon: "🌍" },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-surface-soft overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of forward-thinking organizations already transforming their operations with DataApps' intelligent platforms.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-soft to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-soft to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <div className="marquee flex gap-8 py-4">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 bg-background rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow shrink-0"
                >
                  <span className="text-2xl">{client.icon}</span>
                  <span className="font-semibold text-foreground whitespace-nowrap">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: "200+", label: "Global Clients" },
            { value: "15+", label: "Industries Served" },
            { value: "98%", label: "Client Retention" },
            { value: "24/7", label: "Platform Uptime" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-2xl border border-border/50 shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
