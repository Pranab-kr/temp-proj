export interface ServiceItem {
  id: string;
  brand: 'quickyit' | 'tanzzzx';
  category: string;
  categoryName: string;
  title: string;
  tagline: string;
  originalPrice: number;
  price: number;
  discount: string;
  priceLabel: string;
  turnaround: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  gallery?: string[];
  deliverables: string[];
  techStack?: string[];
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  brand: 'quickyit' | 'tanzzzx';
  count?: number;
}

export const CITIES = [
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', hub: 'Salt Lake Sector V / New Town', isDefault: true },
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', hub: 'BKC / Andheri West' },
  { id: 'delhi', name: 'Delhi NCR', state: 'Delhi', hub: 'Cyber City, Gurgaon / Noida' },
  { id: 'bangalore', name: 'Bengaluru', state: 'Karnataka', hub: 'Indiranagar / HSR Layout' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', hub: 'HITEC City' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', hub: 'Kharadi / Hinjewadi' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', hub: 'OMR' },
  { id: 'dubai', name: 'Dubai', state: 'UAE', hub: 'Downtown / Business Bay' },
  { id: 'london', name: 'London', state: 'UK', hub: 'Canary Wharf' },
  { id: 'singapore', name: 'Singapore', state: 'Singapore', hub: 'Marina Bay' },
];

export const QUICKYIT_CATEGORIES: Category[] = [
  { id: 'all', name: 'All Services', icon: 'grid', brand: 'quickyit' },
  { id: 'website', name: 'Website', icon: 'globe', brand: 'quickyit' },
  { id: 'ecommerce', name: 'E-commerce Website', icon: 'shopping-cart', brand: 'quickyit' },
  { id: 'android', name: 'Android App', icon: 'smartphone', brand: 'quickyit' },
  { id: 'ios', name: 'iOS App', icon: 'apple', brand: 'quickyit' },
  { id: 'erp', name: 'ERP Systems', icon: 'database', brand: 'quickyit' },
  { id: 'crm', name: 'CRM Solutions', icon: 'users', brand: 'quickyit' },
  { id: 'branding', name: 'Branding & Graphic', icon: 'palette', brand: 'quickyit' },
  { id: 'social_media', name: 'Social Media Management', icon: 'share-2', brand: 'quickyit' },
  { id: 'video', name: 'Video Production & Editing', icon: 'video', brand: 'quickyit' },
  { id: 'digital_marketing', name: 'Digital Marketing', icon: 'trending-up', brand: 'quickyit' },
  { id: 'paid_ads', name: 'Paid Ads', icon: 'target', brand: 'quickyit' },
  { id: 'seo', name: 'SEO Management', icon: 'search', brand: 'quickyit' },
  { id: 'lead_generation', name: 'Lead Generation', icon: 'zap', brand: 'quickyit' },
  { id: 'wedding_shoot', name: 'Wedding Shoot', icon: 'camera', brand: 'quickyit' },
  { id: '3d_product', name: '3D Product Animation', icon: 'box', brand: 'quickyit' },
  { id: 'motion_graphics', name: 'Motion Graphics', icon: 'film', brand: 'quickyit' },
  { id: 'vfx', name: 'VFX & CGI', icon: 'sparkles', brand: 'quickyit' },
];

export const TANZZZX_CATEGORIES: Category[] = [
  { id: 'tanzzzx_all', name: 'All Packages', icon: 'grid', brand: 'tanzzzx' },
  { id: 'walkthrough_3d', name: '3D Animation Walkthrough (2-3 Min)', icon: 'video', brand: 'tanzzzx' },
  { id: 'digital_brochure', name: 'Digital Brochure & 3D Plans', icon: 'book-open', brand: 'tanzzzx' },
  { id: 'physical_brochure', name: 'Physical Brochure & Print', icon: 'layers', brand: 'tanzzzx' },
  { id: 'ads_shoot', name: 'Real Estate Ads & Drone Shoot', icon: 'camera', brand: 'tanzzzx' },
  { id: 'total_package', name: 'Total Launch Package (All-in-One)', icon: 'award', brand: 'tanzzzx' },
];

export const SERVICES_DATA: ServiceItem[] = [
  // --- QUICKYIT SERVICES ---
  {
    id: 'ecom-01',
    brand: 'quickyit',
    category: 'ecommerce',
    categoryName: 'E-commerce Website',
    title: 'ECOMMERCE WEBSITE',
    tagline: 'Most elegant design; crafted as per your idea with instant checkout',
    originalPrice: 24999,
    price: 13999,
    discount: '45% OFF',
    priceLabel: 'Special price for you',
    turnaround: '48H - 4 Days',
    rating: 4.9,
    reviewsCount: 184,
    badge: '🔥 Bestseller',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
    description: 'High-converting e-commerce web application with lightning-fast catalog, cart, automated Razorpay/Stripe checkout, order tracking, and mobile responsiveness.',
    deliverables: [
      'Custom Modern UI/UX Design (Mobile-First)',
      'Product Catalog & Category Filtering System',
      'Instant One-Click Cart & Secure Checkout (UPI/Cards)',
      'Admin Dashboard for Orders, Inventory & Revenue',
      'Integrated WhatsApp Order Notifications',
      'Free SSL Certificate & 1-Year Domain Setup',
      'Speed Optimized (<1.2s load time)',
      'Free 30-Day Post-Launch Support & Minor Edits'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Shopify / Custom Node', 'Razorpay', 'PostgreSQL'],
    features: ['Instant Checkout', 'UPI & Cards', 'Inventory Hub', 'WhatsApp Bot']
  },
  {
    id: 'web-01',
    brand: 'quickyit',
    category: 'website',
    categoryName: 'Website',
    title: 'BUSINESS & CORPORATE WEBSITE',
    tagline: 'High-speed professional web presence engineered for maximum trust',
    originalPrice: 16999,
    price: 8999,
    discount: '47% OFF',
    priceLabel: 'Starting from ₹8,999',
    turnaround: '48 Hours Sprint',
    rating: 4.9,
    reviewsCount: 142,
    badge: '⚡ 48H Sprint',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    description: 'Ultra-fast business website designed to convert visitors into loyal clients. Includes lead capture forms, service showcases, team bios, and Google SEO setup.',
    deliverables: [
      '5 to 8 Custom Responsive Pages',
      'Interactive Consultation Booking Widget',
      'SEO Metadata & Google Search Console Indexing',
      'Blazing Fast Static/Dynamic Cloud Hosting',
      'Click-to-Call & Direct WhatsApp Floating Action',
      '100% Mobile & Tablet Precision Responsive'
    ],
    techStack: ['Astro / React', 'Tailwind CSS', 'Vercel / Cloudflare', 'Formspree'],
    features: ['48h Delivery', 'SEO Ready', 'WhatsApp Leads', 'Ultra Fast']
  },
  {
    id: 'app-android-01',
    brand: 'quickyit',
    category: 'android',
    categoryName: 'Android App',
    title: 'NATIVE ANDROID APPLICATION',
    tagline: 'Smooth, scalable Kotlin & Flutter apps published on Google Play Store',
    originalPrice: 38000,
    price: 21999,
    discount: '42% OFF',
    priceLabel: 'Starting from ₹21,999',
    turnaround: '7 - 12 Days',
    rating: 4.8,
    reviewsCount: 96,
    badge: '🚀 Play Store Ready',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
    description: 'Custom Android application with smooth animations, offline caching, push notifications, authentication, and complete Play Store publishing assistance.',
    deliverables: [
      'Complete Android APK & AAB Bundle',
      'Google Play Store Publishing & Approval Support',
      'Firebase Auth, Push Notifications & Cloud DB',
      'Payment Gateway Integration (Razorpay / Stripe)',
      'Rest API Backend & Admin Panel Access',
      '3 Months Bug-Fix Guarantee'
    ],
    techStack: ['Flutter / Kotlin', 'Firebase', 'Node.js', 'PostgreSQL'],
    features: ['Google Play Ready', 'Push Alerts', 'Offline Mode', 'Fast APIs']
  },
  {
    id: 'app-ios-01',
    brand: 'quickyit',
    category: 'ios',
    categoryName: 'iOS App',
    title: 'PREMIUM iOS APPLICATION',
    tagline: 'Sleek Swift & Flutter experiences designed for iPhone & iPad users',
    originalPrice: 45000,
    price: 26999,
    discount: '40% OFF',
    priceLabel: 'Starting from ₹26,999',
    turnaround: '10 - 15 Days',
    rating: 4.9,
    reviewsCount: 81,
    badge: '🍎 Apple App Store',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    description: 'High-end iOS application built strictly adhering to Apple Human Interface Guidelines. Fluid animations, biometric FaceID login, and Apple Pay readiness.',
    deliverables: [
      'Native SwiftUI / Flutter iOS Source Code',
      'App Store Connect Submission & Review Handling',
      'Apple Sign-In & FaceID / TouchID Integration',
      'In-App Purchases or Gateway Setup',
      'TestFlight Beta Testing Pipeline'
    ],
    techStack: ['SwiftUI', 'Flutter', 'Apple Push Services', 'Node.js'],
    features: ['App Store Submit', 'FaceID Auth', 'Apple Pay Ready', 'Fluid UI']
  },
  {
    id: 'erp-01',
    brand: 'quickyit',
    category: 'erp',
    categoryName: 'ERP Systems',
    title: 'ENTERPRISE RESOURCE PLANNING (ERP)',
    tagline: 'Centralized operational intelligence: inventory, billing, HR & payroll',
    originalPrice: 65000,
    price: 34999,
    discount: '46% OFF',
    priceLabel: 'Custom quote from ₹34,999',
    turnaround: '12 - 20 Days',
    rating: 4.9,
    reviewsCount: 67,
    badge: '🏢 Enterprise Grade',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    description: 'Tailor-made ERP software to automate your entire business workflow: multi-warehouse inventory, automated invoicing, staff attendance, payroll, and role-based access.',
    deliverables: [
      'Multi-Warehouse Inventory & Supply Chain Tracking',
      'Automated GST Billing, Invoices & Financial Reports',
      'Employee Attendance, Leaves & Payroll Module',
      'Multi-User Roles & Permissions (Staff, Manager, Admin)',
      'Custom Data Export (Excel, PDF) & Audit Logs',
      'Onboarding Training & 6-Month Maintenance'
    ],
    techStack: ['React / Next.js', 'Node.js / Go', 'PostgreSQL', 'Docker'],
    features: ['GST Invoicing', 'Inventory Sync', 'Role Security', 'Audit Trail']
  },
  {
    id: 'crm-01',
    brand: 'quickyit',
    category: 'crm',
    categoryName: 'CRM Solutions',
    title: 'SMART CRM & SALES AUTOMATION',
    tagline: 'Track leads, automate follow-ups, and boost sales team conversion',
    originalPrice: 32000,
    price: 17999,
    discount: '44% OFF',
    priceLabel: 'Starting from ₹17,999',
    turnaround: '5 - 7 Days',
    rating: 4.8,
    reviewsCount: 110,
    badge: '📈 3X Conversions',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80',
    description: 'Never miss a hot sales lead again. Auto-capture leads from WhatsApp, Meta Ads, Website forms, assign to team members, and automate WhatsApp drip reminders.',
    deliverables: [
      'Lead Pipeline Kanban Board (New, Contacted, Proposal, Won)',
      'Official WhatsApp Cloud API Automation & Templates',
      'Lead Auto-Distribution among Sales Executives',
      'Call Log Tracking & Follow-up Scheduling with Reminders',
      'Real-time Analytics Dashboard on Conversion Rates'
    ],
    techStack: ['React', 'Node.js', 'WhatsApp Cloud API', 'Supabase'],
    features: ['WhatsApp Automation', 'Kanban Board', 'Lead Scoring', 'Auto Assign']
  },
  {
    id: 'branding-01',
    brand: 'quickyit',
    category: 'branding',
    categoryName: 'Branding & Graphic',
    title: 'FULL BRAND IDENTITY & GRAPHIC SUITE',
    tagline: 'Distinctive logo, color tokens, brand guidelines & marketing collaterals',
    originalPrice: 14999,
    price: 6999,
    discount: '53% OFF',
    priceLabel: 'Special price for you',
    turnaround: '48 Hours',
    rating: 5.0,
    reviewsCount: 230,
    badge: '🎨 Creative Suite',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=80',
    description: 'Transform your business into an iconic brand. Full visual identity kit including 3 logo concepts, typography system, color palettes, business cards, letterheads, and social kits.',
    deliverables: [
      '3 High-Concept Logo Directions with Vector Source Files (AI/SVG/PNG)',
      'Comprehensive Brand Style Guide (Colors, Typography, Usage)',
      'Business Cards, Letterhead & Envelope Print-Ready Files',
      'Social Media Kit (Profile pictures, Banners, Highlight covers)',
      'Full Commercial Copyright Transfer'
    ],
    techStack: ['Adobe Illustrator', 'Figma', 'Photoshop', 'Vector AI'],
    features: ['3 Logo Concepts', 'Source Files', 'Full Copyright', '48H Turnaround']
  },
  {
    id: 'social-01',
    brand: 'quickyit',
    category: 'social_media',
    categoryName: 'Social Media Management',
    title: '30-DAY SOCIAL MEDIA ACCELERATOR',
    tagline: 'Consistent, viral reels, carousels, and high-engagement community growth',
    originalPrice: 19999,
    price: 9999,
    discount: '50% OFF',
    priceLabel: 'Starting from ₹9,999/mo',
    turnaround: 'Monthly Retainer',
    rating: 4.9,
    reviewsCount: 154,
    badge: '📱 Growth Engine',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    description: 'Done-for-you organic social media growth on Instagram, LinkedIn, and Facebook. Includes content calendar, trending reels, aesthetic carousel posts, and caption copywriting.',
    deliverables: [
      '15 Custom Designed Carousel / Static Posts per Month',
      '8 High-Retention Edited Reels with Captions & Audio sync',
      'High-Converting Caption Copywriting & Strategic Hashtags',
      'Story Planning & Daily Community Engagement Routine',
      'End-of-Month Performance & Audience Insights Report'
    ],
    features: ['15 Carousels', '8 Viral Reels', 'Story Kit', 'Monthly Analytics']
  },
  {
    id: 'video-01',
    brand: 'quickyit',
    category: 'video',
    categoryName: 'Video Production & Editing',
    title: 'CINEMATIC VIDEO EDITING & ADS PRODUCTION',
    tagline: 'Hook your audience in the first 3 seconds with studio-grade sound and cuts',
    originalPrice: 18000,
    price: 8999,
    discount: '50% OFF',
    priceLabel: 'Starting from ₹8,999',
    turnaround: '48 - 72 Hours',
    rating: 4.9,
    reviewsCount: 175,
    badge: '🎬 Studio Grade',
    image: '/placeholder3.jpeg',
    description: 'Transform raw video footage into dynamic commercials, YouTube videos, podcast clips, or TikTok/Reels with kinetic typography, sound effects, and color grading.',
    deliverables: [
      'Up to 5 Edited Short-Form Reels or 1 Long-Form Commercial',
      'Kinetic Subtitles & Dynamic Motion Graphic Callouts',
      'Hollywood-Grade Sound Design, SFX & Licensed Music',
      'DaVinci Resolve 4K HDR Color Grading',
      '2 Rounds of Iterative Revisions'
    ],
    techStack: ['Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    features: ['Kinetic Captions', '4K Color Grade', 'SFX & Music', 'Fast 48h Cut']
  },
  {
    id: 'mktg-01',
    brand: 'quickyit',
    category: 'digital_marketing',
    categoryName: 'Digital Marketing',
    title: '360° DIGITAL GROWTH & RETENTION ENGINE',
    tagline: 'End-to-end digital marketing blueprint to dominate your local market',
    originalPrice: 28000,
    price: 14999,
    discount: '46% OFF',
    priceLabel: 'Monthly Growth Package',
    turnaround: 'Weekly Deliverables',
    rating: 4.8,
    reviewsCount: 88,
    badge: '🚀 Complete Suite',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=80',
    description: 'Comprehensive online marketing strategy combining content, email automation, local SEO, Google My Business optimization, and omni-channel remarketing.',
    deliverables: [
      'Competitor & Local Market Positioning Analysis',
      'Google Business Profile (GMB) Optimization & Review Strategy',
      'Automated Email Welcome Sequences & Newsletter Campaigns',
      'Conversion Rate Optimization (CRO) on Landing Pages',
      'Bi-Weekly Strategy Reviews with Dedicated Account Lead'
    ],
    features: ['GMB Ranking', 'Email Drip', 'CRO Audit', 'Dedicated Manager']
  },
  {
    id: 'ads-01',
    brand: 'quickyit',
    category: 'paid_ads',
    categoryName: 'Paid Ads',
    title: 'PERFORMANCE PAID ADS (META & GOOGLE)',
    tagline: 'Laser-targeted Facebook, Instagram & Google Search campaigns with high ROAS',
    originalPrice: 22000,
    price: 11999,
    discount: '45% OFF',
    priceLabel: 'Starting from ₹11,999/mo',
    turnaround: 'Launch in 48 Hours',
    rating: 5.0,
    reviewsCount: 168,
    badge: '🎯 4X+ ROAS',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    description: 'Profitable ad campaigns built to generate instant leads, calls, and sales. We handle ad copy, high-CTR creatives, pixel setup, and A/B split testing.',
    deliverables: [
      'Meta (FB/IG) + Google Search/Shopping Campaign Architecture',
      'Creation of 6 High-CTR Ad Creatives (Images + Video Hooks)',
      'Meta Pixel & Google Tag Manager Conversion API Setup',
      'Audience Research (Custom Audiences, Lookalikes & Retargeting)',
      'Daily Bid Optimization & Budget Scaling'
    ],
    features: ['6 Ad Creatives', 'Meta Pixel CAPI', 'Daily Optimization', 'Weekly Reports']
  },
  {
    id: 'seo-01',
    brand: 'quickyit',
    category: 'seo',
    categoryName: 'SEO Management',
    title: 'ORGANIC SEO & GOOGLE TOP RANKINGS',
    tagline: 'Rank #1 for your high-intent local and national business keywords',
    originalPrice: 18000,
    price: 9999,
    discount: '44% OFF',
    priceLabel: 'Monthly retainer from ₹9,999',
    turnaround: 'Monthly Growth',
    rating: 4.9,
    reviewsCount: 92,
    badge: '🔍 Page 1 Ranking',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=800&auto=format&fit=crop&q=80',
    description: 'White-hat search engine optimization that drives consistent free organic buyer traffic from Google. Complete on-page, technical, and high-DA backlink building.',
    deliverables: [
      'In-Depth Keyword Research for High-Intent Commercial Queries',
      'Technical SEO Audit (Core Web Vitals, Schema Markup, Speed)',
      '4 High-Quality Keyword-Optimized Blog Posts / Service Pages',
      'High Domain Authority Local Backlink Building',
      'Monthly Keyword Ranking & Organic Traffic Reports'
    ],
    features: ['Keyword Audit', 'Core Web Vitals', 'High-DA Links', 'Monthly Report']
  },
  {
    id: 'lead-01',
    brand: 'quickyit',
    category: 'lead_generation',
    categoryName: 'Lead Generation',
    title: 'B2B & B2C HIGH-INTENT LEAD SPRINT',
    tagline: 'Direct verified phone & email inquiries delivered straight to your WhatsApp',
    originalPrice: 26000,
    price: 13999,
    discount: '46% OFF',
    priceLabel: 'Special price for you',
    turnaround: 'Instant Inquiries',
    rating: 4.9,
    reviewsCount: 138,
    badge: '⚡ Verified Leads',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80',
    description: 'Stop cold-calling. Receive pre-qualified inquiries from customers actively looking to buy your products or services in your targeted city or region.',
    deliverables: [
      'High-Converting Instant Lead Funnel / Landing Form',
      'Real-Time WhatsApp & SMS Lead Forwarding',
      'Lead Qualification Filtering (Budget & Urgency Filter)',
      'Lead Replacement Policy for Invalid Numbers',
      'CRM Integration to Manage Pipeline'
    ],
    features: ['Instant WhatsApp Alerts', 'Pre-qualified', 'Funnel Setup', 'Zero Spam']
  },
  {
    id: 'wedding-01',
    brand: 'quickyit',
    category: 'wedding_shoot',
    categoryName: 'Wedding Shoot',
    title: 'CINEMATIC WEDDING & EVENT FILM',
    tagline: 'Magical 4K candid photography, teaser reel & feature documentary',
    originalPrice: 48000,
    price: 24999,
    discount: '48% OFF',
    priceLabel: 'Packages from ₹24,999/day',
    turnaround: '3 - 7 Days Preview',
    rating: 5.0,
    reviewsCount: 147,
    badge: '💍 Pure Emotion',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    description: 'Capture your most cherished moments in breathtaking cinematic perfection. Includes dual 4K Sony/Canon cameras, gimbal movements, drone aerials, and instant Instagram reels.',
    deliverables: [
      'Dual Professional Cinematographer & Photographer Team',
      '4K Cinematic Teaser (60-90 sec for Instagram Reels)',
      'Full-Length Edited Ceremony Documentary Film (15-30 mins)',
      '150+ Color-Graded Candid Digital High-Res Photos',
      'Drone Aerial Drone Coverage of Venue & Procession',
      'Delivered in Luxury Cloud Gallery & Pen Drive'
    ],
    features: ['2 Cinematographers', '4K Drone Aerial', 'Instant Reel Cut', '150+ Candids']
  },
  {
    id: '3d-prod-01',
    brand: 'quickyit',
    category: '3d_product',
    categoryName: '3D Product Animation',
    title: '3D PRODUCT ANIMATION & COMMERCIALS',
    tagline: 'Hyper-realistic 3D product reveals, exploded views & packaging renders',
    originalPrice: 28000,
    price: 14999,
    discount: '46% OFF',
    priceLabel: 'Starting from ₹14,999',
    turnaround: '4 - 6 Days',
    rating: 4.9,
    reviewsCount: 94,
    badge: '🔮 Ultra Photoreal',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    description: 'Photorealistic 3D renders and animations that showcase your product features better than physical photography. Perfect for Amazon, website hero banners, and video ads.',
    deliverables: [
      'Custom 3D CAD / Polygonal Modeling of Product',
      'Realistic Texturing, Materials & Studio Lighting',
      '15-30 Second 4K 60FPS Product Showcase Video',
      '3 High-Resolution Transparent Still Renders for E-Commerce',
      'Dynamic Camera Moves, Liquid/Particle Simulations'
    ],
    techStack: ['Blender', 'Cinema 4D', 'Octane / Redshift', 'After Effects'],
    features: ['4K 60FPS Render', 'CAD Modeling', 'Exploded View', 'Studio Lighting']
  },
  {
    id: 'motion-01',
    brand: 'quickyit',
    category: 'motion_graphics',
    categoryName: 'Motion Graphics',
    title: 'EXPLAINER & 2D/3D MOTION GRAPHICS',
    tagline: 'Explain complex tech and products simply with fluid 60FPS animations',
    originalPrice: 19000,
    price: 9999,
    discount: '47% OFF',
    priceLabel: 'Starting from ₹9,999',
    turnaround: '3 - 5 Days',
    rating: 4.8,
    reviewsCount: 112,
    badge: '✨ Fluid 60FPS',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    description: 'Engaging animated explainer videos that break down how your SaaS, app, or service works. Includes professional scriptwriting, voiceover sync, and custom illustrations.',
    deliverables: [
      '30 to 60 Second Custom Vector Motion Graphics Video',
      'Professional Studio Voiceover (English / Hindi / Regional)',
      'Custom Character Illustrations & Isometric Scenes',
      'Kinetic Typography & Sound Effects Sync',
      'Delivered in 1080p & 4K Formats (16:9 & 9:16)'
    ],
    features: ['Script & Storyboard', 'Studio Voiceover', 'Custom Vector Art', '1080p/4K Formats']
  },
  {
    id: 'vfx-01',
    brand: 'quickyit',
    category: 'vfx',
    categoryName: 'VFX & CGI',
    title: 'CGI & VISUAL EFFECTS (VFX)',
    tagline: 'Hollywood-level chroma keying, CGI compositing & viral faux out-of-home (FOOH) ads',
    originalPrice: 35000,
    price: 18999,
    discount: '46% OFF',
    priceLabel: 'Special price for you',
    turnaround: '5 - 8 Days',
    rating: 4.9,
    reviewsCount: 76,
    badge: '💥 Viral CGI Ads',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=80',
    description: 'Create mind-bending viral CGI ads (like oversized products landing on city monuments) and professional visual effects compositing for commercials and music videos.',
    deliverables: [
      '3D Camera Tracking & Matchmoving on Real Footage',
      'Photorealistic CGI Compositing & Shadow Integration',
      'Chroma Key Green Screen Extraction & Environment Replacement',
      'Particle Simulations, Fire/Smoke/Water Effects',
      'Delivered in ProRes & H.264 formats'
    ],
    techStack: ['Houdini', 'Nuke', 'After Effects', 'Unreal Engine'],
    features: ['FOOH Viral CGI', '3D Camera Track', 'Matchmoving', 'Photoreal Comp']
  },

  // --- TANZZZX STUDIO SERVICES (Real Estate 3D Branding & Marketing) ---
  {
    id: 'tanzzzx-walkthrough-01',
    brand: 'tanzzzx',
    category: 'walkthrough_3d',
    categoryName: '3D Animation Walkthrough (2-3 Min)',
    title: '3D ARCHITECTURAL WALKTHROUGH (2-3 MIN)',
    tagline: 'Cinematic 4K walkthrough covering all project amenities, interiors & exteriors',
    originalPrice: 85000,
    price: 44999,
    discount: '47% OFF',
    priceLabel: 'Starting from ₹44,999',
    turnaround: '5 - 7 Days',
    rating: 5.0,
    reviewsCount: 73,
    badge: '🏢 Cinematic 4K',
    isPopular: true,
    image: '/placeholder2.jpeg',
    description: 'Showcase your real estate project before construction starts. Comprehensive 2-3 minute cinematic 3D walkthrough video covering swimming pool, clubhouse, rooftop, landscape, lobby, and sample flat interiors.',
    deliverables: [
      'Full 2 to 3-Minute 4K Cinematic Walkthrough Film',
      'Covers ALL Project Amenities (Clubhouse, Gym, Pool, Gardens, Kids Play Area)',
      'Exterior Aerial Drone-Perspective 3D Flyover and Street Views',
      'Realistic Day & Golden Hour / Night Architectural Lighting',
      'Human 3D Crowd, Cars & Lush Vegetation Scenery',
      'Professional Voiceover, Sound Effects & Emotional Background Music',
      'Vertical Reel Teasers (30s) for Instagram & WhatsApp'
    ],
    techStack: ['Unreal Engine 5.4', '3ds Max', 'Corona / V-Ray', 'DaVinci Resolve'],
    features: ['Covers All Amenities', '2-3 Min 4K Film', 'Realistic Day/Night', 'Instagram Cuts']
  },
  {
    id: 'tanzzzx-digital-01',
    brand: 'tanzzzx',
    category: 'digital_brochure',
    categoryName: 'Digital Brochure & 3D Plans',
    title: 'INTERACTIVE DIGITAL BROCHURE & 3D FLOOR PLANS',
    tagline: 'Modern interactive web brochure with 360° virtual tour & 3D floor cutaways',
    originalPrice: 32000,
    price: 16999,
    discount: '47% OFF',
    priceLabel: 'Starting from ₹16,999',
    turnaround: '3 - 5 Days',
    rating: 4.9,
    reviewsCount: 62,
    badge: '📱 Interactive 360°',
    image: '/placeholder.jpeg',
    description: 'Transform standard PDF brochures into an ultra-fast interactive mobile experience. Buyers can click through 3D floor plan cutouts, view 360° room panoramas, and book site visits instantly.',
    deliverables: [
      'Interactive Web Brochure (Works seamlessly on WhatsApp links)',
      '3D Isometric Floor Plan Cutaways (1BHK, 2BHK, 3BHK, Penthouse)',
      '360° Virtual Panorama Viewer for Sample Flat',
      'Instant "Schedule Site Visit" Lead Form connected to CRM',
      'Downloadable Optimized PDF Version for Quick Sharing'
    ],
    features: ['3D Isometric Plans', '360° Virtual Tour', 'WhatsApp Ready', 'Site Visit Leads']
  },
  {
    id: 'tanzzzx-physical-01',
    brand: 'tanzzzx',
    category: 'physical_brochure',
    categoryName: 'Physical Brochure & Print',
    title: 'LUXURY PHYSICAL BROCHURE & SALES COLLATERAL',
    tagline: 'High-end embossed brochures, site branding, hoardings & sales gallery print assets',
    originalPrice: 28000,
    price: 13999,
    discount: '50% OFF',
    priceLabel: 'Design & Print-Ready from ₹13,999',
    turnaround: '3 - 4 Days',
    rating: 4.9,
    reviewsCount: 54,
    badge: '💎 Premium Print',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80',
    description: 'Premium print collateral crafted to dazzle high-net-worth property buyers. Includes hardcover luxury brochure layouts, foil stamping specs, site hoarding banners, and sales lounge stands.',
    deliverables: [
      '12 to 24 Page Editorial Luxury Brochure Design (CMYK Print Ready)',
      'UV Spot & Gold/Silver Foil Stamping Print Specifications',
      'Large Scale Site Hoardings & Directional Signage Graphics',
      'Standees, Leaflets, and Site Visit Welcome Folder Design',
      'Direct Coordination with Commercial Print Vendors'
    ],
    features: ['12-24 Pages Luxury', 'Foil Stamping Specs', 'Site Hoardings', 'Vendor Ready']
  },
  {
    id: 'tanzzzx-ads-01',
    brand: 'tanzzzx',
    category: 'ads_shoot',
    categoryName: 'Real Estate Ads & Drone Shoot',
    title: 'REAL ESTATE SPECIFIC ADS & 4K DRONE SHOOT',
    tagline: 'Cinematic on-site drone aerials, founder/agent interview & lead-gen ad creatives',
    originalPrice: 42000,
    price: 21999,
    discount: '48% OFF',
    priceLabel: 'Starting from ₹21,999',
    turnaround: '3 - 5 Days',
    rating: 5.0,
    reviewsCount: 89,
    badge: '🚁 4K Drone Aerial',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80',
    description: 'High-production on-location video shoot for your property. Aerial 4K drone cinematography capturing neighborhood connectivity, nearby metro/highways, plus scripted ads with real estate anchors.',
    deliverables: [
      'Licensed 4K Drone Aerial Video Shoot of Site & Surrounding Infrastructure',
      'Anchor / Host-Led Site Tour & Sample Flat Presentation',
      '5 Real Estate Ads Formats specifically crafted for Meta & YouTube Ads',
      'High-CTR Ad Hooks ("Luxury 3BHK starting at ₹85L in Prime Location")',
      'All Raw Footage Provided in 4K'
    ],
    features: ['Licensed 4K Drone', 'Anchor Site Tour', '5 High-CTR Ad Cuts', 'Connectivity Map']
  },
  {
    id: 'tanzzzx-total-01',
    brand: 'tanzzzx',
    category: 'total_package',
    categoryName: 'Total Launch Package (All-in-One)',
    title: 'TOTAL REAL ESTATE LAUNCH SUITE (ALL-IN-ONE)',
    tagline: 'Complete 3D walkthrough + Digital brochure + Physical print + Drone shoot + Meta ads',
    originalPrice: 165000,
    price: 84999,
    discount: '49% OFF',
    priceLabel: 'Total Best Value Bundle',
    turnaround: '10 - 14 Days',
    rating: 5.0,
    reviewsCount: 45,
    badge: '🏆 Ultimate Launch',
    isPopular: true,
    image: '/placeholder2.jpeg',
    description: 'The definitive end-to-end launch package for real estate builders and developers. Includes full 3D animation walkthrough, interactive digital brochure, luxury print designs, 4K drone site shoot, and lead generation ad campaign setup.',
    deliverables: [
      '2-3 Minute 4K 3D Walkthrough Film (All Amenities + Aerial View)',
      'Interactive Digital Brochure with 360° Panoramas & WhatsApp Share',
      'Print-Ready 16-Page Luxury Brochure & Site Hoardings Suite',
      '4K On-Site Drone Shoot with Neighboring Connectivity Map',
      'Complete Meta & Google Ads Setup for Real Estate Buyer Leads',
      'Dedicated Real Estate Creative Director & 24/7 Call Support'
    ],
    techStack: ['Unreal Engine 5', 'Meta Real Estate Ads', 'Matterport / 360°', 'DaVinci 4K'],
    features: ['Everything Included', 'Save ₹80,000+', 'Lead Gen Campaign', 'VIP Director Support']
  }
];

export const OFFERS = [
  {
    id: 'off-1',
    brand: 'quickyit',
    tag: '⚡ QUICK COMMERCE SPRINT',
    title: 'FLAT 45% OFF ON ALL WEBSITES & APPS',
    description: 'Get your business live in 48 hours with free hosting, domain & WhatsApp leads automation.',
    code: 'QUICKY45',
    cta: 'Book Sprint Now',
    gradient: 'from-emerald-600 via-green-500 to-lime-500'
  },
  {
    id: 'off-2',
    brand: 'quickyit',
    tag: '🎁 LAUNCH SPECIAL',
    title: 'FREE LOGO & BRANDING WITH ANY ECOMMERCE STORE',
    description: 'Complete visual identity + high-speed store setup with integrated payment gateways.',
    code: 'BRANDFREE',
    cta: 'Claim Offer',
    gradient: 'from-blue-600 via-indigo-600 to-sky-500'
  },
  {
    id: 'off-3',
    brand: 'tanzzzx',
    tag: '🏢 TANZZZX STUDIO EXCLUSIVE',
    title: 'FREE 4K DRONE SHOOT WITH 3D WALKTHROUGH',
    description: 'Book a 2-3 min 3D architectural animation and receive a complimentary on-site drone shoot.',
    code: 'DRONETANZ',
    cta: 'Schedule Consultation',
    gradient: 'from-amber-600 via-yellow-600 to-orange-500'
  },
  {
    id: 'off-4',
    brand: 'tanzzzx',
    tag: '🏆 DEVELOPER LAUNCH SUITE',
    title: 'TOTAL LAUNCH BUNDLE: SAVE ₹80,000+',
    description: '3D Walkthrough + Digital Brochure + Luxury Print + Drone + Meta Ads setup.',
    code: 'BUILDERPRO',
    cta: 'Explore Package',
    gradient: 'from-slate-900 via-indigo-950 to-zinc-900'
  }
];
