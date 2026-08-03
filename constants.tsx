
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
  Layers,
  Globe
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
  secondaryPhone: "+94 76 77 65080",
  linkedin: "https://linkedin.com/in/ahmathmusharraf",
  portfolio: "https://linktr.ee/ahmathmusharraf",
  
  summary: "Results-driven Digital Marketing Manager and Brand Designer with 6+ years of experience across the UAE and Sri Lanka, specializing in real estate marketing, performance advertising, and end-to-end brand and content strategy. Proven track record managing multi-market Meta and Google Ads budgets exceeding AED 40,000 per month, generating 1,500+ qualified leads monthly, and improving conversion rates by up to 35% through data-driven campaign optimization. Skilled in Meta Ads, Google Ads, SEO, content strategy, photography, videography, graphic design, and marketing automation (WhatsApp API, Zapier, AI-powered workflows). Delivered measurable growth across real estate, education, healthcare, and multi-industry sectors, combining creative direction with performance marketing to drive lead generation, brand visibility, and ROI.",
  
  profileImage: "https://raw.githubusercontent.com/ahmath-musharraf/Musharraf-Portfolio/refs/heads/main/Musharraf.png",

  // PATH TO YOUR REAL CV
  cvUrl: "/Multimedia_Portfolio_Ahmath.pdf" 
};

export const SITE_CONFIG = {
  title: `${PERSONAL_INFO.name} | Senior Digital Marketing Manager & Creative Director`,
  description: "Senior Digital Marketing Manager & Creative Director based in Dubai, UAE. Specializing in Real Estate Marketing, Performance Ads, Brand Strategy & Media Production.",
  resumeUrl: PERSONAL_INFO.cvUrl,
};

/**
 * EDIT YOUR WORK EXPERIENCE HERE
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Senior Multimedia Designer",
    company: "Al Khateeb Global General Trading LLC",
    location: "Dubai, UAE",
    period: "Oct 2025 - Present",
    description: [
      "Produced product photography, photo retouching, and promotional videos for marketing and e-commerce platforms.",
      "Optimized multimedia content for websites, social media platforms, and digital advertising campaigns.",
      "Designed and developed high-quality visual content for digital and print marketing campaigns, including social media creatives, brochures, flyers, banners, and promotional materials.",
      "Managed end-to-end multimedia production, including concept development, graphic design, video editing, animation, and final delivery.",
      "Stayed updated with the latest design trends, tools, and multimedia technologies to improve creative outputs.",
      "Directed end-to-end creative vision for multimedia campaigns, setting visual tone, style guidelines, and quality standards across the team.",
      "Led creative decision-making from concept to final output, acting as the primary point of creative sign-off before delivery.",
      "Supervised creative projects and ensured timely delivery while maintaining high design standards."
    ]
  },
  {
    id: "2",
    role: "Social Media Manager & Brand Designer",
    company: "IBM International Real Estate LLC (Contract)",
    location: "Dubai, UAE",
    period: "Jan 2025 - Sep 2025",
    description: [
      "Managed AED 40,000+ monthly advertising budget across Meta, Google, and TikTok platforms for high-performance real estate lead generation campaigns.",
      "Developed brand identity materials and ensured consistent visual communication across all digital platforms and campaigns.",
      "Owned creative direction for all campaign assets, defining brand tone, visual identity, and messaging across property launches and listings.",
      "Directed photography, videography, and design vendors to produce premium, on-brand property marketing content.",
      "Optimized campaign performance to achieve cost-per-lead (CPL) ranging from AED 8-40 (Sri Lanka) and AED 80-300 (UAE market), improving overall ad efficiency and ROI.",
      "Increased lead quality from 20% to 35% conversion rate through advanced audience segmentation, funnel optimization, and landing page improvements.",
      "Implemented WhatsApp API automation and Zapier workflows for lead nurturing, instant follow-ups, and improved conversion speed.",
      "Generated 1,500+ qualified leads per month across international markets including UAE, India, Pakistan, Australia, Canada, Singapore, UK, USA, and Sri Lanka.",
      "Tracked and reported on ROAS, CPA, and CTR across campaigns using Google Analytics and Meta Business Manager to guide budget reallocation.",
      "Presented campaign performance reports and marketing proposals to senior management to secure continued budget investment."
    ]
  },
  {
    id: "3",
    role: "Senior Digital Marketing Specialist",
    company: "British College of Applied Studies (BCAS Campus)",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Dec 2024",
    description: [
      "Led comprehensive digital marketing strategies for multiple academic programs, increasing student inquiries and lead generation by 70%+ through SEO, social media, email marketing, and paid advertising campaigns.",
      "Planned, executed, and optimized high-performance Meta and Google Ads campaigns, improving conversion rates by 35% while reducing cost-per-lead through data-driven optimization.",
      "Managed end-to-end content creation, branding, and campaign execution for admissions and institutional events, significantly boosting online engagement and strengthening overall brand visibility.",
      "Set creative direction for all admissions marketing materials, ensuring consistent brand identity across digital, print, and event campaigns."
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
      "Planned and optimized Meta advertising campaigns for medical services, reducing cost-per-lead by 25% while improving conversion quality and campaign performance.",
      "Directed the visual and creative direction of healthcare content, shaping the hospital's brand voice across all social media channels."
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
    name: "Digital Marketing & Performance",
    icon: Megaphone,
    skills: ["Social Media Marketing", "SEO Strategy", "SEM", "Meta Ads", "Google Ads", "LinkedIn Ads", "TikTok Ads", "Email Marketing", "Retargeting", "Lead Generation", "Conversion Rate Optimization (CRO)", "Campaign Analytics", "ROAS", "CPA", "CTR Tracking"]
  },
  {
    name: "Analytics & Automation Tools",
    icon: Workflow,
    skills: ["Google Analytics", "Google Tag Manager", "Meta Business Manager", "HubSpot", "Mailchimp", "SEMrush", "Ahrefs", "WhatsApp API", "Zapier"]
  },
  {
    name: "Real Estate Marketing",
    icon: Building2,
    skills: ["Property Photography", "Real Estate Videography", "Virtual Tours", "Architectural & Interior Shoots", "Luxury Property Branding", "Listing Marketing"]
  },
  {
    name: "Branding & Creative Strategy",
    icon: Briefcase,
    skills: ["Brand Identity Development", "Market Positioning", "Campaign Strategy", "Creative Direction", "Brand Guidelines", "Visual Storytelling"]
  },
  {
    name: "Content & Video Production",
    icon: Video,
    skills: ["Content Strategy", "Short & Long-Form Video", "Reels & TikTok Content", "Copywriting", "Storyboarding", "Video Editing", "Color Grading"]
  },
  {
    name: "Graphic Design & Visuals",
    icon: Palette,
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Social Media Design", "Print & Digital Media", "Typography", "Layout Design"]
  },
  {
    name: "Web & Digital Experience",
    icon: Code,
    skills: ["WordPress Development", "HTML", "CSS", "UI/UX Basics", "Landing Page Design", "SEO Optimization", "E-Commerce Content Management"]
  },
  {
    name: "Photography & Cinematography",
    icon: Camera,
    skills: ["Commercial Photography", "Event Coverage", "Product Photography", "Drone Visual Content", "Cinematic Video Production"]
  },
  {
    name: "Project Management & Leadership",
    icon: Zap,
    skills: ["Project Coordination", "Team Leadership", "Workflow Optimization", "Client Communication", "Campaign Management"]
  },
  {
    name: "AI & Marketing Automation",
    icon: Brain,
    skills: ["AI Content Generation", "Prompt Engineering", "Marketing Automation Tools", "ChatGPT Workflows", "AI Image & Video Tools"]
  }
];

export const SOFTWARE_PROJECTS: Project[] = [
  {
    title: "Al Khateeb Digital Transformation",
    description: "Re-engineered visual assets and web UI for a leading GCC enterprise to drive e-commerce growth.",
    tags: ["Next.js", "Tailwind", "UX"],
    link: "https://alkhateeb.ae/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Portfolio Hub & Media Engine",
    description: "Cloud-optimized media delivery platform and central portfolio hub for luxury real estate and marketing assets.",
    tags: ["Performance", "Media", "Full-Stack"],
    link: "https://linktr.ee/ahmathmusharraf",
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
    title: "Luxury Property Branding", 
    category: "Branding", 
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '3:4'
  },
  { 
    id: "v4", 
    title: "BCAS Education Campaign", 
    category: "Mentorship", 
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800&auto=format&fit=crop",
    aspectRatio: '3:4'
  },
  {
    id: "v5",
    title: "Commercial Product Photography",
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
  { name: "Portfolio Hub", url: PERSONAL_INFO.portfolio, icon: Globe },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const LANGUAGES = [
  "English (Professional)",
  "Tamil (Native)",
  "Sinhala (Advanced)",
  "Malayalam (Conversational)"
];

export const CERTIFICATIONS = [
  "Foundations of Project Management – University of Moratuwa, Sri Lanka",
  "Meta Certified Creative Strategy Professional – Meta",
  "HubSpot Content Marketing Strategy Certification – HubSpot Academy",
  "Google Ads Search Certification – Google Skillshop",
  "AI-Powered Performance Ads Certification – Google",
  "Fundamentals of Digital Marketing – Google",
  "AI for App Building – Google",
  "AI for Business Professionals – HP LIFE",
  "Social Media Marketing – HP LIFE",
  "Microsoft Certified: Azure Fundamentals – Microsoft"
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

