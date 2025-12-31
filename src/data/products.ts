import { Building2, Droplets, Zap, Hospital, GraduationCap, Car, Plane } from "lucide-react";

export const enterpriseProducts = [
  {
    id: "ihm",
    name: "IHM",
    fullName: "Intelligent Hospital Management",
    shortTitle: "IHM - Hospital Management",
    icon: Hospital,
    color: "from-logo-blue to-medium-blue",
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
    color: "from-logo-pink to-accent",
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
    color: "from-logo-teal to-logo-blue",
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
    color: "from-medium-blue to-logo-blue",
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
    color: "from-logo-pink to-accent",
    description: "Intelligent energy monitoring and optimization for sustainable operations.",
    longDescription: "Our Smart Energy Management System provides real-time monitoring, analysis, and optimization of energy consumption across your facilities. Reduce costs, lower carbon footprint, and achieve sustainability goals with AI-powered insights and automated controls.",
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
      { title: "Cost Reduction", description: "Reduce energy costs by 20-35% through intelligent optimization" },
      { title: "Carbon Neutral Goals", description: "Track and reduce carbon emissions with actionable insights" },
      { title: "Compliance Ready", description: "Meet regulatory requirements with automated reporting" },
      { title: "ROI Tracking", description: "Measure sustainability investments and savings in real-time" }
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
    fullName: "Smart Water Management System",
    shortTitle: "Water Automation",
    icon: Droplets,
    color: "from-logo-teal to-logo-blue",
    description: "IoT-enabled water monitoring and conservation system.",
    longDescription: "Transform water management with our comprehensive IoT-enabled platform. Monitor consumption, detect leaks, optimize irrigation, and ensure quality compliance. Our system helps organizations conserve water resources while reducing operational costs.",
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
      { title: "Water Conservation", description: "Reduce water wastage by up to 45% with smart monitoring" },
      { title: "Leak Prevention", description: "AI detects anomalies and prevents costly water damage" },
      { title: "Quality Assurance", description: "Continuous monitoring ensures water quality standards" },
      { title: "Operational Efficiency", description: "Automated controls reduce manual intervention by 70%" }
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
    color: "from-logo-blue to-medium-blue",
    description: "Comprehensive building automation for sustainable operations.",
    longDescription: "Create intelligent, sustainable buildings with our comprehensive BMS platform. Integrate HVAC, lighting, security, and occupancy systems into a unified dashboard. Optimize resource usage, enhance comfort, and achieve green building certifications.",
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
      { title: "Energy Efficiency", description: "Reduce building energy consumption by 30-40%" },
      { title: "Occupant Comfort", description: "AI optimizes temperature, lighting, and air quality automatically" },
      { title: "Green Certification", description: "Meet LEED, WELL, and other sustainability standards" },
      { title: "Asset Longevity", description: "Predictive maintenance extends equipment lifespan by 25%" }
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
