import { Languages } from "lucide-react";
import { javascript, typescript, html, css, reactjs, tailwind, nodejs, mongodb, git, figma, 
  postgres, mysql, nextjs, github, java, c, komplexcertificate, cplus, bootstrap , teaching, 
  aspireoverview, aspirepic, komplexProject, grandcineplex, hotelProject, portfolio,
fluttter,csharp,vercel, vite,  } from "../assets";



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
    title: "Next-Gen Engagement Program ",
    picture: teaching,
    year: "2025",
    description: "lorem",
    tag:  [
      "Teaching",
      "Web Design",
    ],
    pdf: "/Certi.pdf"
  },
  {
    title: "Project Competition",
    picture: komplexcertificate,
    year: "2025",
    description: "lorem",
    tag:  [
      "Komplex",
      "Khmer Education",
    ],
    pdf: "/Komplex.pdf"
  },
  {
    title: "Aspire Program",
    picture: aspirepic,
    year: "2025",
    description: "lorem",
    tag:  [
      "Soft Skill",
      "Leadership",
      
    ],
    pdf: "/cfaspireprogram.pdf"
  },
  {
    title: "Aspire Program",
    picture: aspireoverview,
    year: "2025",
    description: "lorem",
    tag:  [
      "Soft Skill",
      "Short Program",
    ],
    pdf: "/aspireprogram.pdf"
  }
]


const ProjectsContext = [
  {
    name: "KOMPLEX",
    description: "Educational high school platform for khmer students to enhance their learning experience through interactive content, quizzes, and progress tracking.",
    languages:[
      "PostgreSQL",
      "nextjs",     
      "expressjs",
      "tailwind",
      "typescript",
      "docker",
      "PostgreSQL",
      "Firebase",
    ],
    source_code_link: "https://github.com/KOMPLEX-KH/KOMPLEX.git",
    hostlink: "https://komplex.app/",
    image: komplexProject,
    videodemo: "https://youtu.be/7lELfMt81No",
    year: "2025"
  },
  {
    name: "Grand Cineplex",
    description: "A website for Grand Cineplex, a leading cinema chain in Cambodia, providing movie listings, showtimes, and online ticket booking.",
    languages:[
      "expressjs",
      "PostgreSQL",
      "nextjs",
      "typescript",  
      "tailwind",
      
    ],
    source_code_link: "https://github.com/RaksaOC/Grand-Cineplex.git",
    hostlink: "https://github.com/RaksaOC/Grand-Cineplex.git",
    image: grandcineplex,
    videodemo: "https://youtu.be/ENPb3mJ1BhM",
    year: "2025"
  },
  {
    name: "Hotel Clone",
    description: "A hotel booking website clone that allows users to browse rooms, view details, and explore accommodation options with a modern responsive design.",
    languages:[
      "reactjs",
      "css",
      "vite",
    ],
    source_code_link: "https://github.com/Ra-Fat/Hotel-Clone.git",
    hostlink: "https://hotel-clone-rosy.vercel.app/",
    image: hotelProject,
    videodemo: "https://youtu.be/6oaGLV5qlos",
    year: "2024"
  },
  {
    name: "Current Portfolio",
    description: "My personal portfolio website showcasing my skills, projects, and experiences as a budding software developer.",
    languages:[
      "reactjs",
      "tailwind",
      "vercel",
      "3D Model",
    ],
    source_code_link: "https://github.com/Ra-Fat/Portfolio.git",
    hostlink: "https://rafat21.vercel.app/",
    image: portfolio,
    videodemo: "https://youtu.be/J3IdyxN8XT4",
    year: "2025"
  },
]



export { technologies, ExperiencesContext , ProjectsContext};