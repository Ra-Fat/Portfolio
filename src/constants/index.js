import { Languages } from "lucide-react";
import { javascript, typescript, html, css, reactjs, tailwind, nodejs, mongodb, git, figma, postgres, mysql, nextjs, github, java, c,komplexcertificate, cplus, bootstrap , teaching, aspireoverview, aspirepic, komplexProject, grandcineplex, hotelProject, portfolio } from "../assets";



const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  }
];

const ExperiencesContext = [
  {
    title: "Next-Gen Engagement Program ",
    picture: komplexcertificate,
    year: "2025",
    description: "lorem",
    tag:  [
      "Teaching",
      "Trainer",
    ],
    pdf: "/Komplex.pdf"
  },
  {
    title: "Project Competition",
    picture: teaching,
    year: "2025",
    description: "lorem",
    tag:  [
      "Komplex",
      "Khmer Education",
    ],
    pdf: "/Certi.pdf"
  },
  {
    title: "Aspire Program",
    picture: aspirepic,
    year: "2025",
    description: "lorem",
    tag:  [
      "Soft Skill",
      "Short Program",
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
      "typescript",
      "nextjs",
      "tailwind",
      "expressjs",
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
      "typescript",
      "nextjs",
      "tailwind",
      "expressjs",
      "PostgreSQL",
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
      "vercel",
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