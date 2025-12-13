import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    id: "energy",
    name: "Energy Management",
    title: "Energy Management System",
    description: "Intelligent power monitoring and optimization for sustainable operations.",
    features: ["Real-time Monitoring", "Usage Analytics", "Cost Optimization", "Green Reporting"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
  },
  {
    id: "water",
    name: "Water Automation",
    title: "Water Automation System",
    description: "Smart water management and conservation solutions for efficient resource usage.",
    features: ["Flow Monitoring", "Leak Detection", "Quality Analysis", "Automated Controls"],
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&h=500&fit=crop",
  },
  {
    id: "building",
    name: "Smart Building",
    title: "Smart Building System",
    description: "Integrated automation for modern facilities with AI-powered controls.",
    features: ["AI Controlled", "HVAC Integration", "Security Systems", "Space Optimization"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
  },
];

const InfrastructureSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="py-24 bg-gradient-to-br from-foreground to-foreground/95 text-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Smart Infrastructure Solutions
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Advanced systems for energy management, water automation, and smart building solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background/10 text-background hover:bg-background/20"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              {activeContent.title}
            </h3>
            <p className="text-background/70 text-lg">
              {activeContent.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {activeContent.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-background/10 rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
