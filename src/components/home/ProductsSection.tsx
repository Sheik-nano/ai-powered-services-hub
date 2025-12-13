import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "ihm",
    name: "IHM",
    fullName: "Intelligent Hospital Management",
    description: "A powerful, cloud-based platform transforming healthcare administration. HMS simplifies patient registration, in/outpatient management, EMR, billing, OT coordination, pharmacy, and lab operations.",
    tags: ["Patient Registration", "EMR", "Billing", "Real-time Analytics"],
    badge: "Enterprise",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop",
  },
  {
    id: "ilm",
    name: "ILM",
    fullName: "Intelligent Learning Management",
    description: "A complete digital suite for schools and colleges, managing admissions, student/faculty records, lesson plans, attendance, exams, library, transportation, hostel, and fee collection.",
    tags: ["Admissions", "Attendance", "Exams", "Fee Collection"],
    badge: "Enterprise",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  },
  {
    id: "motosuite",
    name: "MotoSuite ERP",
    fullName: "Automobile Service Center ERP",
    description: "An ERP system designed for vehicle service centers, streamlining job card creation, technician management, inventory control, and customer interactions with AI-based vehicle scratch detection.",
    tags: ["Job Cards", "Inventory", "AI Detection", "Mobile Apps"],
    badge: "Enterprise",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
  },
  {
    id: "pilgrim360",
    name: "Pilgrim360",
    fullName: "Connecting all Hajj & Umrah operations",
    description: "A complete digital suite for Umrah agents, simplifying batch creation, package management, and pilgrim registration with AI-powered passport scanning and photo capture.",
    tags: ["Batch Creation", "AI Passport Scan", "Visa Tracking", "Finance Management"],
    badge: "Enterprise",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=400&fit=crop",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Our Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Solutions Crafted for <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From streamlining daily operations to unlocking data-driven insights, our products are crafted to drive growth, boost efficiency, and simplify the way you work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-muted/50 to-muted rounded-3xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      {product.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-1">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{product.fullName}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <button className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
