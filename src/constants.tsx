import { Github, Linkedin, Globe, Mail, Phone } from "lucide-react";
import { SocialLink, Project, TechSkill, Education } from "./types";

// Glassmorphism Color Palette
export const COLORS = {
  // Primary accent - Vivid Cyan
  primary: "#06d6a0",
  // Secondary accent - Electric Violet
  secondary: "#8338ec",
  // Tertiary accent - Hot Pink
  tertiary: "#ff006e",
  // Warm accent
  warm: "#fb5607",

  // Glass surfaces
  glass: {
    bg: "rgba(255, 255, 255, 0.05)",
    bgHover: "rgba(255, 255, 255, 0.1)",
    border: "rgba(255, 255, 255, 0.1)",
    borderHover: "rgba(255, 255, 255, 0.2)",
    strong: "rgba(255, 255, 255, 0.12)",
  },

  // Background
  background: {
    main: "#0a0a1a",
    section: "rgba(10, 10, 30, 0.6)",
    card: "rgba(255, 255, 255, 0.06)",
    button: "rgba(255, 255, 255, 0.08)",
  },

  // Text
  text: {
    heading: "#f0f0ff",
    subheading: "#c8c8e0",
    body: "#9898b8",
    meta: "#6868a0",
    light: "#e0e0f0",
  },

  // Gradients
  gradient: {
    primary: "linear-gradient(135deg, #06d6a0, #8338ec)",
    secondary: "linear-gradient(135deg, #8338ec, #ff006e)",
    warm: "linear-gradient(135deg, #ff006e, #fb5607)",
    hero: "linear-gradient(135deg, rgba(6, 214, 160, 0.15), rgba(131, 56, 236, 0.15), rgba(255, 0, 110, 0.1))",
    text: "linear-gradient(90deg, #06d6a0, #8338ec, #ff006e)",
  },
};

export const PERSONAL_INFO = {
  name: "Rimon Hossain",
  role: "MERN Full Stack Developer",
  email: "rimonhossen333@gmail.com",
  phone: "01622422801",
  location: "Bairachir Char, Daulotpur, Kushtia",
  bio: "I am a passionate MERN stack developer with 2 years of experience building scalable web applications. I specialize in Next.js, TypeScript, and Generative AI integration. I love tackling complex problems, from optimizing frontend performance to securing backend architectures.",
  profileImage: "https://github.com/md-rimon-hossain.png",
  resumeUrl: "/resume.pdf",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/md-rimon-hossain",
    icon: Github,
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/md-rimon-hossain",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/rimonhossain123",
    icon: Globe,
    color: "hover:text-green-400",
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Kushtia Polytechnic Institute",
    degree: "Diploma in Computer Science & Technology",
    year: "Ongoing",
    location: "Kushtia",
  },
  {
    institution: "Boiragir Chair High School",
    degree: "SSC",
    year: "2022",
    location: "Kushtia",
  },
];

export const SKILLS: TechSkill[] = [
  { name: "JavaScript (ES6+)", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "React.js", category: "Frontend", level: 95 },
  { name: "Next.js", category: "Frontend", level: 92 },
  { name: "Redux Toolkit", category: "Frontend", level: 88 },
  { name: "Tailwind CSS", category: "Frontend", level: 98 },
  { name: "Framer Motion", category: "Frontend", level: 80 },
  { name: "Node.js", category: "Backend", level: 88 },
  { name: "Express.js", category: "Backend", level: 90 },
  { name: "MongoDB", category: "Database", level: 85 },
  { name: "Mongoose", category: "Database", level: 85 },
  { name: "Git & GitHub", category: "Tools", level: 90 },
  { name: "Google Gemini AI", category: "Tools", level: 85 },
  { name: "VPS Hosting (Linux)", category: "Tools", level: 80 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Design Selling Platform",
    type: "E-commerce",
    shortDescription:
      "A full-stack marketplace for digital design assets with secure payments.",
    fullDescription:
      "A robust e-commerce platform where designers can sell their work and customers can purchase digital assets securely. Features role-based access control (Admin, Super Admin, Customer) and secure file delivery.",
    techStack: ["MERN Stack", "Stripe", "Redux Toolkit", "JWT Auth"],
    image: "/assets/seling-design.png",
    links: {
      live: "https://selling-porfolio-design-frontend.vercel.app/",
      githubFrontend:
        "https://github.com/md-rimon-hossain/Selling-porfolio-design-frontend",
      githubBackend:
        "https://github.com/md-rimon-hossain/Selling-porfolio-design-backend",
    },
    challenges: [
      {
        title: "Payment Integration",
        description:
          "Integrating Stripe for secure transactions while handling webhooks to ensure database consistency after payment success.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Implementing a complex permission system for multiple user roles (Admin, Super Admin, Customer) using JWT and Next.js middleware.",
      },
      {
        title: "File Security",
        description:
          "Ensuring that original high-resolution design files are only accessible after verified purchase.",
      },
    ],
  },
  {
    id: 2,
    title: "Metaboost AI (Metadata Generator)",
    type: "AI Tool",
    shortDescription:
      "An AI tool for generating image metadata in batches using Gemini API.",
    fullDescription:
      "A sophisticated tool designed for photographers and marketers to generate titles, descriptions, keywords, and categories for images using Google's Gemini AI. The system is optimized for cost and performance, allowing users to bring their own API keys.",
    techStack: ["Next.js", "Gemini AI", "TypeScript", "Tailwind CSS"],
    image: "/assets/metadata-genarator-app.png",
    links: {
      live: "https://metaboostai.app",
      github: "https://github.com/md-rimon-hossain/metadata-generator-pro",
    },
    challenges: [
      {
        title: "Rate Limiting & Free Tier Optimization",
        description:
          "Processing 40+ images would exhaust the free tier instantly. I implemented a batch processing system that sends images in controlled groups to manage quota.",
      },
      {
        title: "Client-Side AI Handling",
        description:
          "To reduce load on the VPS and allow scalability, I architected the solution so users provide their own API keys, and the heavy lifting is done on the frontend securely.",
      },
      {
        title: "Efficient Prompt Engineering",
        description:
          "Created complex system instructions to ensure Gemini returns strict JSON formats for seamless UI integration.",
      },
    ],
  },
];
