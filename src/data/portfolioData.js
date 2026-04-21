export const portfolioData = {
  personalInfo: {
    name: "Paul Marvin Zedrick C. Espere",
    location: "Dasmariñas, Cavite, Philippines",
    expertise: ["Full-Stack Web Development", "SaaS", "Cyber Threat Defense"],
    intro: "4th-year BSIT student specializing in Web and Application Development. Passionate about building robust, scalable solutions and enterprise-level tech services.",
  },
  techStack: [
    "React",
    "Tailwind CSS",
    "Flutter",
    "PHP",
    "JavaScript",
    "Supabase",
    "PostgreSQL",
    "MySQL"
  ],
  projects: [
    {
      id: "mlaas-quotation-system",
      title: "MLaaS Quotation & Subscription System",
      role: "Lead Full-Stack Developer",
      techStack: ["React", "PHP", "MySQL", "Tailwind CSS"],
      summary: "A comprehensive SaaS platform for managing MLaaS subscriptions, dynamic quotations, and automated billing pipelines.",
      images: {
        login: "/images/mlaas-dashboard.png",
        dashboard: "/images/mlaas-quotations.png",
        flow: "/images/mlaas-samplepdf.png",
      },
      technicalHighlights: "Implemented secure RBAC for distinct admin/reviewer workflows. Engineered a dynamic Excel/PDF quotation generation engine with optimized backend calculations. Built a robust master-detail scalable architecture to handle recurring subscription metrics."
    },
    {
      id: "insecurityfree",
      title: "InsecurityFree: Image Processing Utilization For Personal Glow-up Assistance",
      role: "Backend Developer & Machine Learning Engineer",
      isMobileMockup: true,
      techStack: ["Flutter", "Supabase", "Python", "YOLOv8"],
      summary: "A mobile and web-based system designed to bridge the gap between clinical dermatological analysis and user-accessible skincare guidance.",
      images: {
        login: "/images/login page-insecurityfree (1).png",
        dashboard: "/images/dashboard-insecurityfree.png",
        flow: "/images/results-insecurityfree.png",
      },
      technicalHighlights: "InsecurityFree empowers individuals to manage skin conditions holistically via an integrated YOLOv8 image-processing pipeline that analyzes skin type, tone, and impurity presence in a single capture. By providing scientifically grounded, ingredient-based feedback rather than unverified brand suggestions, the system helps users maintain routines and make informed dermatological decisions based on severity analysis."
    }
  ],
  experience: [
    {
      id: "ewb-ojt",
      type: "Experience",
      title: "On-the-Job Training (OJT)",
      organization: "Macrologic Diversified Technologies Inc.",
      date: "Recent",
      description: "Gained enterprise experience in professional cloud environments, ensuring secure operations and standardizing IT workflows."
    }
  ],
  certifications: [
    {
      id: "google-pm",
      type: "Certification",
      title: "Pearsonvue Database Expert",
      organization: "Pearson",
      date: "Completed",
      description: "Mastered Relational Database concepts."
    }
  ]
};
