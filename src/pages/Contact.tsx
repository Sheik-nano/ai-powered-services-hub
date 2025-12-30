import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageSquare, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { 
      icon: MapPin, 
      label: "Our Office", 
      value: "123 Tech Park, Innovation District",
      subValue: "Bangalore, Karnataka 560001, India"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+91 (800) 123-4567",
      subValue: "+91 (800) 765-4321"
    },
    { 
      icon: Mail, 
      label: "Email", 
      value: "info@dataapps.cloud",
      subValue: "support@dataapps.cloud"
    },
    { 
      icon: Clock, 
      label: "Business Hours", 
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
      subValue: "Saturday: 10:00 AM - 2:00 PM"
    },
  ];

  const reasons = [
    { icon: MessageSquare, title: "Quick Response", description: "We respond to all inquiries within 24 hours" },
    { icon: Building, title: "Expert Team", description: "Get connected with the right specialist for your needs" },
    { icon: Send, title: "Free Consultation", description: "Schedule a free consultation to discuss your project" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-logo-blue/20 to-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to transform your business with intelligent solutions? Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-surface-soft">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-logo-blue flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-logo-blue flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.label}</div>
                      <div className="text-muted-foreground text-sm">{item.value}</div>
                      {item.subValue && (
                        <div className="text-muted-foreground text-sm">{item.subValue}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative rounded-2xl overflow-hidden h-[200px] border border-border/50"
              >
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                  alt="Map Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-medium">📍 Bangalore, India</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-background p-8 md:p-10 rounded-3xl border border-border/50 shadow-xl">
                <h3 className="text-2xl font-display font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name *</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        className="h-12 rounded-xl" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name *</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe" 
                        className="h-12 rounded-xl" 
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input 
                        name="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com" 
                        className="h-12 rounded-xl" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <Input 
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210" 
                        className="h-12 rounded-xl" 
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company</label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company" 
                        className="h-12 rounded-xl" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject *</label>
                      <Input 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?" 
                        className="h-12 rounded-xl" 
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and how we can help..." 
                      className="min-h-[150px] rounded-xl resize-none" 
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-secondary to-logo-blue hover:opacity-90 transition-opacity text-white rounded-xl h-14 text-lg font-medium group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-logo-blue">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Schedule a free consultation with our experts and discover how we can help transform your business.
            </p>
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-medium"
            >
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
