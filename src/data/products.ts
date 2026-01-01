import { Building2, Droplets, Zap, Hospital, GraduationCap, Car, Plane, Sprout, Factory, ShoppingBag, Home, Stethoscope, Thermometer, Lightbulb, Shield, ParkingCircle, Users, Wind, Gauge, AlertTriangle, Settings, BarChart3, Activity } from "lucide-react";

export const enterpriseProducts = [
  {
    id: "ihm",
    name: "IHM",
    fullName: "Intelligent Hospital Management",
    shortTitle: "IHM - Hospital Management",
    icon: Hospital,
    color: "from-blue-500 to-cyan-500",
    description: "A powerful, cloud-based platform transforming healthcare administration.",
    longDescription: "IHM is a comprehensive hospital management system that simplifies patient registration, in/outpatient management, EMR, billing, OT coordination, pharmacy, and lab operations. Our platform enables healthcare providers to deliver better patient care through streamlined operations and real-time analytics.",
    features: [
      "Patient Registration & Management",
      "Electronic Medical Records (EMR)",
      "Billing & Revenue Cycle Management",
      "OT Coordination & Scheduling",
      "Pharmacy Management",
      "Laboratory Information System",
      "Real-time Analytics Dashboard",
      "Multi-branch Support"
    ],
    benefits: [
      { title: "Reduce Wait Times", description: "Streamlined workflows reduce patient wait times by up to 40%" },
      { title: "Improve Accuracy", description: "Digital records eliminate manual errors and improve data accuracy" },
      { title: "Cost Savings", description: "Automated processes reduce operational costs significantly" },
      { title: "Better Care", description: "Real-time patient data enables better clinical decisions" }
    ],
    dashboardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=600&fit=crop"
  },
  {
    id: "ilm",
    name: "ILM",
    fullName: "Intelligent Learning Management",
    shortTitle: "ILM - Learning Management",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    description: "A complete digital suite for schools and colleges.",
    longDescription: "ILM transforms educational institutions with a comprehensive digital platform managing admissions, student/faculty records, lesson plans, attendance, exams, library, transportation, hostel, and fee collection. Empower your institution with data-driven insights and streamlined operations.",
    features: [
      "Admission Management",
      "Student Information System",
      "Faculty & Staff Management",
      "Attendance Tracking",
      "Examination & Grading",
      "Library Management",
      "Transportation & Hostel",
      "Fee Collection & Finance"
    ],
    benefits: [
      { title: "Paperless Operations", description: "Go fully digital with automated workflows and documentation" },
      { title: "Parent Engagement", description: "Keep parents informed with real-time updates and communication" },
      { title: "Academic Excellence", description: "Track student performance and identify areas for improvement" },
      { title: "Administrative Efficiency", description: "Reduce administrative workload by up to 60%" }
    ],
    dashboardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
  },
  {
    id: "motosuite",
    name: "MotoSuite ERP",
    fullName: "Automobile Service Center ERP",
    shortTitle: "MotoSuite - Auto ERP",
    icon: Car,
    color: "from-orange-500 to-red-500",
    description: "An ERP system designed for vehicle service centers.",
    longDescription: "MotoSuite ERP streamlines job card creation, technician management, inventory control, and customer interactions. With AI-based vehicle scratch detection and comprehensive mobile apps, transform your service center into a modern, efficient operation.",
    features: [
      "Job Card Management",
      "Technician Assignment & Tracking",
      "Inventory Control",
      "AI-based Scratch Detection",
      "Customer Mobile App",
      "Service History Tracking",
      "Parts Procurement",
      "Revenue Analytics"
    ],
    benefits: [
      { title: "Faster Turnaround", description: "Reduce service time with optimized workflows and scheduling" },
      { title: "Inventory Optimization", description: "AI-powered inventory management reduces stockouts and overstock" },
      { title: "Customer Satisfaction", description: "Transparent updates and digital invoicing improve customer trust" },
      { title: "Revenue Growth", description: "Identify upselling opportunities and track revenue per bay" }
    ],
    dashboardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop"
  },
  {
    id: "pilgrim360",
    name: "Pilgrim360",
    fullName: "Hajj & Umrah Operations Platform",
    shortTitle: "Pilgrim360 - Hajj & Umrah",
    icon: Plane,
    color: "from-emerald-500 to-teal-500",
    description: "Connecting all Hajj & Umrah operations seamlessly.",
    longDescription: "Pilgrim360 is a complete digital suite for Umrah agents, simplifying batch creation, package management, and pilgrim registration. With AI-powered passport scanning, photo capture, and comprehensive visa tracking, manage your pilgrimage operations with ease.",
    features: [
      "Batch Creation & Management",
      "AI Passport Scanning",
      "Pilgrim Registration",
      "Visa Processing & Tracking",
      "Package Management",
      "Finance & Accounting",
      "Hotel & Transport Booking",
      "Group Communication"
    ],
    benefits: [
      { title: "Faster Processing", description: "AI scanning reduces document processing time by 80%" },
      { title: "Error Reduction", description: "Automated validation prevents costly visa rejections" },
      { title: "Better Organization", description: "Manage hundreds of pilgrims with ease and clarity" },
      { title: "Financial Control", description: "Complete visibility into payments, expenses, and profits" }
    ],
    dashboardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1200&h=600&fit=crop"
  }
];

export const sustainableProducts = [
  {
    id: "energy-management",
    name: "Energy Management",
    fullName: "Smart Energy Management System",
    shortTitle: "Energy Management",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    description: "Intelligent energy monitoring and optimization for sustainable operations.",
    longDescription: "Data Apps offers a comprehensive Intelligent Energy Management System powered by IoT sensors, AI analytics, smart meters, and centralized dashboards. The system automates monitoring, load balancing, billing, and auditing with built-in alarms and mobile access. Designed for scalability, the platform supports commercial buildings, industries, data centers, retail chains, and healthcare facilities.",
    challenge: {
      title: "The Energy Management Challenge in Modern Buildings",
      points: [
        {
          title: "Rising Costs & Carbon Footprint",
          description: "Commercial and industrial facilities face increasing energy costs and growing pressure to reduce carbon emissions, demanding smarter consumption strategies."
        },
        {
          title: "Inefficiencies & Wastage",
          description: "Manual energy management leads to significant inefficiencies, peak demand penalties, and high operational expenses, wasting valuable resources."
        },
        {
          title: "Sustainability Mandates",
          description: "Growing regulatory requirements and corporate ESG goals push organizations to adopt innovative energy solutions with measurable outcomes."
        }
      ],
      painPoints: {
        commercial: "Excessive energy bills from inefficient HVAC, lighting running during off-hours, peak demand charges, and lack of visibility into consumption patterns.",
        industrial: "High operational costs from machinery running at suboptimal efficiency, power factor penalties, and inability to track energy usage by production line."
      }
    },
    painAreasSolved: [
      "Eliminates manual monitoring with automated IoT sensors",
      "Peak demand management with AI-powered load shedding",
      "Real-time power factor correction and optimization",
      "Automated energy audits and digital compliance reports",
      "Centralized and mobile control of all equipment",
      "Solar and renewable integration with grid optimization"
    ],
    features: [
      "Real-time Energy Monitoring",
      "AI-powered Consumption Analysis",
      "Automated Load Balancing",
      "Solar Integration Management",
      "Peak Demand Management",
      "Carbon Footprint Tracking",
      "Predictive Maintenance Alerts",
      "Energy Audit Reports"
    ],
    benefits: [
      { title: "Cost Reduction", description: "Reduce energy costs by 20-35% through intelligent optimization and peak demand management" },
      { title: "Carbon Neutral Goals", description: "Track and reduce carbon emissions with actionable insights and renewable integration" },
      { title: "Compliance Ready", description: "Meet regulatory requirements with automated reporting and audit trails" },
      { title: "ROI Tracking", description: "Measure sustainability investments and savings in real-time with detailed analytics" }
    ],
    industries: [
      {
        name: "Commercial Buildings",
        icon: Building2,
        challenges: "Managing energy across HVAC, lighting, elevators, and common areas while ensuring tenant comfort and cost efficiency.",
        solutions: [
          "Zone-wise energy monitoring and control",
          "Occupancy-based HVAC and lighting automation",
          "Tenant billing integration with sub-metering",
          "Peak demand alerts and load shedding",
          "Green building certification support"
        ]
      },
      {
        name: "Manufacturing & Industries",
        icon: Factory,
        challenges: "High energy consumption from production machinery, compliance requirements, and the need for power factor management.",
        solutions: [
          "Production line energy tracking and optimization",
          "Power factor correction monitoring",
          "Machine efficiency analytics",
          "Compliance-friendly dashboards and reports",
          "Predictive maintenance to prevent energy waste"
        ]
      },
      {
        name: "Data Centers",
        icon: Settings,
        challenges: "Extreme energy demands for cooling and computing, PUE optimization, and 24/7 reliability requirements.",
        solutions: [
          "PUE monitoring and optimization",
          "Cooling efficiency analytics",
          "UPS and power redundancy monitoring",
          "Hot/cold aisle temperature management",
          "Carbon footprint per compute unit tracking"
        ]
      },
      {
        name: "Healthcare Facilities",
        icon: Stethoscope,
        challenges: "Critical power needs for life-saving equipment, 24/7 operations, and stringent compliance requirements.",
        solutions: [
          "Critical equipment power monitoring",
          "Generator and UPS integration",
          "Zone-based HVAC control for sterile environments",
          "Energy compliance reporting",
          "Emergency power management"
        ]
      }
    ],
    dashboardMetrics: [
      { label: "Live Consumption", value: "2,450 kWh", trend: "down" },
      { label: "Daily Target", value: "3,000 kWh", trend: "neutral" },
      { label: "Savings Today", value: "18.3%", trend: "up" },
      { label: "Active Alerts", value: "2", trend: "warning" }
    ],
    useCases: [
      "Commercial Buildings",
      "Manufacturing Plants",
      "Data Centers",
      "Retail Chains",
      "Healthcare Facilities",
      "Educational Institutions"
    ],
    dashboardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop",
    sustainabilityImpact: {
      energySaved: "35%",
      carbonReduction: "40%",
      costSavings: "$2.5M+"
    }
  },
  {
    id: "water-automation",
    name: "Water Automation",
    fullName: "Intelligent Water Management System",
    shortTitle: "Water Automation",
    icon: Droplets,
    color: "from-cyan-500 to-blue-500",
    description: "Complete IoT-powered water monitoring, control, and conservation system.",
    longDescription: "Data Apps offers a complete Intelligent Water Management System powered by IoT, BIM integration, smart meters, and centralized dashboards. The system automates monitoring, control, billing, and auditing with built-in alarms and mobile access. Designed for scalability, the platform supports agriculture, industries, commercial hubs, residential communities, and healthcare campuses.",
    challenge: {
      title: "The Water Management Challenge in Modern Buildings",
      points: [
        {
          title: "Rising Costs & Regulations",
          description: "Commercial and residential buildings face increasing water costs and tightening regulatory pressures, demanding more efficient usage."
        },
        {
          title: "Inefficiencies & Leaks",
          description: "Manual water management leads to significant inefficiencies, undetected leaks, and high maintenance expenses, wasting precious resources."
        },
        {
          title: "Sustainability Demands",
          description: "There's a growing demand for sustainability and seamless integration with smart building ecosystems, pushing for innovative water solutions."
        }
      ],
      painPoints: {
        commercial: "Excessive water bills from undetected leaks, high maintenance costs due to manual checks, and potential regulatory fines.",
        residential: "Unexpected high utility costs, significant repair expenses from water damage, and lack of visibility into home water usage."
      }
    },
    painAreasSolved: [
      "Eliminates manual motor and valve operations",
      "Early leakage detection with IoT alerts",
      "Tank maintenance and water-level monitoring",
      "Automated audits and digital reports",
      "Centralized and mobile control of equipment",
      "Solar-compatible sensors and IoT devices for sustainability"
    ],
    features: [
      "Real-time Flow Monitoring",
      "Leak Detection & Alerts",
      "Smart Irrigation Control",
      "Water Quality Monitoring",
      "Consumption Analytics",
      "Predictive Maintenance",
      "Reservoir Management",
      "Compliance Reporting"
    ],
    benefits: [
      { title: "Water Conservation", description: "Reduce water wastage by up to 45% with smart monitoring and automated controls" },
      { title: "Leak Prevention", description: "AI detects anomalies and prevents costly water damage with instant alerts" },
      { title: "Quality Assurance", description: "Continuous monitoring ensures water quality standards are maintained" },
      { title: "Operational Efficiency", description: "Automated controls reduce manual intervention by 70%" }
    ],
    industries: [
      {
        name: "Smart Irrigation & Agriculture",
        icon: Sprout,
        challenges: "Farmers face challenges in over-irrigation, unpredictable weather conditions, and uneven water distribution across large fields, often leading to wasted water and reduced yields.",
        solutions: [
          "Intelligent irrigation scheduling using IoT sensors",
          "Soil moisture and weather-based automated water release",
          "Centralized monitoring of pumps and valves",
          "Reduced wastage and optimized crop yield",
          "Remote field monitoring via mobile app"
        ]
      },
      {
        name: "Industries",
        icon: Factory,
        challenges: "Industrial facilities consume large amounts of water for processing, cooling, and cleaning, while facing compliance requirements and the need for recycling. Manual management often results in wastage, high costs, and inefficiency.",
        solutions: [
          "End-to-end monitoring of industrial water usage",
          "Recycling and reuse via STP and ETP monitoring",
          "Automated utilization tracking and intelligent audits",
          "Zero manual intervention with IoT-enabled controls",
          "Compliance-friendly dashboards and alerts"
        ]
      },
      {
        name: "Commercial Buildings & Malls",
        icon: ShoppingBag,
        challenges: "Managing shared utilities across tenants, ensuring fair billing, and detecting leakages in real-time are critical. Manual billing and reporting processes create inefficiencies and disputes.",
        solutions: [
          "Automated water distribution and consumption monitoring",
          "Integrated billing system with tenant/shop usage tracking",
          "Dynamic pricing configurations and bill generation",
          "IoT-based tank level and leakage sensors",
          "Centralized dashboards for operational efficiency"
        ]
      },
      {
        name: "Residential Communities",
        icon: Home,
        challenges: "Residential communities struggle with transparent billing, unequal water distribution, and manual monitoring of shared tanks and pumps.",
        solutions: [
          "Smart water metering for individual homes/units",
          "Tank and pipeline monitoring across shared utilities",
          "Automated pump control with IoT valves",
          "Transparent billing and community-level dashboards",
          "Leakage detection and fair usage reporting"
        ]
      }
    ],
    dashboardMetrics: [
      { label: "Live Flow Rate", value: "1,250 L/hr", trend: "neutral" },
      { label: "Daily Usage", value: "45,000 L", trend: "down" },
      { label: "Savings Today", value: "22.5%", trend: "up" },
      { label: "Leak Alerts", value: "0", trend: "good" }
    ],
    useCases: [
      "Smart Cities",
      "Agriculture & Farming",
      "Industrial Facilities",
      "Hotels & Resorts",
      "Residential Complexes",
      "Municipal Water Systems"
    ],
    dashboardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop",
    sustainabilityImpact: {
      waterSaved: "45%",
      leakReduction: "90%",
      costSavings: "$1.8M+"
    }
  },
  {
    id: "smart-building",
    name: "Smart Building",
    fullName: "Intelligent Building Management System",
    shortTitle: "Smart Building",
    icon: Building2,
    color: "from-green-500 to-emerald-500",
    description: "Comprehensive building automation for sustainable, efficient, and comfortable operations.",
    longDescription: "Data Apps offers an Intelligent Building Management System (IBMS) that integrates HVAC, lighting, security, parking, elevators, and occupancy systems into a unified IoT-powered platform. With AI-driven automation, predictive maintenance, and centralized dashboards, transform your buildings into smart, sustainable, and efficient spaces.",
    challenge: {
      title: "The Smart Building Challenge in Modern Infrastructure",
      points: [
        {
          title: "Fragmented Systems",
          description: "Buildings often have siloed systems for HVAC, lighting, security, and elevators, leading to inefficiencies and management complexity."
        },
        {
          title: "High Operational Costs",
          description: "Without intelligent automation, buildings waste energy on unoccupied spaces, face equipment breakdowns, and incur high maintenance costs."
        },
        {
          title: "Occupant Experience",
          description: "Modern tenants and visitors expect seamless experiences—optimal comfort, smart parking, and efficient services—that legacy systems cannot provide."
        }
      ],
      painPoints: {
        commercial: "Inability to optimize energy across zones, manual security monitoring, lack of predictive maintenance, and poor tenant satisfaction scores.",
        residential: "Inefficient common area management, security concerns, parking chaos, and lack of visibility into shared utility consumption."
      }
    },
    painAreasSolved: [
      "Unified control of HVAC, lighting, and electrical systems",
      "AI-powered occupancy detection and space optimization",
      "Predictive maintenance reducing equipment downtime",
      "Smart parking with real-time slot availability",
      "Integrated security with access control and surveillance",
      "Indoor air quality monitoring and optimization"
    ],
    features: [
      "HVAC Optimization",
      "Smart Lighting Control",
      "Occupancy-based Automation",
      "Indoor Air Quality Monitoring",
      "Security System Integration",
      "Elevator Management",
      "Parking Management",
      "Visitor Management"
    ],
    benefits: [
      { title: "Energy Efficiency", description: "Reduce building energy consumption by 30-40% through intelligent automation" },
      { title: "Occupant Comfort", description: "AI optimizes temperature, lighting, and air quality automatically based on occupancy" },
      { title: "Green Certification", description: "Meet LEED, WELL, and other sustainability standards with documented compliance" },
      { title: "Asset Longevity", description: "Predictive maintenance extends equipment lifespan by 25% and reduces downtime" }
    ],
    industries: [
      {
        name: "Corporate Offices",
        icon: Building2,
        challenges: "Large office buildings need to balance energy efficiency with employee comfort, manage meeting room bookings, and ensure secure access across multiple floors.",
        solutions: [
          "Zone-based climate and lighting control",
          "Meeting room booking with occupancy sensors",
          "Access control integration with HR systems",
          "Desk booking and space utilization analytics",
          "Air quality monitoring for employee wellness"
        ]
      },
      {
        name: "Shopping Malls",
        icon: ShoppingBag,
        challenges: "High foot traffic, diverse tenant requirements, complex HVAC demands, and the need for smart parking to enhance customer experience.",
        solutions: [
          "Tenant-wise energy sub-metering",
          "Smart parking with guidance systems",
          "Crowd management and footfall analytics",
          "Centralized HVAC optimization for common areas",
          "Digital signage integration"
        ]
      },
      {
        name: "Hospitals & Healthcare",
        icon: Stethoscope,
        challenges: "Critical environment control for operating rooms, isolation wards, and pharmacies, plus stringent compliance and 24/7 operations.",
        solutions: [
          "Precision climate control for critical areas",
          "Air pressure monitoring for isolation rooms",
          "Asset tracking for medical equipment",
          "Emergency power and backup monitoring",
          "Compliance reporting and audit trails"
        ]
      },
      {
        name: "Residential Towers",
        icon: Home,
        challenges: "Managing common area utilities, smart parking allocation, visitor management, and ensuring resident satisfaction with shared amenities.",
        solutions: [
          "Common area lighting and HVAC automation",
          "Resident parking management system",
          "Visitor management with pre-registration",
          "Amenity booking (gym, pool, clubhouse)",
          "Community announcements and notifications"
        ]
      }
    ],
    dashboardMetrics: [
      { label: "Active Zones", value: "24/32", trend: "neutral" },
      { label: "Energy Savings", value: "34%", trend: "up" },
      { label: "Occupancy", value: "72%", trend: "neutral" },
      { label: "Air Quality", value: "Good", trend: "good" }
    ],
    useCases: [
      "Corporate Offices",
      "Shopping Malls",
      "Hospitals",
      "Universities",
      "Government Buildings",
      "Residential Towers"
    ],
    dashboardImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop",
    sustainabilityImpact: {
      energySaved: "40%",
      carbonReduction: "35%",
      costSavings: "$3.2M+"
    }
  }
];

export type SustainableProduct = typeof sustainableProducts[0];
export type EnterpriseProduct = typeof enterpriseProducts[0];
