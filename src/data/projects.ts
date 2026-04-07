import { Project } from "../types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
    title: "Pixel-Perfect Dashboard",
    category: "Frontend Development",
    description: "A comprehensive analytics dashboard built with pure CSS Grid and custom JavaScript components.",
    fullDescription: "This project was focused on creating a high-performance, responsive dashboard without relying on heavy UI libraries. The challenge was to maintain 60fps animations while handling large datasets in real-time.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tags: ["HTML5", "CSS Grid", "Vanilla JS", "D3.js"],
    githubUrl: "https://github.com/simhannk/pixel-perfect-dashboard",
    liveUrl: "https://dashboard-demo.simhannk.dev",
    challenges: [
      "Rendering 10,000+ data points without lag",
      "Implementing a complex drag-and-drop layout system",
      "Ensuring cross-browser compatibility for CSS Grid"
    ],
    solutions: [
      "Used Canvas for data visualization instead of SVG",
      "Implemented a custom virtual scrolling engine",
      "Created a robust polyfill strategy for older browsers"
    ],
    results: [
      "98/100 Lighthouse performance score",
      "Reduced initial bundle size by 40%",
      "Successfully deployed to 5 enterprise clients"
    ]
  },
  {
    id: "2",
    title: "Interactive Portfolio",
    category: "UI/UX Design & Dev",
    description: "A minimalist portfolio featuring smooth glassmorphism effects and performance-optimized animations.",
    fullDescription: "A personal branding project designed to showcase the intersection of design and engineering. The focus was on creating a unique 'glass' aesthetic that didn't compromise on accessibility or performance.",
    image: "https://picsum.photos/seed/minimal/800/600",
    tags: ["React", "Motion", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/simhannk/interactive-portfolio",
    liveUrl: "https://portfolio-demo.simhannk.dev",
    challenges: [
      "Balancing heavy blur effects with mobile performance",
      "Creating seamless page transitions",
      "Maintaining high contrast ratios for accessibility"
    ],
    solutions: [
      "Optimized backdrop-filter usage with hardware acceleration",
      "Used Framer Motion for declarative animations",
      "Implemented a custom color contrast checker in the build pipeline"
    ],
    results: [
      "Featured on several design inspiration galleries",
      "Average session duration increased by 150%",
      "Perfect accessibility score on mobile devices"
    ]
  },
  {
    id: "3",
    title: "E-Commerce Interface",
    category: "Web Application",
    description: "A lightning-fast shopping experience focused on accessibility and mobile-first responsive design.",
    fullDescription: "A complete overhaul of a legacy e-commerce frontend. The goal was to create a mobile-first experience that felt like a native app, with instant feedback and zero layout shifts.",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    tags: ["JavaScript", "Accessibility", "Responsive", "Next.js"],
    githubUrl: "https://github.com/simhannk/ecommerce-interface",
    liveUrl: "https://shop-demo.simhannk.dev",
    challenges: [
      "Achieving zero Cumulative Layout Shift (CLS)",
      "Implementing a complex multi-step checkout flow",
      "Optimizing image delivery for slow mobile networks"
    ],
    solutions: [
      "Used modern CSS aspect-ratio and image placeholders",
      "Implemented a state-machine based checkout logic",
      "Configured advanced image optimization with Next.js"
    ],
    results: [
      "Conversion rate increased by 25% on mobile",
      "0.1s Largest Contentful Paint (LCP)",
      "100% WCAG 2.1 AA compliance"
    ]
  }
];
