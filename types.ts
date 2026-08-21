import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface TechSkill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  level: number; // 1-100
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectLinks {
  live: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
}

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  challenges: ProjectChallenge[];
  type: 'E-commerce' | 'AI Tool' | 'Web App';
  links: ProjectLinks;
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  location: string;
}