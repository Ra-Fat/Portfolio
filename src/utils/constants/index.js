import { Languages } from "lucide-react";
import { javascript, typescript, html, css, reactjs, tailwind, nodejs, mongodb, git, figma, 
  postgres, mysql, nextjs, github, java, c, komplexcertificate, cplus, bootstrap , teaching, 
  aspireoverview, aspirepic, komplexProject, grandcineplex, hotelProject, portfolio,
fluttter,csharp,vercel, vite, game, komplexF, gameF, grandcineplexF, unifinder  } from "../../../assets";



const technologies = [
  {
    name: "HTML",
    icon: html,
    tag: "Language"
  },
  {
    name: "CSS",
    icon: css,
    tag: "Language"
  },
  {
    name: "JavaScript",
    icon: javascript,
    tag: "Language"
  },
  {
    name: "TypeScript",
    icon: typescript,
    tag: "Language"
  },
  {
    name: "React JS",
    icon: reactjs,
    tag: "Framework"
  },
  {
    name: "Tailwind",
    icon: tailwind,
    tag: "Framework"
  },
  {
    name: "Node JS",
    icon: nodejs,
    tag: "Runtime"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    tag: "Database"
  },
  {
    name: "Figma",
    icon: figma,
    tag: "Tool"
  },
  {
    name: "Git",
    icon: git,
    tag: "Tool"
  },
  {
    name: "GitHub",
    icon: github,
    tag: "Platform"
  },
  {
    name: "Next.js",
    icon: nextjs,
    tag: "Framework"
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    tag: "Database"
  },
  {
    name: "MySQL",
    icon: mysql,
    tag: "Database"
  },
  {
    name: "Java",
    icon: java,
    tag: "Language"
  },
  {
    name: "C",
    icon: c,
    tag: "Language"
  },
  {
    name: "C++",
    icon: cplus,
    tag: "Language"
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    tag: "Framework"
  },
  {
    name: "Flutter",
    icon: fluttter,
    tag: "Framework"
  },
  {
    name: "Vite",
    icon: vite,
    tag: "Tool"
  },
  
];


const ExperiencesContext = [
  {
    title: "Next-Gen Engagement",
    picture: teaching,
    date: "Aug 2025",
    description:
      "A community-driven program focused on sharing knowledge, mentoring junior students, building leadership skills, and applying theory through real-world projects and competitions.",
    tag: [
      "Teaching",
      "Web Design",
    ],
    pdf: "/Certi.pdf"
  },
  {
    title: "Project Competition",
    picture: komplexcertificate,
    date: "Sep 2025",
    description:
      "A project-based competition under the Next-Gen program where I contributed to team development and achieved second place.",
    tag: [
      "Komplex",
      "Khmer Education",
    ],
    pdf: "/Komplex.pdf"
  },
{
  title: "Aspire Program",
  picture: aspirepic,
  date: "Aug 2025",
  description:
    "A leadership and soft-skills program focused on communication, teamwork, confidence building, and personal growth.",
  tag: [
    "Soft Skill",
    "Leadership",
  ],
  pdf: "/cfaspireprogram.pdf"
}

];




const ProjectsContext = [
  {
    name: "KOMPLEX",
    description: "KOMPLEX is a free, interactive STEM learning platform for Cambodian high school students, offering curriculum-aligned lessons to improve understanding through engaging visuals and self-paced study.",
    languages: [
      "PostgreSQL",
      "Next.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "Docker",
      "Firebase"
    ],
    source_code_link: "https://github.com/KOMPLEX-KH/KOMPLEX.git",
    hostlink: "https://komplex.app/",
    image: komplexF,
    videodemo: "https://youtu.be/7lELfMt81No",
    year: "2025"
  },
  {
    name: "Grand Cineplex",
    description: "A comprehensive full-stack cinema management system for Cambodia's leading cinema chain. It features multi-role interfaces for customers, cashiers, and managers, enabling online bookings, seat selection, in-person transactions, and administrative management.",
    languages: [
      "Express.js",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    source_code_link: "https://github.com/RaksaOC/Grand-Cineplex.git",
    hostlink: "",
    image: grandcineplexF,
    videodemo: "https://youtu.be/ENPb3mJ1BhM",
    year: "2025"
  },
  {
    name: "Frost-Guard",
    description: "The Winter Siege is a tower defense strategy game where players defend their castle from waves of enemies in a magical, endless winter world. Players place and upgrade towers, manage resources, and plan strategically to survive increasingly difficult enemy waves.",
    languages:[
      "unity",
      "csharp",
      "animation",

    ],
    source_code_link: "https://github.com/Ra-Fat/Frost-Guard.git",
    hostlink: "",
    image: gameF,
    videodemo: "https://youtu.be/mIUvftuUees?si=D_0kMtdTyFWALKiv",
    year: "2025"
  },
  {
    name: "UniFinder",
    description: "An offline Flutter app helping Cambodian students, especially in rural areas, find suitable university majors using local JSON. Users answer questions to match majors, create personalized plans, and explore Phnom Penh universities and careers.",
    languages: [
      "Flutter",
      "Dart",
      "JSON",
      "Shared Preferences",
      "Local Storage"
    ],
    source_code_link: "https://github.com/Ra-Fat/UniFinder.git",
    hostlink: "",
    image: unifinder,
    videodemo: "https://youtu.be/luuqpryOJ3g",
    year: "2026"
  },
]



export { technologies, ExperiencesContext , ProjectsContext};