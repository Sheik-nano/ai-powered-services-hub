import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { enterpriseProducts, sustainableProducts } from "@/data/products";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services", dropdown: "services" },
    { name: "Products", path: "/#products", dropdown: "products" },
    { name: "Sustainable Products", path: "#", dropdown: "sustainable" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DataApps" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                    onMouseEnter={() => setOpenDropdown(link.dropdown)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menus */}
                {link.dropdown && (
                  <AnimatePresence>
                    {openDropdown === link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-2xl shadow-xl p-4"
                        onMouseEnter={() => setOpenDropdown(link.dropdown)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="space-y-1">
                          {link.dropdown === "services" &&
                            services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                              >
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                                  <service.icon className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-sm">{service.shortTitle}</span>
                              </Link>
                            ))}

                          {link.dropdown === "products" &&
                            enterpriseProducts.map((product) => (
                              <Link
                                key={product.id}
                                to={`/products/${product.id}`}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                              >
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${product.color} text-white`}>
                                  <product.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="font-medium text-sm block">{product.name}</span>
                                  <span className="text-xs text-muted-foreground">{product.fullName}</span>
                                </div>
                              </Link>
                            ))}

                          {link.dropdown === "sustainable" &&
                            sustainableProducts.map((product) => (
                              <Link
                                key={product.id}
                                to={`/sustainable/${product.id}`}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                              >
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${product.color} text-white`}>
                                  <product.icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <span className="font-medium text-sm block">{product.name}</span>
                                  <span className="text-xs text-muted-foreground">{product.fullName}</span>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-secondary to-logo-blue hover:opacity-90 transition-opacity text-secondary-foreground rounded-full px-6">
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button
                        className="w-full flex items-center justify-between text-foreground font-medium py-2"
                        onClick={() => setOpenDropdown(openDropdown === link.dropdown ? null : link.dropdown)}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.dropdown ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.dropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {link.dropdown === "services" &&
                              services.map((service) => (
                                <Link
                                  key={service.id}
                                  to={`/services/${service.id}`}
                                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <service.icon className="w-4 h-4" />
                                  <span>{service.shortTitle}</span>
                                </Link>
                              ))}

                            {link.dropdown === "products" &&
                              enterpriseProducts.map((product) => (
                                <Link
                                  key={product.id}
                                  to={`/products/${product.id}`}
                                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <product.icon className="w-4 h-4" />
                                  <span>{product.name}</span>
                                </Link>
                              ))}

                            {link.dropdown === "sustainable" &&
                              sustainableProducts.map((product) => (
                                <Link
                                  key={product.id}
                                  to={`/sustainable/${product.id}`}
                                  className="flex items-center gap-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <product.icon className="w-4 h-4" />
                                  <span>{product.name}</span>
                                </Link>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="block text-foreground font-medium py-2"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="w-full bg-gradient-to-r from-secondary to-logo-blue hover:opacity-90 transition-opacity text-secondary-foreground rounded-full mt-4">
                Book a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
