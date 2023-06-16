import { Project, Route, Social } from "@/types";
import { BrandGithub, BrandLinkedin, BrandTelegram, Mail } from "tabler-icons-react";

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/about",
    name: "About",
  },
];

export const socialList: Social[] = [
  {
    label: "Github",
    url: "https://github.com/kypexfly",
    icon: BrandGithub,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ricardochuzheng",
    icon: BrandLinkedin,
  },
  {
    label: "Telegram",
    url: "https://telegram.me/ricardo_chu",
    icon: BrandTelegram,
  },
  {
    label: "Email",
    url: "rczgraphics@live.com",
    icon: Mail,
  },
];

export const projectList: Project[] = [
  {
    title: "ricardochu.com",
    description: "Personal website, portfolio and blog. Next.js 13 with App Router API, SSR and ISR.",
    date: "2023",
    source: "https://github.com/kypexfly/ricardochu",
    demo: "https://www.ricardochu.com",
    tech: ["next", "typescript", "tailwind", "contentlayer"],
    highlight: true,
  },
  {
    title: "Cybertech Ecommerce",
    description: "Fullstack ecommerce app with React/Next and Stripe payment.",
    date: "2023",
    article: "/projects",
    source: "https://github.com/kypexfly/cybertech-ecommerce",
    demo: "https://cybertech-ecommerce.vercel.app",
    tech: ["react", "next", "stripe", "zustand", "ssr"],
    highlight: true,
  },
  {
    title: "CryptoView",
    description: "Explore news, manage, and gain insightful analysis on cryptocurrencies.",
    date: "2023",
    source: "https://github.com/kypexfly/cryptoview",
    demo: "https://cryptoview-plus.netlify.app",
    tech: ["react", "express", "plotly", "mongodb", "netlify-functions"],
    highlight: true,
  },
  {
    title: "To-Do App",
    description: "A To-Do App with task completion, sort options, and local storage.",
    date: "2022",
    article: "/projects",
    source: "https://github.com/kypexfly/todo-app-ts",
    demo: "https://react-todoapp-ts.netlify.app/",
    tech: ["react", "typescript", "tailwind", "zustand"],
    highlight: true,
  },
  {
    title: "Epic Seven Index",
    description: "Library of heroes and artifacts for the Epic Seven mobile game.",
    date: "2022",
    source: "https://github.com/kypexfly/epic7index",
    demo: "https://epic7index.netlify.app",
    tech: ["react, typescript", "tailwindcss"],
    highlight: true,
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion with more than 150 options.",
    date: "2023",
    source: "https://github.com/kypexfly/currency-converter",
    demo: "https://currency-rcz.vercel.app",
    tech: ["next", "shadcn-ui"],
    highlight: true,
  },
  {
    title: "frontendmentor.io challenges",
    description: "My solutions for Frontend Mentor challenges.",
    date: "2022",
    source: "https://github.com/kypexfly/frontend-mentor-challenges",
  },
  {
    title: "Economic Load Dispatch algorithm",
    description: "Algorithm based on Power Generation, Operation, and Control by Allen J. Wood.",
    date: "2022",
    source: "https://github.com/kypexfly/frontend-mentor-challenges",
    tech: ["python, matlab"],
  },
];

export const blogListMock: Project[] = [
  {
    title: " Resources for Learning Web Development",
    description: "Personal website, portfolio and blog. Next.js 13 with App Router API, SSR and ISR.",
    date: "April 22, 2023",
  },
  {
    title: "What I've learn from making projects",
    description: "Fullstack ecommerce app with React/Next and Stripe payment.",
    date: "Feburary 24, 2023",
  },
  {
    title: "Machine Learning Introduction with Python",
    description: "Explore news, manage, and gain insightful analysis on cryptocurrencies.",
    date: "December 31, 2022",
  },
  {
    title: "My first internet hobby",
    description: "A To-Do App with task completion, sort options, and local storage.",
    date: "October 12, 2022",
  },
  {
    title: "Good practices in React.js",
    description: "Library of heroes and artifacts for the Epic Seven mobile game.",
    date: "July 01, 2022",
  },
];
