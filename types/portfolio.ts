export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Web" | "Backend" | "Mobile" | "AI" | "Game" | string;
  role: string;
  period: string;
  image?: string;
  description: string;
  fullDescription: string;
  tags: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured: boolean;
  highlights: string[];
  metrics?: string;
  techDetails?: {
    frontend?: string;
    backend?: string;
    database?: string;
    hardware?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge: string;
  category: "Leadership" | "Mentoring" | "Academic" | "Competition" | "Internship";
  description: string;
  achievements: string[];
  tags: string[];
  image?: string;
  imageCaption?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
}

export interface TechTool {
  name: string;
  category: "Languages" | "Frameworks & Web" | "Geospatial" | "AI & Hardware" | "Tools & DevOps";
  role: string;
  icon?: string; // Path file logo lokal di /public/icons/ (contoh: "/icons/react.svg")
}

export interface FocusArea {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface PersonalInfo {
  name: string;
  github: string;
  email: string;
  instagram?: string;
  linkedin?: string;
}
