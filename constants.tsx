
import { Experience, Education, SkillCategory, Project, SocialLink, Testimonial, VisualWork } from './types';
import { 
  Palette, 
  Linkedin, 
  Mail, 
  Instagram, 
  Github, 
  GraduationCap, 
  Code, 
  Zap, 
  Car, 
  Building2, 
  Briefcase, 
  Megaphone, 
  Focus, 
  Workflow, 
  Stethoscope, 
  Camera, 
  Video, 
  Cpu, 
  Brain, 
  Layers 
} from 'lucide-react';

/**
 * EDIT THIS SECTION TO CHANGE YOUR MAIN INFO
 */
export const PERSONAL_INFO = {
  name: "Ahmath Musharraf",
  roles: [
    "Senior Digital Marketing Manager",
    "Creative Director",
    "Brand & Performance Marketing Specialist",
    "Real Estate & Multi-Industry Expert"
  ],
  location: "Dubai, United Arab Emirates",
  nationality: "Sri Lankan",
  email: "ahmathmusharraf@gmail.com",
  phone: "+971 58146 2540",
  secondaryPhone: "+94 76 776 5080",
  linkedin: "https://linkedin.com/in/ahmathmusharraf",
  portfolio: "ahmathmusharraf.vercel.app",
  
  summary: "Results-driven Digital Marketing Specialist, Brand Designer, and Visual Content Creator with over 6+ years of experience across Sri Lanka and the UAE, specializing in real estate marketing, social media strategy, and high-impact visual storytelling. Proven expertise in managing end-to-end digital campaigns, creating engaging multimedia content, and building strong brand identities that drive measurable business growth. Skilled in Meta Ads, Google Ads, SEO, content strategy, photography, videography, and graphic design, with a strong ability to combine creativity and data-driven marketing to increase engagement, leads, and conversions. Successfully delivered marketing solutions across education, healthcare, travel, fashion, and real estate industries, achieving significant improvements in online reach, brand visibility, and customer acquisition. Highly experienced in using modern tools and AI-powered marketing workflows to optimize content production, automate campaigns, and enhance performance. Passionate about delivering visually compelling and result-oriented digital experiences that support business growth in competitive markets.",
  
  profileImage: "https://raw.githubusercontent.com/ahmath-musharraf/Musharraf-Portfolio/refs/heads/main/Musharraf.png",

  // PATH TO YOUR REAL CV
  cvUrl: "/Multimedia_Portfolio_Ahmath.pdf" 
};

export const SITE_CONFIG = {
  title: `${PERSONAL_INFO.name} | Global Creative Lead & Multimedia Architect`,
  description: "Specializing in High-End Real Estate Cinematography, Automotive Branding, and Performance Web Architecture for the Dubai Luxury Sector.",
  resumeUrl: PERSONAL_INFO.cvUrl,
};

/**
 * EDIT YOUR WORK EXPERIENCE HERE
 * All entries have exactly 4 high-impact points.
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Photographer, Videographer cum Graphic Designer",
    company: "Al Khateeb Global General Trading LLC",
    location: "Dubai, UAE",
    period: "Oct 2025 - Present",
    description: [
      "Captured high-quality product, corporate, and marketing photography and videography content, enhancing brand presentation and increasing online engagement by 50%+ across digital platforms.",
      "Designed professional marketing materials including social media creatives, product catalogs, and promotional banners, improving brand consistency and customer attraction.",
      "Produced and edited promotional videos and short-form content for social media campaigns, contributing to a significant boost in audience reach and engagement rates.",
      "Collaborated with sales and marketing teams to create visual content strategies aligned with product launches, supporting improved conversion performance.",
      "Managed end-to-end creative production workflow from concept development to final delivery, ensuring fast turnaround and high-quality visual standards."
    ]
  },
  {
    id: "2",
    role: "Brand Designer & Social Media Manager",
    company: "IBM International Real Estate",
    location: "Dubai, UAE",
    period: "Jan 2025 - Sep 2025",
    description: [
      "Developed and executed full brand identity and digital marketing strategy for real estate listings, improving brand recognition and increasing online property inquiries by 65%.",
      "Designed high-converting social media creatives, brochures, and property marketing visuals, contributing to a 40% increase in lead generation across Meta platforms.",
      "Managed end-to-end social media campaigns for luxury property promotions, optimizing targeting strategies that reduced cost-per-lead by 30%.",
      "Produced engaging video content and property walkthrough visuals, significantly boosting engagement rates and improving buyer interest in premium listings.",
      "Collaborated with sales and property consultants to align marketing visuals with market demand, supporting faster property sales cycles and higher conversion rates."
    ]
  },
  {
    id: "3",
    role: "Senior Digital Marketing Specialist",
    company: "British College of Applied Studies (BCAS Campus)",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Dec 2024",
    description: [
      "Led comprehensive digital marketing strategies for multiple academic programs, increasing student inquiries and lead generation by 70%+ through SEO, social media, and paid advertising campaigns.",
      "Planned, executed, and optimized high-performance Meta and Google Ads campaigns, improving conversion rates by 35% while reducing cost-per-lead through data-driven optimization.",
      "Managed end-to-end content creation, branding, and campaign execution for admissions and institutional events, significantly boosting online engagement and strengthening overall brand visibility."
    ]
  },
  {
    id: "4",
    role: "Social Media Marketing Specialist",
    company: "Dr. Jameel Memorial Hospital",
    location: "Colombo, Sri Lanka",
    period: "Oct 2020 - Dec 2022",
    description: [
      "Developed and managed comprehensive social media strategies for hospital services, increasing overall digital reach by 60%+ and significantly improving patient engagement across Facebook and Instagram.",
      "Created and executed healthcare-focused content campaigns (health awareness, doctor promotions, service awareness), resulting in a 40% increase in online appointment inquiries and patient leads.",
      "Planned and optimized Meta advertising campaigns for medical services, reducing cost-per-lead by 25% while improving conversion quality and campaign performance."
    ]
  },
  {
    id: "5",
    role: "Creative Multimedia Designer",
    company: "Orbit Overseas",
    location: "Colombo, Sri Lanka",
    period: "Mar 2019 - Sep 2020",
    description: [
      "Designed and produced engaging digital marketing creatives, travel advertisements, and promotional content for air ticketing services, increasing customer inquiries by 35% across digital platforms.",
      "Developed consistent brand visuals and social media campaigns for flight deals and travel packages, contributing to a 25% growth in online engagement and bookings.",
      "Collaborated with sales and operations teams to deliver fast-turnaround promotional materials, improving campaign delivery efficiency and supporting higher conversion rates during peak travel seasons."
    ]
  },
  {
    id: "6",
    role: "Graphic Designer",
    company: "ARA Fashion",
    location: "Colombo, Sri Lanka",
    period: "Jan 2018 - Feb 2019",
    description: [
      "Designed high-quality digital and print marketing materials including social media creatives, posters, and promotional banners, increasing campaign engagement by up to 40%.",
      "Collaborated with marketing and sales teams to develop brand-consistent visuals, contributing to improved customer attraction and a 25% boost in seasonal sales campaigns.",
      "Managed end-to-end design projects under tight deadlines, delivering consistent creative outputs that improved brand visibility across offline and online platforms."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "e1",
    degree: "B.Sc (Hons) in Software Engineering",
    institution: "University of Solent - UK",
    location: "United Kingdom",
    period: "2023 - 2024"
  },
  {
    id: "e2",
    degree: "BTEC Higher National Diploma in Software Engineering",
    institution: "Pearson - UK",
    location: "United Kingdom",
    period: "2020 - 2022"
  },
  {
    id: "e3",
    degree: "Diploma in Information Technology & English",
    institution: "BCAS Campus",
    location: "Sri Lanka",
    period: "2019 - 2020"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Real Estate Media",
    icon: Building2,
    skills: ["Property Photography", "Real Estate Videography", "Virtual Tours", "Architectural & Interior Shoots", "Luxury Property Branding", "Listing Marketing Content"]
  },
  {
    name: "Branding & Strategy",
    icon: Briefcase,
    skills: ["Brand Identity Development", "Market Positioning", "Campaign Strategy", "Creative Direction", "Brand Guidelines", "Visual Storytelling", "Campaign Development"]
  },
  {
    name: "Digital Marketing",
    icon: Megaphone,
    skills: ["Social Media Marketing", "SEO Strategy", "Meta Ads", "Google Ads", "Lead Generation", "Conversion Optimization", "Viral Content Strategy", "Campaign Analytics"]
  },
  {
    name: "Content & Video",
    icon: Video,
    skills: ["Content Strategy", "Short & Long Video Production", "Reels & TikTok Content", "Copywriting", "Storyboarding", "Video Editing", "Color Grading"]
  },
  {
    name: "Graphic Design",
    icon: Palette,
    skills: ["Adobe Creative Suite", "Social Media Design", "Print & Digital Media", "Typography", "Layout Design"]
  },
  {
    name: "Project Management",
    icon: Workflow,
    skills: ["Project Coordination", "Team Leadership", "Workflow Optimization", "Client Communication", "Creative Direction", "Campaign Management"]
  },
  {
    name: "Web & Digital",
    icon: Code,
    skills: ["WordPress Development", "HTML", "CSS", "UI/UX Basics", "Landing Page Design", "SEO Optimization", "E-Commerce Content"]
  },
  {
    name: "Photography",
    icon: Camera,
    skills: ["Commercial Photography", "Event Coverage", "Product Photography", "Drone Visual Content", "Cinematic Video Production"]
  },
  {
    name: "AI & Automation",
    icon: Brain,
    skills: ["AI Content Generation", "Prompt Engineering", "Marketing Automation", "ChatGPT Workflows", "AI Image & Video Tools"]
  }
];

export const SOFTWARE_PROJECTS: Project[] = [
  {
    title: "Al Khateeb Digital Transformation",
    description: "Re-engineered visual assets and web UI for a leading GCC automotive enterprise to drive e-commerce growth.",
    tags: ["Next.js", "Tailwind", "UX"],
    link: "https://alkhateeb.ae/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Studio Routes Media Engine",
    description: "Cloud-optimized media delivery platform for high-bitrate luxury real estate visual assets.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://studioroutes.vercel.app/",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
  }
];

export const VISUAL_WORKS: VisualWork[] = [
  { 
    id: "v1", 
    title: "Dubai Penthouse Cinematic", 
    category: "Videography", 
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/ldzhMWha3bk", 
    aspectRatio: '16:9'
  },
  { 
    id: "v2", 
    title: "Lexus LX600 Identity", 
    category: "Reels", 
    imageUrl: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    aspectRatio: '9:16'
  },
  { 
    id: "v3", 
    title: "Luxury Watch Branding", 
    category: "Branding", 
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '3:4'
  },
  { 
    id: "v4", 
    title: "Tech Workshop Series", 
    category: "Mentorship", 
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '3:4'
  },
  {
    id: "v5",
    title: "Automotive Lighting Studio",
    category: "Photography",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '16:9'
  },
  {
    id: "v6",
    title: "Corporate Identity Motion",
    category: "Videography",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '16:9'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: Linkedin },
  { name: "Instagram", url: "https://instagram.com/ahmath_musharraf", icon: Instagram },
  { name: "GitHub", url: "https://github.com/ahmathmusharraf", icon: Github },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const LANGUAGES = ["English (Professional)", "Tamil (Native)", "Sinhala (Advanced)", "Malayalam (Conversational)"];

export const CERTIFICATIONS = [
  "Foundations of Project Management – University of Moratuwa, Sri Lanka",
  "Meta Certified Creative Strategy Professional – Meta",
  "HubSpot Content Marketing Strategy Certification – HubSpot Academy",
  "Google Ads Search Certification – Google Skillshop"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Tariq Al Khateeb",
    role: "Executive Director",
    company: "Al Khateeb Global LLC",
    quote: "Ahmath combines a rare cinematic eye with rigorous creative strategy. His work modernized our visual language and drove a 50% increase in social traffic."
  },
  {
    id: "2",
    name: "Yousuf Al Sayed",
    role: "Managing Director",
    company: "IBM International Real Estate",
    quote: "Under Ahmath's direction, our premium listings received immediate attention. He perfectly understands how to marry upscale lifestyle visual narratives with performance Facebook & Meta Ads to attract serious buyers."
  },
  {
    id: "3",
    name: "Dr. Fazal Rahman",
    role: "Admissions Operations Director",
    company: "BCAS Campus UK Framework",
    quote: "Ahmath revolutionized our admissions funnel. His performance-driven campaigns pushed student enrollments up by 70% while consistently maintaining clean, high-end branding."
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    role: "Global Head of Brand",
    company: "Orbit Overseas & Travel Agency",
    quote: "He is incredibly rare. Ahmath bridges luxury visual direction and solid technical software engineering capabilities perfectly. He worked fast and produced stellar, benchmark-setting assets."
  }
];
