export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  impact: string;
  role: string;
  highlights: string[];
  github?: string;
  live?: string;
};

export const webProjects: Project[] = [
  {
    title: "Cowris",
    description:
      "Digital payments platform enabling secure currency exchange, P2P transfers, and multi-currency wallet management for users across Africa.",
    image: "/projects/cowrisweb.webp",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "$2M+ in monthly transaction volume",
    role: "Lead Fullstack Developer",
    highlights: [
      "Real-time exchange rate engine with multi-provider integration",
      "P2P transfer flow with KYC verification",
      "Multi-currency wallet management dashboard",
      "Transaction history with export capabilities",
    ],
    live: "https://www.cowris.com/",
  },
  {
    title: "Wakanda CRM",
    description:
      "Multi-tenant CRM platform for the Wakanda ecosystem, managing client relationships and business workflows with real-time updates and role-based access control.",
    image: "/projects/wakandacrm0.jpg",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "Streamlined client management for 500+ businesses",
    role: "Lead Fullstack Developer",
    highlights: [
      "Multi-tenant architecture with isolated workspaces",
      "Real-time dashboard with business analytics",
      "Role-based access control for teams of all sizes",
      "Integrated with Wakanda payment ecosystem",
    ],
    live: "https://app.wakanda-business.com/signin",
  },
  {
    title: "Wakanda Business",
    description:
      "B2B marketplace and business management platform connecting vendors, buyers, and service providers within the Wakanda digital ecosystem.",
    image: "/projects/wakandacrm.webp",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "Connecting 1,000+ businesses on one platform",
    role: "Fullstack Developer",
    highlights: [
      "Multi-vendor onboarding with profile verification",
      "Real-time order and inventory tracking",
      "Integrated messaging between buyers and sellers",
      "Mobile-responsive storefront builder",
    ],
    live: "https://www.wakanda-business.com/",
  },
  {
    title: "Pureworker",
    description:
      "Professional services marketplace connecting skilled workers with clients, featuring seamless booking, payments, and review systems.",
    image: "/projects/pureworkerweb.webp",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "Facilitating 200+ service bookings monthly",
    role: "Fullstack Developer",
    highlights: [
      "Worker profile and portfolio management",
      "Real-time booking and scheduling system",
      "Integrated payment processing",
      "Rating and review system for trust building",
    ],
    live: "https://pureworker.com/",
  },
  {
    title: "Nairaboom",
    description:
      "Fintech rewards and cashback platform allowing users to earn and redeem rewards on everyday purchases with a seamless web interface.",
    image: "/projects/nairaboomweb.webp",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "Processing thousands of daily reward transactions",
    role: "Fullstack Developer",
    highlights: [
      "Real-time reward tracking and redemption",
      "Merchant integration dashboard",
      "User wallet and transaction history",
      "Referral and loyalty program system",
    ],
    live: "https://nairaboom.ng/",
  },
  {
    title: "Crestbase",
    description:
      "Real estate web platform for property listings, management, and transactions, connecting buyers, sellers, and agents in a unified marketplace.",
    image: "/projects/mycrestbaseweb.webp",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "Listing 500+ active properties",
    role: "Fullstack Developer",
    highlights: [
      "Advanced property search with filter and sort",
      "Agent profiles and property management portal",
      "Virtual tour and media gallery per listing",
      "Inquiry and messaging system",
    ],
    live: "https://crestbasehq.com/",
  },
  {
    title: "Kudeeexpress",
    description:
      "Logistics and express delivery platform for tracking shipments, managing deliveries, and connecting couriers with customers in real time.",
    image: "/projects/kudeeexpressweb.webp",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "Powering express delivery for 300+ daily orders",
    role: "Fullstack Developer",
    highlights: [
      "Real-time shipment tracking with map integration",
      "Courier assignment and route optimization",
      "Customer order management portal",
      "Admin dashboard for operations oversight",
    ],
    live: "https://kudeeexpress.com/",
  },
  {
    title: "Saldams",
    description:
      "Logistics company web platform for freight and cargo management, enabling businesses to book, track, and manage shipments with ease.",
    image: "/projects/saldamsweb.webp",
    tags: ["Next.js", "Tailwind", "Node.js", "TypeScript"],
    impact: "Digitizing logistics operations end-to-end",
    role: "Fullstack Developer",
    highlights: [
      "Freight booking and pricing calculator",
      "Shipment tracking and status updates",
      "Client portal for order history",
      "Operations dashboard for dispatch team",
    ],
    live: "https://saldamslogistical.com/",
  },
  {
    title: "Edgetechies",
    description:
      "Tech agency website showcasing services, portfolio, and expertise with a modern, performance-optimized design built on Nuxt.js.",
    image: "/projects/edgetechiesm.jpg",
    tags: ["Vue/Nuxt.js", "SCSS"],
    impact: "Company's primary lead generation platform",
    role: "Frontend Developer",
    highlights: [
      "Server-side rendered pages for SEO optimization",
      "Animated showcase of agency services",
      "Portfolio section with filterable projects",
      "Contact form with lead capture integration",
    ],
    live: "http://edgetechies.com",
  },
  {
    title: "NFTHUB",
    description:
      "NFT marketplace for discovering, buying, and showcasing digital assets, built with a modern design system and Web3-ready architecture.",
    image: "/projects/nfthub.jpg",
    tags: ["React", "TypeScript", "Chakra UI", "Tailwind"],
    impact: "Marketplace platform for the growing NFT ecosystem",
    role: "Frontend Developer",
    highlights: [
      "NFT collection browser with advanced filtering",
      "Wallet connection and Web3 integration",
      "Creator profiles and minting showcase",
      "Responsive design with Chakra UI components",
    ],
    live: "https://nfthub-nine.vercel.app",
  },
  {
    title: "Wakanda Community",
    description:
      "Community-driven web platform for the Wakanda ecosystem enabling users to connect, share resources, and collaborate in a vibrant digital community.",
    image: "/projects/wakandacommunity.webp",
    tags: ["Vue/Nuxt.js", "SCSS"],
    impact: "Building community for Wakanda's digital users",
    role: "Frontend Developer",
    highlights: [
      "Community feed with posts and interactions",
      "User profiles and follow system",
      "Resource sharing and event listings",
      "Server-side rendering for fast initial loads",
    ],
    live: "https://wakanda.community/",
  },
  {
    title: "Movies Website",
    description:
      "Movie discovery app powered by a public film API, featuring search, ratings, and detailed movie information with a clean responsive UI.",
    image: "/projects/moviewebsitem.webp",
    tags: ["React", "Axios", "CSS"],
    impact: "Browse and explore thousands of movie titles",
    role: "Frontend Developer",
    highlights: [
      "Movie search with genre and year filters",
      "Detailed pages with cast, plot, and ratings",
      "Watchlist feature with local storage persistence",
      "Responsive design for mobile and desktop",
    ],
    live: "https://universalmovies.netlify.app/",
  },
  {
    title: "Payment Hoob",
    description:
      "Payment gateway showcase demonstrating seamless integration of a fintech payment API with a clean user-facing multi-step checkout interface.",
    image: "/projects/payment_hoob.webp",
    tags: ["React", "Axios", "CSS"],
    impact: "Demonstrating secure payment flow integration",
    role: "Frontend Developer",
    highlights: [
      "Payment flow UI with multi-step checkout",
      "API integration for transaction processing",
      "Form validation and error handling",
      "Mobile-first responsive layout",
    ],
  },
  {
    title: "Pharmacure",
    description:
      "Healthcare web platform for online pharmacy services, enabling users to browse medications, upload prescriptions, and manage healthcare orders.",
    image: "/projects/pharmacure.webp",
    tags: ["React", "Axios", "CSS"],
    impact: "Bridging patients with online pharmaceutical services",
    role: "Fullstack Developer",
    highlights: [
      "Medication catalog with search and filters",
      "Prescription upload and verification workflow",
      "User health profile and order tracking",
      "Responsive UI for accessibility across devices",
    ],
  },
];

export const mobileProjects: Project[] = [
  {
    title: "Cydene APP",
    description:
      "Cross-platform fintech mobile app built for Cydene Energy Services, processing secure financial transactions with enterprise-grade performance and 99.9% uptime.",
    image: "/projects/cydene.webp",
    tags: ["React Native", "C++", "Node.js", "Firebase"],
    impact: "$1M+ in transactions · 99.9% uptime",
    role: "Lead Mobile Developer",
    highlights: [
      "Biometric authentication and encrypted data storage",
      "Push notifications for real-time transaction alerts",
      "Offline-first architecture with background sync",
      "C++ native modules for high-performance processing",
    ],
    live: "https://play.google.com/store/apps/details?id=com.cydeneexpress",
  },
  {
    title: "Interpocket",
    description:
      "Personal finance and budgeting app helping users track expenses, set savings goals, and gain insights into their spending habits with smart analytics.",
    image: "/projects/interpocket.png",
    tags: ["React Native", "Node.js", "Firebase", "TypeScript"],
    impact: "Helping users take control of personal finances",
    role: "Lead Mobile Developer",
    highlights: [
      "Expense categorization and budget tracking",
      "Savings goals with milestone alerts",
      "Spending insights and monthly reports",
      "TypeScript codebase for long-term maintainability",
    ],
    live: "https://play.google.com/store/apps/details?id=com.interpocket.v1",
  },
  {
    title: "Cowris Mobile",
    description:
      "Mobile fintech app for digital currency exchange, P2P transfers, and multi-currency wallet management with a secure, intuitive interface.",
    image: "/projects/cowris_p.webp",
    tags: ["React Native", "Node.js", "PHP", "Firebase"],
    impact: "Enabling secure cross-border transfers for users",
    role: "Lead Mobile Developer",
    highlights: [
      "Multi-currency wallet with real-time exchange rates",
      "P2P transfers with beneficiary management",
      "Transaction history and export",
      "Biometric authentication for account security",
    ],
    live: "https://play.google.com/store/apps/details?id=com.cowris",
  },
  {
    title: "PowerUp",
    description:
      "Fitness and workout mobile app helping users track workouts, set goals, and monitor progress with personalized training plans and real-time analytics.",
    image: "/projects/powerup_web.webp",
    tags: ["React Native", "Node.js", "Firebase"],
    impact: "Empowering users to achieve fitness milestones",
    role: "Lead Mobile Developer",
    highlights: [
      "Workout tracking with full exercise library",
      "Progress analytics and achievement badges",
      "Push notifications for workout reminders",
      "Firebase real-time data sync across devices",
    ],
    live: "https://qrs.ly/d8chict",
  },
  {
    title: "Pureworker",
    description:
      "On-demand professional services app connecting clients with skilled workers for home services, repairs, and freelance tasks with real-time tracking.",
    image: "/projects/pureworker.webp",
    tags: ["React Native", "Node.js", "Firebase"],
    impact: "Facilitating 200+ service bookings monthly",
    role: "Mobile Developer",
    highlights: [
      "Geolocation-based worker discovery",
      "In-app booking, messaging, and payments",
      "Real-time job status tracking",
      "Rating and review system for quality assurance",
    ],
    live: "https://play.google.com/store/apps/details?id=com.pure_worker_app",
  },
  {
    title: "LiveEasy",
    description:
      "Lifestyle and home management app simplifying everyday tasks like bill payments, service bookings, and household management for urban users.",
    image: "/projects/liveeasy.webp",
    tags: ["React Native", "Django", "Firebase"],
    impact: "Streamlining everyday tasks for thousands of users",
    role: "Mobile Developer",
    highlights: [
      "Bill payment and service booking in one app",
      "Household task scheduler and reminders",
      "Django REST API for backend services",
      "Firebase push notifications for real-time updates",
    ],
    live: "https://play.google.com/store/apps/details?id=com.simplepark.live_easy",
  },
  {
    title: "Wakanda Business",
    description:
      "Mobile-first business management app for Wakanda ecosystem merchants, enabling product listings, order management, and customer interactions on the go.",
    image: "/projects/wakandabusiness.webp",
    tags: ["React Native", "Node.js", "C++", "Firebase"],
    impact: "Putting business management in merchants' pockets",
    role: "Mobile Developer",
    highlights: [
      "Product catalog with real-time inventory sync",
      "Order notifications and management dashboard",
      "In-app customer messaging",
      "C++ native modules for native performance",
    ],
    live: "https://play.google.com/store/apps/details?id=wakandabusiness.app&hl=en_US",
  },
  {
    title: "Crestbase",
    description:
      "Real estate mobile app for browsing property listings, scheduling viewings, and communicating with agents directly from your smartphone.",
    image: "/projects/crestbase.webp",
    tags: ["React Native", "Express.js", "MongoDB", "Firebase"],
    impact: "Connecting property seekers with 500+ listings",
    role: "Mobile Developer",
    highlights: [
      "Property search with map and list view",
      "Saved properties and comparison feature",
      "Agent contact and viewing scheduler",
      "Image gallery with virtual tour support",
    ],
    live: "https://play.google.com/store/apps/details?id=com.crestbase.crestbasemobileapp&pcampaignid=web_share",
  },
  {
    title: "Wakanda APP",
    description:
      "Super app for the Wakanda ecosystem offering payments, marketplace browsing, and community features in a single, unified mobile experience.",
    image: "/projects/wakandaapp.webp",
    tags: ["React Native", "Node.js", "Firebase"],
    impact: "Unified access to the full Wakanda ecosystem",
    role: "Mobile Developer",
    highlights: [
      "Integrated wallet and payment features",
      "Marketplace browsing with checkout flow",
      "Community feed and user interactions",
      "Deep-linked navigation for seamless experience",
    ],
    live: "https://play.google.com/store/apps/details?id=com.african_founders.Wakanda",
  },
  {
    title: "Puzzle Finance APP",
    description:
      "Modern fintech app for personal finance management, featuring budgeting tools, investment tracking, and insightful spending breakdowns.",
    image: "/projects/puzzlem.webp",
    tags: ["React Native", "Tailwind", "Node.js", "TypeScript"],
    impact: "Simplifying financial planning for users",
    role: "Mobile Developer",
    highlights: [
      "Budget planner with category breakdown",
      "Investment portfolio tracker",
      "Spending insights with visual charts",
      "TypeScript and clean architecture for scalability",
    ],
  },
  {
    title: "Ebimarket APP",
    description:
      "E-commerce mobile app for Africa's growing online marketplace, allowing buyers to discover products and merchants to manage storefronts on the go.",
    image: "/projects/ebimarketm.webp",
    tags: ["React Native", "Node.js", "Firebase"],
    impact: "Connecting buyers and sellers on a local marketplace",
    role: "Mobile Developer",
    highlights: [
      "Product discovery with search and categories",
      "Merchant storefront and product management",
      "Order tracking and push notifications",
      "Firebase for real-time inventory updates",
    ],
    live: "https://play.google.com/store/apps/details?id=com.ebimarketplaceapp.ebimarketplace",
  },
  {
    title: "Rudo APP",
    description:
      "Service and task management app enabling users to request, track, and review services from verified providers with a smooth in-app experience.",
    image: "/projects/Rudoapp.webp",
    tags: ["React Native", "Node.js", "Firebase"],
    impact: "Simplifying service requests for everyday users",
    role: "Mobile Developer",
    highlights: [
      "Service request and provider matching",
      "Real-time status tracking for jobs",
      "In-app messaging and notifications",
      "Rating system for service quality assurance",
    ],
  },
  {
    title: "ZeroWaste App",
    description:
      "Sustainability app helping users reduce waste through smart tracking, recycling guides, eco-challenges, and community impact reports.",
    image: "/projects/zerowaste.webp",
    tags: ["React Native", "Node.js", "Firebase", "TypeScript"],
    impact: "Encouraging sustainable habits in communities",
    role: "Mobile Developer",
    highlights: [
      "Waste tracking and reduction goal-setting",
      "Recycling guide with location-based services",
      "Eco-challenges with community leaderboards",
      "Carbon footprint calculator and insights",
    ],
  },
];

// Featured projects shown on the Software Engineering homepage.
// Reference by variable name — never by index — so reordering the arrays
// above cannot silently change what appears on the homepage.
const [cowris] = webProjects.filter((p) => p.title === "Cowris");
const [wakandaCRM] = webProjects.filter((p) => p.title === "Wakanda CRM");
const [crestbaseWeb] = webProjects.filter((p) => p.title === "Crestbase");
const [cydeneApp] = mobileProjects.filter((p) => p.title === "Cydene APP");
const [interpocket] = mobileProjects.filter((p) => p.title === "Interpocket");
const [wakandaApp] = mobileProjects.filter((p) => p.title === "Wakanda APP");

export const featuredProjects: Project[] = [
  cowris,
  cydeneApp,
  wakandaCRM,
  interpocket,
  crestbaseWeb,
  wakandaApp,
];
