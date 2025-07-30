export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  details: string;
}

export const projects: Project[] = [
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "A responsive weather application with real-time data",
    thumbnail: "https://placehold.co/400x300/0ea5e9/ffffff?text=Weather+App",
    images: [
      "https://placehold.co/800x600/0ea5e9/ffffff?text=Weather+Dashboard",
      "https://placehold.co/800x600/0284c7/ffffff?text=Weather+Forecast",
    ],
    technologies: ["React", "API Integration", "CSS Grid"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details:
      "Built a fully responsive weather dashboard that displays current weather conditions and 5-day forecasts. Integrated with OpenWeatherMap API for real-time data. Features include city search, unit conversion, and local storage for favorite locations.",
  },
  {
    id: "task-manager",
    title: "Task Management System",
    description: "Full-stack task management application with authentication",
    thumbnail: "https://placehold.co/400x300/8b5cf6/ffffff?text=Task+Manager",
    images: [
      "https://placehold.co/800x600/8b5cf6/ffffff?text=Task+Dashboard",
      "https://placehold.co/800x600/7c3aed/ffffff?text=Project+Board",
    ],
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details:
      "Developed a comprehensive task management system with user authentication, project organization, and team collaboration features. Implemented drag-and-drop functionality, real-time updates, and email notifications.",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "Personal portfolio showcasing web development projects",
    thumbnail: "https://placehold.co/400x300/10b981/ffffff?text=Portfolio",
    images: [
      "https://placehold.co/800x600/10b981/ffffff?text=Portfolio+Home",
      "https://placehold.co/800x600/059669/ffffff?text=Project+Gallery",
    ],
    technologies: ["React", "CSS3", "React Router"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details:
      "Created a modern, responsive portfolio website to showcase web development projects. Features smooth animations, optimized performance, and a clean, professional design.",
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Platform",
    description: "Online store with shopping cart and payment integration",
    thumbnail: "https://placehold.co/400x300/f59e0b/ffffff?text=E-Commerce",
    images: [
      "https://placehold.co/800x600/f59e0b/ffffff?text=Store+Front",
      "https://placehold.co/800x600/d97706/ffffff?text=Shopping+Cart",
    ],
    technologies: ["React", "Redux", "Stripe API", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    details:
      "Built a full-featured e-commerce platform with product catalog, shopping cart, user reviews, and secure payment processing. Implemented advanced filtering, search functionality, and order tracking.",
  },
];
