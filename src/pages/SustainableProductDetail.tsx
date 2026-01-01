import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ArrowRight, Leaf, TrendingDown, DollarSign, AlertTriangle, Droplets, Zap, Building2, Thermometer, Wind, Gauge, Activity, BarChart3, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { sustainableProducts, SustainableProduct } from "@/data/products";

// Dashboard component for Water Automation
const WaterDashboard = () => (
  <div className="p-6 space-y-6">
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: "Live Flow Rate", value: "1,250 L/hr", icon: Droplets, color: "text-cyan-500" },
        { label: "Tank Level", value: "78%", icon: Gauge, color: "text-blue-500" },
        { label: "Savings Today", value: "22.5%", icon: TrendingDown, color: "text-green-500" },
        { label: "Leak Alerts", value: "0", icon: Bell, color: "text-emerald-500" }
      ].map((metric, i) => (
        <div key={metric.label} className="bg-muted/30 rounded-2xl p-4 border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <metric.icon className={`w-4 h-4 ${metric.color}`} />
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
          <p className="text-2xl font-bold">{metric.value}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-muted/30 rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-500" />
          Water Consumption (Last 7 Days)
        </h4>
        <div className="flex items-end justify-between h-40 gap-2">
          {[45, 62, 38, 71, 55, 42, 48].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div 
                className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-lg transition-all"
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
        <h4 className="font-semibold mb-4">Tank Levels</h4>
        <div className="space-y-4">
          {[
            { name: "Main Tank", level: 78, color: "bg-cyan-500" },
            { name: "Reserve Tank", level: 92, color: "bg-blue-500" },
            { name: "Ground Tank", level: 45, color: "bg-yellow-500" }
          ].map((tank) => (
            <div key={tank.name}>
              <div className="flex justify-between text-sm mb-1">
                <span>{tank.name}</span>
                <span className="font-medium">{tank.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className={`h-full ${tank.color} rounded-full`} style={{ width: `${tank.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Settings className="w-4 h-4 text-cyan-500" />
        Zone Control Status
      </h4>
      <div className="grid grid-cols-6 gap-4">
        {[
          { name: "Zone A - Garden", status: "Active", consumption: "120 L/hr" },
          { name: "Zone B - Building 1", status: "Active", consumption: "340 L/hr" },
          { name: "Zone C - Pool", status: "Standby", consumption: "0 L/hr" },
          { name: "Zone D - Building 2", status: "Active", consumption: "280 L/hr" },
          { name: "Zone E - Parking", status: "Active", consumption: "85 L/hr" },
          { name: "Zone F - Common", status: "Active", consumption: "425 L/hr" }
        ].map((zone) => (
          <div key={zone.name} className="text-center p-3 bg-background rounded-xl border border-border/50">
            <div className={`w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center ${
              zone.status === "Standby" ? "bg-yellow-500/20 text-yellow-500" : "bg-cyan-500/20 text-cyan-500"
            }`}>
              <Droplets className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium truncate">{zone.name.split(" - ")[1]}</p>
            <p className="text-xs text-muted-foreground">{zone.consumption}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Dashboard component for Energy Management
const EnergyDashboard = () => (
  <div className="p-6 space-y-6">
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: "Live Consumption", value: "2,450 kWh", icon: Zap, color: "text-yellow-500" },
        { label: "Peak Load", value: "3,200 kW", icon: Gauge, color: "text-orange-500" },
        { label: "Savings Today", value: "18.3%", icon: TrendingDown, color: "text-green-500" },
        { label: "Carbon Offset", value: "12.5 tons", icon: Leaf, color: "text-emerald-500" }
      ].map((metric) => (
        <div key={metric.label} className="bg-muted/30 rounded-2xl p-4 border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <metric.icon className={`w-4 h-4 ${metric.color}`} />
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
          <p className="text-2xl font-bold">{metric.value}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-muted/30 rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-yellow-500" />
          Energy Consumption Trend (24 Hours)
        </h4>
        <div className="flex items-end justify-between h-40 gap-1">
          {[35, 28, 22, 18, 15, 12, 18, 45, 72, 85, 92, 88, 82, 78, 75, 80, 85, 88, 76, 65, 55, 48, 42, 38].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div 
                className={`w-full rounded-t transition-all ${
                  height > 80 ? "bg-gradient-to-t from-red-500 to-orange-400" : 
                  height > 60 ? "bg-gradient-to-t from-yellow-500 to-orange-400" : 
                  "bg-gradient-to-t from-green-500 to-emerald-400"
                }`}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>12 AM</span>
          <span>6 AM</span>
          <span>12 PM</span>
          <span>6 PM</span>
          <span>11 PM</span>
        </div>
      </div>

      <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold mb-4">Power Distribution</h4>
        <div className="space-y-4">
          {[
            { name: "HVAC", usage: 45, color: "bg-yellow-500" },
            { name: "Lighting", usage: 22, color: "bg-orange-500" },
            { name: "Equipment", usage: 18, color: "bg-red-500" },
            { name: "Others", usage: 15, color: "bg-amber-500" }
          ].map((item) => (
            <div key={item.name}>
              <div className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <span className="font-medium">{item.usage}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.usage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Zap className="w-4 h-4 text-yellow-500" />
        Floor-wise Consumption
      </h4>
      <div className="grid grid-cols-5 gap-4">
        {[
          { floor: "Ground Floor", consumption: "450 kWh", status: "optimal" },
          { floor: "1st Floor", consumption: "380 kWh", status: "optimal" },
          { floor: "2nd Floor", consumption: "520 kWh", status: "high" },
          { floor: "3rd Floor", consumption: "290 kWh", status: "optimal" },
          { floor: "4th Floor", consumption: "810 kWh", status: "critical" }
        ].map((floor) => (
          <div key={floor.floor} className="text-center p-4 bg-background rounded-xl border border-border/50">
            <div className={`w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center ${
              floor.status === "critical" ? "bg-red-500/20 text-red-500" :
              floor.status === "high" ? "bg-yellow-500/20 text-yellow-500" :
              "bg-green-500/20 text-green-500"
            }`}>
              <Zap className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium">{floor.floor}</p>
            <p className="text-xs text-muted-foreground">{floor.consumption}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Dashboard component for Smart Building
const SmartBuildingDashboard = () => (
  <div className="p-6 space-y-6">
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: "Active Zones", value: "24/32", icon: Building2, color: "text-green-500" },
        { label: "Occupancy", value: "72%", icon: Gauge, color: "text-blue-500" },
        { label: "Air Quality", value: "Good", icon: Wind, color: "text-emerald-500" },
        { label: "Temperature", value: "23°C", icon: Thermometer, color: "text-orange-500" }
      ].map((metric) => (
        <div key={metric.label} className="bg-muted/30 rounded-2xl p-4 border border-border/50">
          <div className="flex items-center gap-2 mb-2">
            <metric.icon className={`w-4 h-4 ${metric.color}`} />
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
          <p className="text-2xl font-bold">{metric.value}</p>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-6">
      <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Thermometer className="w-4 h-4 text-orange-500" />
          HVAC Status
        </h4>
        <div className="space-y-3">
          {[
            { zone: "Lobby", temp: 22, target: 22, status: "optimal" },
            { zone: "Office Area", temp: 24, target: 23, status: "adjusting" },
            { zone: "Server Room", temp: 18, target: 18, status: "optimal" },
            { zone: "Conference", temp: 21, target: 22, status: "heating" }
          ].map((zone) => (
            <div key={zone.zone} className="flex items-center justify-between p-3 bg-background rounded-xl border border-border/50">
              <span className="text-sm">{zone.zone}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{zone.temp}°C</span>
                <div className={`w-2 h-2 rounded-full ${
                  zone.status === "optimal" ? "bg-green-500" :
                  zone.status === "heating" ? "bg-orange-500" : "bg-yellow-500"
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Wind className="w-4 h-4 text-cyan-500" />
          Air Quality Index
        </h4>
        <div className="flex flex-col items-center justify-center h-40">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-muted" />
              <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" 
                className="text-green-500" 
                strokeDasharray={`${85 * 3.52} ${100 * 3.52}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">85</span>
              <span className="text-xs text-muted-foreground">AQI</span>
            </div>
          </div>
          <p className="text-sm text-green-500 font-medium mt-2">Good Air Quality</p>
        </div>
      </div>

      <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold mb-4">Parking Status</h4>
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className={`h-8 rounded-lg flex items-center justify-center text-xs font-medium ${
              [0, 3, 5, 7, 9, 11, 12, 14].includes(i) 
                ? "bg-red-500/20 text-red-500" 
                : "bg-green-500/20 text-green-500"
            }`}>
              {[0, 3, 5, 7, 9, 11, 12, 14].includes(i) ? "●" : "○"}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <span className="text-muted-foreground">Available: <span className="text-green-500 font-medium">8</span></span>
          <span className="text-muted-foreground">Occupied: <span className="text-red-500 font-medium">8</span></span>
        </div>
      </div>
    </div>

    <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
      <h4 className="font-semibold mb-4 flex items-center gap-2">
        <Building2 className="w-4 h-4 text-green-500" />
        Building Systems Overview
      </h4>
      <div className="grid grid-cols-6 gap-4">
        {[
          { system: "Lighting", status: "Auto", icon: "💡" },
          { system: "HVAC", status: "Active", icon: "❄️" },
          { system: "Security", status: "Armed", icon: "🔒" },
          { system: "Elevators", status: "2 Active", icon: "🛗" },
          { system: "Fire Safety", status: "OK", icon: "🔥" },
          { system: "Solar", status: "12kW", icon: "☀️" }
        ].map((item) => (
          <div key={item.system} className="text-center p-4 bg-background rounded-xl border border-border/50">
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="text-sm font-medium">{item.system}</p>
            <p className="text-xs text-green-500">{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SustainableProductDetail = () => {
  const { productId } = useParams();
  const product = sustainableProducts.find((p) => p.id === productId) as SustainableProduct | undefined;

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

  const renderDashboard = () => {
    switch (product.id) {
      case "water-automation":
        return <WaterDashboard />;
      case "energy-management":
        return <EnergyDashboard />;
      case "smart-building":
        return <SmartBuildingDashboard />;
      default:
        return <WaterDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />

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
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${product.color} text-white mb-6`}>
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
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white rounded-full px-8 py-6 text-lg">
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

      {/* Challenge Section */}
      {product.challenge && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {product.challenge.title}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {product.challenge.points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-8 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-8 border border-red-500/20"
              >
                <h4 className="font-display font-bold text-lg mb-3 text-red-500">Commercial Pain Points</h4>
                <p className="text-muted-foreground">{product.challenge.painPoints.commercial}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-8 border border-orange-500/20"
              >
                <h4 className="font-display font-bold text-lg mb-3 text-orange-500">
                  {product.id === "smart-building" ? "Residential Pain Points" : "Residential Pain Points"}
                </h4>
                <p className="text-muted-foreground">{product.challenge.painPoints.residential}</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Pain Areas We Solve */}
      {product.painAreasSolved && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Pain Areas <span className="text-green-500">We Solve</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.painAreasSolved.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground">{area}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sustainability Impact */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Sustainability <span className="text-green-500">Impact</span>
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
              className="bg-background rounded-3xl p-8 border border-green-500/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-display font-bold text-green-500 mb-2">
                {Object.values(product.sustainabilityImpact)[0]}
              </h3>
              <p className="text-muted-foreground">Resource Savings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-3xl p-8 border border-green-500/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-display font-bold text-green-500 mb-2">
                {Object.values(product.sustainabilityImpact)[1]}
              </h3>
              <p className="text-muted-foreground">Environmental Impact</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-3xl p-8 border border-green-500/20 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-display font-bold text-green-500 mb-2">
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
              Real-time <span className="text-green-500">Dashboard</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-background rounded-3xl border border-border/50 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-muted-foreground">{product.name} Analytics Dashboard</span>
              </div>

              {renderDashboard()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Applications */}
      {product.industries && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Industry <span className="text-green-500">Applications</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tailored solutions for diverse industry needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {product.industries.map((industry, index) => {
                const IndustryIcon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-3xl p-8 border border-border/50 hover:border-green-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}>
                        <IndustryIcon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold mb-2">{industry.name}</h3>
                        <p className="text-muted-foreground text-sm">{industry.challenges}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-green-500">Solutions:</p>
                      {industry.solutions.map((solution, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Powerful <span className="text-green-500">Features</span>
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
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-2xl p-6 border border-border/50 hover:border-green-500/30 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Key <span className="text-green-500">Benefits</span>
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
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
            className="relative bg-gradient-to-br from-green-500/20 via-background to-emerald-500/20 rounded-3xl p-12 text-center border border-green-500/20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Leaf className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">Sustainable Future</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join the sustainability revolution with {product.name}. Schedule a demo today and see how we can help you achieve your green goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white rounded-full px-8 py-6 text-lg">
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
