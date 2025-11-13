import {
  mobile,
  backend,
  creator,
  web,
  smartolt,
  zequenze,
  gaiia,
  powerbi,
  canva,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  belleza,
  teleperformance,
  gestcol,
  carrent,
  jobit,
  tripguide,
  threejs,
  botmaker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Entry Specialist",
    icon: web,
  },
  {
    title: "Data Entry Specialist",
    icon: mobile,
  },
  {
    title: "Junior Data Analyst",
    icon: backend,
  },
  {
    title: "Administrative & CRM Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Botmaker",
    icon: botmaker,
  },
  {
    name: "Gaiia",
    icon: gaiia,
  },
  {
    name: "Smartolt",
    icon: smartolt,
  },
  {
    name: "Zequenze",
    icon: zequenze,
  },
  {
    name: "React JS",
    icon: powerbi,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "Tailwind gaiia",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Customer Expert OPS I",
    company_name: "TP",
    icon: teleperformance,
    iconBg: "#cb7169",
    date: "Sept 2025 - Oct 2025",
    points: [
      "Handled customer inquiries with professionalism and efficiency through corporate applications.",
      "Resolved service requests promptly, ensuring customer satisfaction and operational accuracy.",
      "Demonstrated strong adaptability, empathy, and communication in every interaction.",
      "Recognized for reliability, analytical thinking, and a proactive learning attitude.",
    ],
  },
  {
    title: "Online Advisor",
    company_name: "Gestcol S.A.S.",
    icon: gestcol,
    iconBg: "#1A0F1A",
    date: "Sept 2024 - Mar 2025",
    points: [
      "Provided real-time customer support, resolving technical issues and processing service reports.",
      "Led digital sales efforts, consistently exceeding daily goals and optimizing conversions.",
      "Managed password updates and remote troubleshooting in coordination with technical teams.",
      "Utilized platforms like Botmaker, Gaiia, SmartOlt, and Zequenze for client data management.",
    ],
  },
  {
    title: "Community Manager & Sales Executive",
    company_name: " Belleza Store Medellín",
    icon: belleza,
    iconBg: "#3D0C01",
    date: "Feb 2021 - Jun 2023",
    points: [
      "Created and managed digital marketing campaigns across social media platforms.",
      "Designed visual content and copywriting materials to enhance brand visibility.",
      "Delivered exceptional customer service through chat channels, increasing loyalty and retention.",
      "Improved engagement rates by 40% through data-driven content and personalized interaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "gaiia",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };