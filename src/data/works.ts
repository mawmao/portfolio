import humay1 from "@/assets/images/humay-1.png";
import humay2 from "@/assets/images/humay-2.png";
import pcahto1 from "@/assets/images/pcahto-1.png";
import pcahto2 from "@/assets/images/pcahto-2.png";

export interface Work {
  title: string;
  slug: string;
  year: string;
  organization: string;
  description: string;
  tags: string[];
  images: [ImageMetadata, ImageMetadata];
  featured?: boolean;

  role: string;
  timeline: string;
  challenge: string;
  solution: string;
  impact: string;
}

export const works: Work[] = [
  {
    title: "Humay",
    slug: "humay",
    year: "2025 - 2026",
    role: "Full-Stack Engineer",
    timeline: "March 2025 - May 2026",
    tags: ["React", "TypeScript", "Kotlin", "Supabase", "PostgreSQL", "RLS"],
    organization: "Department of Agriculture VI - Philippines",
    description: "A secure, role-based data collection and analytics platform that replaced manual spreadsheet reporting for field workers and managers.",
    images: [humay1, humay2],
    featured: true,
    challenge: "The agency relied on fragmented, manual spreadsheets for field data collection, which was prone to human error and lacked centralized security. They required a strict role-based access system where field workers could only view their own submissions, while managers needed full access to analytics.",
    solution: "I independently architected a full-stack platform using React/TypeScript for the web dashboard and Kotlin for the native Android mobile app. On the backend, I designed the PostgreSQL schema and implemented complex Row Level Security (RLS) policies, including a security definer function to prevent infinite recursion in database queries.",
    impact: "Successfully digitized manual workflows, providing the agency with a centralized, secure system. The RLS architecture ensured strict data privacy, while the analytics dashboard gave managers real-time visibility into field operations without needing to manually consolidate spreadsheets."
  },
  {
    title: "PCAHTO",
    slug: "pcahto",
    year: "2026",
    role: "Web Developer Intern",
    timeline: "Jan 2026 - April 2026",
    tags: ["Astro", "React", "Supabase", "Tailwind CSS", "TypeScript"],
    organization: "Iloilo Provincial Culture, Arts, History and Tourism Office",
    description: "An SEO-optimized public website paired with a custom CMS, allowing non-technical staff to easily manage provincial tourist data.",
    images: [pcahto2, pcahto1],
    featured: true,
    challenge: "The tourism office lacked a modern digital presence and required a highly performant, SEO-optimized public site to attract tourists. Simultaneously, they needed a backend system that allowed non-technical staff to update content without relying on a developer for every change.",
    solution: "Collaborating with a UI designer and a data manager, I built the public-facing site using Astro and React to ensure lightning-fast load times and excellent SEO. For the backend, I implemented Supabase Auth and structured the database to power a custom CMS, allowing staff to easily upload media and manage tourist data.",
    impact: "Delivered a polished, high-performance public portal that significantly improved the province's digital presence. The custom CMS completely removed the developer bottleneck for content updates, empowering the data manager to independently maintain the site."
  },
];
