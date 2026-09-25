export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Fullstack / WebGIS" | "Fullstack / Web" | "AI & Systems" | "Backend" | "IoT & Vision" | "Mobile" | "Frontend / Web";
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
  category: "Leadership" | "Mentoring" | "Academic" | "Competition";
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

export interface PersonalInfo {
  name: string;
  nickname: string;
  role: string;
  institution: string;
  faculty: string;
  semester: string;
  location: string;
  bio: string;
  status: string;
  github: string;
  email: string;
  linkedin: string;
}
