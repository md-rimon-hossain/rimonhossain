export interface ProjectSlideImage {
  url: string;
  title: string;
  subtitle?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  projectType: string;
  role: string;
  status: string;
  websiteUrl: string;
  shortDescription: string;
  images: ProjectSlideImage[];
  techStack: string[];
}
