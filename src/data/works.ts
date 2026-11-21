import humay1 from "@/assets/images/humay-1.png";
import humay2 from "@/assets/images/humay-2.png";
import verori1 from "@/assets/images/verori-1.png";
import verori2 from "@/assets/images/verori-2.png";
import verori3 from "@/assets/images/verori-3.png";
import verori4 from "@/assets/images/verori-4.png";

export interface Work {
  title: string;
  slug: string;
  year: string;
  organization: string;
  description: string;
  tags: string[];
  images: [ImageMetadata, ...ImageMetadata[]];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;

  isPrivate?: boolean;
  role: string;
  timeline: string;
  challenge: string;
  solution: string;
  technicalDecisions?: { title: string; description: string }[];
  impact: string;
}

export const works: Work[] = [
  {
    title: "Verori",
    slug: "verori",
    year: "2026",
    role: "Creator & Full-Stack Engineer",
    timeline: "Nov 2026 - Present",
    isPrivate: false,
    liveUrl: "https://verori.app",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Polar.sh"],
    organization: "Open-Core SaaS",
    description:
      "An open-core client-approval SaaS providing timestamped, tamper-proof audit trails for freelance deliverables. Eliminates payment disputes and accelerates invoicing.",
    images: [verori1, verori2, verori3, verori4],
    featured: true,
    challenge:
      "Freelancers rely on email for deliverable sign-offs, which lacks cryptographic proof and enables client delays. This stalls invoicing and causes payment disputes. The technical constraint is delivering strict data isolation and auditability with zero client friction (no logins or onboarding).",
    solution:
      "Architected and shipped a full-stack SaaS replacing email threads with secure, tokenized approval portals.",
    technicalDecisions: [
      {
        title: "Zero-Friction Client Access",
        description:
          "Tokenized, single-use URLs requiring no client authentication, ensuring immediate access to deliverables.",
      },
      {
        title: "Direct-to-Storage Uploads",
        description:
          "Client-side uploads directly to Supabase Storage. Bypasses Vercel's 4.5MB serverless payload limits, enabling reliable 10MB+ file handling without execution timeouts.",
      },
      {
        title: "Atomic Quota Enforcement",
        description:
          "Replaced vulnerable COUNT(*) checks with a PostgreSQL SECURITY DEFINER function using row-level locking. Prevents race conditions during concurrent free-tier limit checks and credit deductions.",
      },
      {
        title: "Open-Core Architecture",
        description:
          "Public codebase demonstrating production-grade patterns, secured strictly via Supabase Row Level Security (RLS) and environment isolation, not code obscurity.",
      },
    ],
    impact:
      "Delivered a monetized, production-ready application. Demonstrates senior full-stack competency: balancing frictionless UX with strict security boundaries, optimizing Merchant-of-Record (Polar.sh) margins via strategic PAYG pricing, and writing race-condition-proof database logic. The codebase is open-source and actively maintained.",
  },
  {
    title: "Humay",
    slug: "humay",
    year: "2025 - 2026",
    role: "Full-Stack Engineer",
    timeline: "Mar 2025 - May 2026",
    isPrivate: true,
    tags: ["React", "TypeScript", "Kotlin", "Supabase", "PostgreSQL", "RLS"],
    organization: "Department of Agriculture VI - Philippines",
    description:
      "A secure, role-based data collection and analytics platform that replaced manual spreadsheet reporting for field workers and managers.",
    images: [humay1, humay2],
    featured: true,
    challenge:
      "Agricultural monitoring relied on fragmented tools like ODK Collect, which lacked built-in analytics. This forced administrators to manually export field data to Excel, causing significant delays between data collection and actionable insights. This disconnect delayed responses to critical issues like pest outbreaks and underperforming fields. Furthermore, field workers and managers required strict, secure separation of data.",
    solution:
      "I independently architected an integrated platform to eliminate manual data exports. I built a native Kotlin Android app for field workers to collect data with offline synchronization, paired with a React web dashboard for administrators to view automated analytics. On the backend, I designed the PostgreSQL schema and implemented complex Row Level Security (RLS) policies.",
    impact:
      "Digitized the entire data workflow, completely removing the reliance on external software and manual spreadsheets. The platform provided near real-time visibility into field conditions, drastically reducing the time between data collection and decision-making. The strict RLS architecture ensured data privacy while empowering administrators to identify emerging agricultural patterns and respond to issues faster.",
  },
];
