import humay1 from "@/assets/images/humay-1.png";
import humay2 from "@/assets/images/humay-2.png";
import verori1 from "@/assets/images/verori-1.png";
import verori2 from "@/assets/images/verori-2.png";

export interface Work {
  title: string;
  slug: string;
  year: string;
  organization: string;
  description: string;
  tags: string[];
  images: [ImageMetadata, ImageMetadata];
  featured?: boolean;

  isPrivate?: boolean;
  role: string;
  timeline: string;
  challenge: string;
  solution: string;
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
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    organization: "Personal Project",
    description: "A minimalist client-approval portal that provides a permanent, timestamped record for every deliverable so freelancers can invoice faster.",
    images: [verori1, verori2],
    featured: true,
    challenge:
      "Freelancers and consultants lose weeks of billable time chasing clients for formal sign-offs. When relying on email threads, there is no proof of delivery or approval. This 'ghosting' phenomenon delays invoicing, stalls project kickoffs, and creates payment disputes when clients claim they never reviewed the work.",
    solution:
      "I independently designed and built a production-ready SaaS application that replaces the messy email thread with a single, secure link. To eliminate client friction, I implemented tokenized access so clients never have to create an account. The platform tracks every view and approval with strict timestamps. Under the hood, I architected the app using Next.js 16 (App Router, Server Actions, PPR) and Supabase, enforcing strict multi-tenant Row Level Security (RLS) policies and signed URLs for private file storage.",
    impact:
      "Shipped a fully functional, open-source MVP that gives freelancers the exact paper trail they need to invoice immediately. The project demonstrates deep expertise in modern full-stack architecture, secure data isolation, and zero-friction UX design. It is currently live in Public Beta and available for free to the freelance community."
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
    description: "A secure, role-based data collection and analytics platform that replaced manual spreadsheet reporting for field workers and managers.",
    images: [humay1, humay2],
    featured: true,
    challenge:
      "Agricultural monitoring relied on fragmented tools like ODK Collect, which lacked built-in analytics. This forced administrators to manually export field data to Excel, causing significant delays between data collection and actionable insights. This disconnect delayed responses to critical issues like pest outbreaks and underperforming fields. Furthermore, field workers and managers required strict, secure separation of data.",
    solution:
      "I independently architected an integrated platform to eliminate manual data exports. I built a native Kotlin Android app for field workers to collect data with offline synchronization, paired with a React web dashboard for administrators to view automated analytics. On the backend, I designed the PostgreSQL schema and implemented complex Row Level Security (RLS) policies.",
    impact:
      "Digitized the entire data workflow, completely removing the reliance on external software and manual spreadsheets. The platform provided near real-time visibility into field conditions, drastically reducing the time between data collection and decision-making. The strict RLS architecture ensured data privacy while empowering administrators to identify emerging agricultural patterns and respond to issues faster."
  },
];
