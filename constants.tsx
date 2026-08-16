
import { Experience, Education, SkillCategory, Project, SocialLink, Testimonial, VisualWork, CaseStudy } from './types';
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
  title: "Digital Marketing Manager • Marketing & Creative Leadership • Strategic Growth & Brand Direction",
  availability: "IMMEDIATELY AVAILABLE TO JOIN",
  roles: [
    "Digital Marketing Manager",
    "Digital Marketing Specialist",
    "Social Media Manager & Brand Designer",
    "Performance Marketing & Creative Strategist"
  ],
  location: "Dubai, United Arab Emirates",
  nationality: "Sri Lankan",
  email: "ahmathmusharraf@gmail.com",
  phone: "+971 58 146 2540",
  secondaryPhone: "+94 76 776 5080",
  linkedin: "https://linkedin.com/in/ahmathmusharraf/",
  portfolio: "https://linktr.ee/ahmathmusharraf",
  videoPortfolio: "https://www.canva.com/design/DAG7830hOq8/RxMMMG4idKm8Q5GwIEuAhQ/view",
  
  summary: "Results-driven Digital Marketing & Creative Strategist with 6+ years of experience across the UAE and Sri Lanka, specializing in performance marketing, paid media, lead generation, social media strategy, SEO, brand development, e-commerce, and creative content production. Proven track record of managing multi-channel campaigns across Meta, Google, and TikTok, with experience handling advertising budgets of up to AED 40,000+ monthly and driving measurable improvements in leads, engagement, conversions, and ROI. Skilled in developing data-driven strategies and monitoring ROAS, ROI, CPL, CPA, CTR, impressions, engagement, conversion rates, and overall campaign KPIs to optimize marketing performance. Strong creative leadership across graphic design, photography, videography, promotional campaigns, and content production.",
  
  profileImage: "/Mushifinal1.png",

  // PATH TO YOUR REAL CV
  cvUrl: "/Musharraf_CV.pdf" 
};

export const SITE_CONFIG = {
  title: `${PERSONAL_INFO.name} | Digital Marketing Manager & Creative Strategist`,
  description: "Digital Marketing Manager & Creative Strategist based in Dubai, UAE. Specializing in Performance Marketing, Paid Media, Social Media Strategy, SEO, E-Commerce & Media Production.",
  resumeUrl: PERSONAL_INFO.cvUrl,
};

/**
 * EDIT YOUR WORK EXPERIENCE HERE
 */
export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Digital Marketing Specialist",
    company: "Al Khateeb Global General Trading LLC",
    location: "Dubai, UAE",
    period: "Oct 2025 - Present",
    description: [
      "Manage digital marketing across Instagram, Facebook, LinkedIn, TikTok, and YouTube for multiple brands, developing content and campaigns aligned with business and sales objectives.",
      "Plan and optimize Meta and Google Ads campaigns, tracking impressions, reach, engagement, CTR, CPC, conversions, ROAS, ROI, and sales performance against campaign KPIs.",
      "Increased social media following from 500+ to 10,000+, achieving a 70% increase in engagement through targeted content, creative optimization, and audience-focused campaigns.",
      "Contributed to 50% sales growth through integrated paid advertising, social media marketing, e-commerce promotions, product content, and marketplace optimization.",
      "Produce complete campaign creatives including videos, Reels, product photography, flyers, banners, carousels, and promotional graphics, handling concept, scripting, filming, design, editing, and publishing.",
      "Manage 1,500+ products across Amazon and Noon, optimizing product listings, SEO content, visuals, promotional materials, and digital campaigns to support traffic, conversions, and sales."
    ]
  },
  {
    id: "2",
    role: "Social Media Manager & Brand Designer",
    company: "IBM International Real Estate LLC (Contract)",
    location: "Dubai, UAE",
    period: "Jan 2025 - Sep 2025",
    description: [
      "Managed AED 40,000+ monthly advertising budgets across Meta, Google, and TikTok, optimizing campaigns for lead generation, conversions, CPL, CPA, ROAS, and ROI.",
      "Generated 1,500+ qualified leads monthly across 9 international markets, using audience segmentation, retargeting, funnel optimization, and continuous campaign testing.",
      "Monitored key KPIs including impressions, reach, engagement, CTR, CPC, CPL, conversion rate, lead quality, ROAS, and ROI, using performance data to guide budget and campaign decisions.",
      "Improved lead-to-conversion rate from 20% to 35% and reduced CPL through audience optimization, creative A/B testing, campaign restructuring, and performance analysis.",
      "Created end-to-end advertising creatives including promotional videos, property reels, flyers, banners, social media graphics, and carousels, from concept and scripting through design, photography, videography, and editing.",
      "Prepared campaign performance reports for management, connecting ad spend, impressions, engagement, clicks, leads, conversions, and revenue to evaluate marketing ROI and identify optimization opportunities."
    ]
  },
  {
    id: "3",
    role: "Senior Digital Marketing Specialist",
    company: "British College of Applied Studies (BCAS Campus)",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Dec 2024",
    description: [
      "Increased student inquiries and lead generation by 70%+ through integrated SEO, social media marketing, paid advertising, email marketing, and content campaigns.",
      "Improved digital campaign conversion rates by 35% through data-driven optimization of Meta and Google Ads campaigns.",
      "Developed and executed admission-focused marketing campaigns to generate qualified student leads and support enrollment growth across academic programs.",
      "Increased online engagement and institutional visibility through strategic social media content, campaign creatives, promotional videos, flyers, and digital marketing materials.",
      "Managed end-to-end creative production and campaign execution, including content planning, graphic design, video content, copywriting, and promotional materials for admissions and institutional events.",
      "Used campaign performance data and KPIs to evaluate reach, impressions, engagement, CTR, conversions, and lead generation, continuously optimizing campaigns against marketing objectives."
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
    name: "E-Commerce & Marketplace Management",
    icon: Layers,
    skills: ["Amazon Seller Central", "Noon Marketplace", "Product Listing Optimization", "Catalog & Inventory Management", "Marketplace SEO", "Product Content Creation"]
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

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Luxury Real Estate & High-Net-Worth Lead Generation",
    client: "IBM International Real Estate & Al Khateeb Group",
    category: "Performance Marketing & Video Production",
    location: "Dubai, UAE",
    period: "2024 - Present",
    summary: "Engineered a high-converting digital advertising ecosystem combining 4K vertical drone video reels with laser-targeted Meta & TikTok lead forms for high-value real estate listings.",
    problem: "Rising CPLs and low inquiry quality from standard static real estate ads across GCC markets, resulting in low sales team conversion rates.",
    strategy: [
      "Produced cinematic 9:16 drone video reels highlighting architectural exclusivity and investment ROI.",
      "Built multi-step qualifying lead forms to filter out non-serious inquiries and capture investor budgets.",
      "Deployed automated Instant WhatsApp routing to connect sales agents with prospects in under 3 minutes."
    ],
    execution: [
      "Meta Ads Manager & TikTok Ads Manager performance campaign setup with custom lookalike audiences.",
      "Cinematic 4K videography & vertical reel editing showcasing prime Dubai properties.",
      "A/B testing ad creative variants: Lifestyle walkthroughs vs. Investment breakdown graphics."
    ],
    results: [
      "Generated 1,500+ verified high-intent investor leads with valid contact credentials.",
      "Achieved a 35% overall lift in appointment-booking conversion rate.",
      "Maintained a solid 4.2x ROAS across monthly performance ad spend."
    ],
    metrics: [
      { label: "Qualified Leads", value: "1,500+", badge: "High-Intent" },
      { label: "Conversion Lift", value: "+35%", badge: "ROI Driven" },
      { label: "Monthly Ad Spend", value: "AED 40k+", badge: "Managed" },
      { label: "Return on Ad Spend", value: "4.2x", badge: "ROAS" }
    ],
    tags: ["Meta Ads", "TikTok Ads", "Real Estate Marketing", "Cinematic Reels", "Lead Gen Funnel"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "cs-2",
    title: "UK University Framework Student Recruitment Expansion",
    client: "BCAS Campus UK University Framework",
    category: "EdTech Marketing & Enrollment Growth",
    location: "Colombo & International",
    period: "2023 - 2024",
    summary: "Scaled student intake by 45% through full-funnel digital marketing, social proof storytelling, and multi-channel ad automation across Facebook, Instagram, and Search.",
    problem: "Declining traditional print/radio campaign effectiveness and fragmented applicant lead tracking during competitive intake cycles.",
    strategy: [
      "Shifted 80% of budget into targeted Instagram Reels, TikTok video ads, and Google Search intent campaigns.",
      "Created student success stories and alumni video testimonials to establish immediate credibility.",
      "Structured localized landing pages with automated SMS/Email follow-up sequences for application assistance."
    ],
    execution: [
      "Omni-channel strategy spanning Facebook, Instagram, Google Search & WhatsApp Business API.",
      "Brand identity refresh for recruitment materials, prospectus brochures, and digital ad sets.",
      "Real-time CRM dashboard integration to monitor counselor call response rates and conversion pipelines."
    ],
    results: [
      "Achieved a 45% year-over-year increase in verified student application submissions.",
      "Reduced cost-per-lead (CPL) by 28% while elevating candidate academic qualification standards.",
      "Surpassed 2.8 Million cumulative organic & paid video views across social channels."
    ],
    metrics: [
      { label: "Enrollment Growth", value: "+45%", badge: "YoY Surge" },
      { label: "Cost Per Lead", value: "-28%", badge: "Efficiency" },
      { label: "Media Impressions", value: "2.8M+", badge: "Reach" },
      { label: "Counselor Speed", value: "<15 mins", badge: "Lead Response" }
    ],
    tags: ["EdTech Marketing", "Google Search Ads", "Social Video Ads", "CRM Integration", "Brand Strategy"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "cs-3",
    title: "Commercial Retail Brand Positioning & Visual Identity",
    client: "Al Khateeb Commercial & Corporate Ventures",
    category: "Brand Identity & Media Production",
    location: "Dubai, UAE",
    period: "2023 - Present",
    summary: "Refined end-to-end corporate visual identity, executive media assets, and digital brand presence to establish premium market positioning in GCC trade circles.",
    problem: "Outdated visual identity and inconsistent brand presentation across digital platforms, sales decks, and physical marketing collateral.",
    strategy: [
      "Designed a sleek, dark-luxury corporate visual brand guidelines manual.",
      "Produced executive videography and product showcase reels tailored for high-profile client proposals.",
      "Developed an interactive responsive web portfolio with integrated client inquiry tools."
    ],
    execution: [
      "Complete visual system redesign: Typography pairing, color palettes, vector brand marks, and digital guidelines.",
      "High-definition product & corporate photography shoots on location in Dubai.",
      "Frontend UI/UX design and development for corporate web properties."
    ],
    results: [
      "Elevated brand perception, resulting in 50% increase in inbound enterprise client proposals.",
      "Established unified design standards used across 12+ product lines and subsidiary entities.",
      "Increased digital portfolio dwell time by 3.2x with interactive media showcases."
    ],
    metrics: [
      { label: "Inbound Enquiries", value: "+50%", badge: "Enterprise" },
      { label: "Brand Dwell Time", value: "3.2x", badge: "Engagement" },
      { label: "Sub-Brands Aligned", value: "12+", badge: "Cohesive UI" },
      { label: "Client Approval", value: "100%", badge: "Benchmark" }
    ],
    tags: ["Brand Identity", "Corporate Video", "UI/UX Design", "Product Photography", "Strategy"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  }
];


