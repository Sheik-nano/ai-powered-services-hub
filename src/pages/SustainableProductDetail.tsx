import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ArrowRight, Leaf, TrendingDown, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { sustainableProducts } from "@/data/products";

const SustainableProductDetail = () => {
  const { productId } = useParams();
  const product = sustainableProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-logo-blue to-logo-teal text-primary-foreground mb-6">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">Sustainable Solution</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-primary mb-4">{product.fullName}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-secondary to-logo-blue hover:opacity-90 text-secondary-foreground rounded-full px-8 py-6 text-lg">
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-border">
                  Download Brochure
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section className="py-20 bg-gradient-to-r from-logo-blue/10 via-logo-pink/5 to-logo-teal/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Sustainability <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Measurable results that make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-3xl p-8 border border-logo-blue/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-logo-blue to-logo-teal flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-display font-bold text-logo-blue mb-2">
                {Object.values(product.sustainabilityImpact)[0]}
              </h3>
              <p className="text-muted-foreground">Resource Savings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-3xl p-8 border border-logo-teal/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-logo-teal to-logo-blue flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-display font-bold text-logo-teal mb-2">
                {Object.values(product.sustainabilityImpact)[1]}
              </h3>
              <p className="text-muted-foreground">Environmental Impact</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-3xl p-8 border border-logo-pink/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-logo-pink to-logo-blue flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-display font-bold text-logo-pink mb-2">
                {product.sustainabilityImpact.costSavings}
              </h3>
              <p className="text-muted-foreground">Avg. Client Savings</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Real-time <span className="gradient-text">Dashboard</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Monitor, analyze, and optimize with powerful visualization tools
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-logo-blue/20 via-logo-pink/10 to-logo-teal/20 rounded-3xl blur-3xl" />
            <div className="relative bg-background rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-logo-teal" />
                <span className="ml-4 text-sm text-muted-foreground">{product.name} Analytics Dashboard</span>
              </div>

              {/* Mock Dashboard UI */}
              <div className="p-8 space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {["Live Consumption", "Daily Target", "Savings Today", "Alerts"].map((label, i) => (
                    <div key={label} className="bg-muted/30 rounded-2xl p-4 border border-border/50">
                      <p className="text-sm text-muted-foreground mb-1">{label}</p>
                      <p className="text-2xl font-bold">{["2,450 kWh", "3,000 kWh", "18.3%", "2"][i]}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-2 bg-muted/30 rounded-2xl p-6 border border-border/50">
                    <h4 className="font-semibold mb-4">Consumption Trend (Last 7 Days)</h4>
                    <div className="flex items-end justify-between h-40 gap-2">
                      {[65, 78, 52, 89, 73, 45, 61].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full bg-gradient-to-t from-logo-blue to-logo-teal rounded-t-lg transition-all"
                            style={{ height: `${height}%` }}
                          />
                          <span className="text-xs text-muted-foreground">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                    <h4 className="font-semibold mb-4">Distribution</h4>
                    <div className="relative h-40 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-8 border-logo-blue border-t-logo-pink border-r-logo-teal" />
                      <div className="absolute text-center">
                        <p className="text-2xl font-bold">72%</p>
                        <p className="text-xs text-muted-foreground">Efficiency</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                  <h4 className="font-semibold mb-4">Zone Status</h4>
                  <div className="grid grid-cols-5 gap-4">
                    {["Zone A", "Zone B", "Zone C", "Zone D", "Zone E"].map((zone, i) => (
                      <div key={zone} className="text-center">
                        <div className={`w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center ${
                          i === 2 ? "bg-yellow-500/20 text-yellow-500" : "bg-logo-blue/20 text-logo-blue"
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-medium">{zone}</p>
                        <p className="text-xs text-muted-foreground">{i === 2 ? "Warning" : "Normal"}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive tools for sustainable operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border/50 hover:border-logo-blue/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-logo-blue to-logo-teal flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Key <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Drive sustainability while improving your bottom line
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border/50"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-logo-blue to-logo-pink flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Industry <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trusted across diverse industries for sustainable transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {product.useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-2xl p-6 border border-border/50 text-center hover:border-logo-teal/30 transition-colors"
              >
                <p className="font-medium text-sm">{useCase}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-logo-blue/20 via-background to-logo-teal/20 rounded-3xl p-12 text-center border border-logo-blue/20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-logo-teal/10 border border-logo-teal/20 mb-6">
              <Leaf className="w-4 h-4 text-logo-teal" />
              <span className="text-sm font-medium text-logo-teal">Sustainable Future</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join the sustainability revolution with {product.name}. Schedule a demo today and see how we can help you achieve your green goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-secondary to-logo-blue hover:opacity-90 text-secondary-foreground rounded-full px-8 py-6 text-lg">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-border">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainableProductDetail;
