
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
  phone: "+971 58 146 2540",
  secondaryPhone: "+94 76 776 5080",
  linkedin: "https://linkedin.com/in/ahmathmusharraf",
  portfolio: "https://linktr.ee/ahmathmusharraf",
  videoPortfolio: "https://www.canva.com/design/DAG7830hOq8/RxMMMG4idKm8Q5GwIEuAhQ/view",
  
  summary: "Results-driven Digital Marketing Manager and Brand Designer with 6+ years of experience across the UAE and Sri Lanka, specializing in real estate marketing, performance advertising, and end-to-end brand and content strategy. Proven track record managing multi-market Meta and Google Ads budgets exceeding AED 40,000 per month, generating 1,500+ qualified leads monthly, and improving conversion rates by up to 35% through data-driven campaign optimization. Skilled in Meta Ads, Google Ads, SEO, content strategy, photography, videography, graphic design, and marketing automation (WhatsApp API, Zapier, AI-powered workflows). Delivered measurable growth across real estate, education, healthcare, and multi-industry sectors, combining creative direction with performance marketing to drive lead generation, brand visibility, and ROI.",
  
  profileImage: "/public/images/MushiFinal1.png",

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
    title: "Pixels Advertisement & Printing",
    description: "Full-service printing company & advertising web platform featuring custom print solutions, product catalogs, and client ordering workflows.",
    tags: ["React", "Printing & Media", "Tailwind"],
    link: "https://pixelsadvertisement1.vercel.app/",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "FixDeal Automotive Platform",
    description: "Car buying and selling marketplace application featuring vehicle listing management, advanced search filters, and deal negotiation tools.",
    tags: ["React", "Automotive Marketplace", "Tailwind"],
    link: "https://fixdeal.vercel.app/",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "XAU VIP Trading Platform",
    description: "Premium trading platform and financial web portal providing market signal analytics, gold trading insights, and VIP membership access.",
    tags: ["FinTech", "Trading Platform", "Web Portal"],
    link: "https://xauvip.com/",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Studio Routes Production",
    description: "Commercial photography & videography agency website showcasing luxury real estate, drone visual content, and brand media portfolios.",
    tags: ["Media Production", "Cinematography", "React"],
    link: "https://studioroutes.vercel.app/",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Dressline Fashion E-Commerce",
    description: "Modern fashion & dress shop e-commerce platform featuring responsive product showcase, dynamic search, and seamless shopping experience.",
    tags: ["E-Commerce", "Fashion UI", "Tailwind"],
    link: "https://dressline.vercel.app/",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Hive Image UK E-Commerce",
    description: "UK-based e-commerce platform offering specialized custom merchandise, branding solutions, and online store order fulfillment.",
    tags: ["E-Commerce", "UK Retail", "Web Store"],
    link: "https://hiveimage.co.uk/",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Al Khateeb Global E-Commerce",
    description: "Corporate web portal & digital transformation for a leading GCC general trading and e-commerce enterprise.",
    tags: ["Next.js", "Enterprise", "GCC E-Commerce"],
    link: "https://alkhateeb.ae/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop"
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
  "Malayalam (Conversational)",
  "Hindi (Conversational)"
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
    name: "Mohamed Ishraque Kalideen",
    role: "Education Consultant & Pearson/BTEC Verifier",
    company: "Centre Management & Curriculum Design",
    quote: "I know Mr. Musharaff is a very energetic young man who can handle entire digital marketing and digital advertising using sophisticated current technologies tools based on industrial expectations. And Mr. Musharaff is a good team player to make success of task which has been assigned by his team head."
  },
  {
    id: "2",
    name: "Sanjaya Dharmadasa",
    role: "Creative & Brand Lead",
    company: "Digital Media & Strategy",
    quote: "Musharaf is a hard working go-getter type person with good team working ability. I highly recommend him to anyone who seeks his help and suggestions since I have worked with him on different projects. He'll keep tabs open until the work is done and asking suggestions if needed. He's good at his job as a digital marketer and designer as well as he's a good tutor."
  },
  {
    id: "3",
    name: "Tariq Al Khateeb",
    role: "Executive Director",
    company: "Al Khateeb Global LLC",
    quote: "Ahmath combines a rare cinematic eye with rigorous creative strategy. His work modernized our visual language and drove a 50% increase in social traffic."
  },
  {
    id: "4",
    name: "Yousuf Al Sayed",
    role: "Managing Director",
    company: "IBM International Real Estate",
    quote: "Under Ahmath's direction, our premium listings received immediate attention. He perfectly understands how to marry upscale lifestyle visual narratives with performance Facebook & Meta Ads to attract serious buyers."
  },
  {
    id: "5",
    name: "Dr. Fazal Rahman",
    role: "Admissions Operations Director",
    company: "BCAS Campus UK Framework",
    quote: "Ahmath revolutionized our admissions funnel. His performance-driven campaigns pushed student enrollments up by 70% while consistently maintaining clean, high-end branding."
  },
  {
    id: "6",
    name: "Sarah Jenkins",
    role: "Global Head of Brand",
    company: "Orbit Overseas & Travel Agency",
    quote: "He is incredibly rare. Ahmath bridges luxury visual direction and solid technical software engineering capabilities perfectly. He worked fast and produced stellar, benchmark-setting assets."
  },
  {
    id: "7",
    name: "Aamir Thanvi",
    role: "Head of Growth & Digital Strategy",
    company: "Apex Media & Tech Solutions Dubai",
    quote: "Musharraf is an exceptionally talented creative strategist. His ability to fuse performance ad copy with high-impact video storytelling has consistently delivered ROI across our regional campaigns in UAE and GCC markets."
  },
  {
    id: "8",
    name: "Rizwan Mohamed",
    role: "Senior Marketing Manager",
    company: "Horizon Retail & E-Commerce Group",
    quote: "Working with Musharraf is always a seamless experience. He takes complete ownership of end-to-end media campaigns, from creative direction to audience targeting and conversion analytics."
  }
];

