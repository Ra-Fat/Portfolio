import { Languages, Subtitles } from "lucide-react";
import { javascript, typescript, html, css, reactjs, tailwind, nodejs, mongodb, git, figma, 
  postgres, mysql, nextjs, github, java, c, komplexcertificate, cplus, bootstrap , teaching, 
  aspireoverview, aspirepic, komplexProject, grandcineplex,
fluttter,csharp,vercel, vite, game, komplexF, gameF, grandcineplexF, unifinder,
  firstImageKomplex, secondImageKomplex, thirdImageKomplex, fourthImageKomplex, fifthImageKomplex, sixthImageKomplex,
  firstImageGrandcineplex, secondImageGrandcineplex, thirdImageGrandcineplex, fourthImageGrandcineplex,
  fifthImageGrandcineplex, sixthImageGrandcineplex,
  firstImageUnifinder, secondImageUnifinder, thirdImageUnifinder, fourthImageUnifinder, fifthImageUnifinder,
  sixthImageUnifinder, seventhImageUnifinder, eighthImageUnifinder, ninthImageUnifinder, tenthImageUnifinder,
  eleventhImageUnifinder, twelfthImageUnifinder, firstImageGame, secondImageGame, thirdImageGame, fourthImageGame, fifthImageGame 
, unity, threejs, postman, notion, expressjs } from '../../../assets';

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Home, User, Code, Briefcase, FolderKanban, Mail } from 'lucide-react';

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
  {    name: "C#",
    icon: csharp,
    tag: "Language" },
  {
    name: "Vercel",
    icon: vercel,
    tag: "Platform"
  },
  {
    name: "Unity",
    icon: unity,
    tag: "Platform"
  },
  {
    name: "Three.js",
    icon: threejs,
    tag: "Library"
  },
  {
    name: "Postman",
    icon: postman,
    tag: "Tool"
  },
  {
    name: "Notion",
    icon: notion,
    tag: "Tool"
  },
  {
    name: "Express.js",
    icon: expressjs,
    tag: "Framework"
  },
];


const primaryTechStack = [
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
    name: "Flutter",
    icon: fluttter,
    tag: "Framework"
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
]


const ExperiencesContext = [
  {
    title: "Next-Gen Engagement",
    Subtitles: "Web design trainer",
    picture: teaching,
    date: "June 2025 - Aug 2025",
    description:
      "A community-driven program focused on sharing knowledge, mentoring junior students, building leadership skills, and applying theory through real-world projects and competitions.",
    tag: [
      "Teaching",
      "Web Design",
    ],
    pdf: "/Certi.pdf"
  },
  {
    title: "Next-Gen Engagement",
    Subtitles: "Competition Participant",
    picture: komplexcertificate,
    date: "Aug 2025 - Sep 2025",
    description:
      "A project-based competition under the Next-Gen program where I contributed to team development and achieved second place.",
    tag: [
      "Komplex",
      "Competition",
    ],
    pdf: "/Komplex.pdf"
  },
  {
    title: "Innovative Tech Challenge",
    Subtitles: "Competition Participant",
    picture: komplexcertificate,
    date: "Oct 2025 - Jan 2026",
    description:
      "A national innovation competition organized by CamTech University, encouraging students to develop practical tech solutions aligned with Sustainable Development Goals (SDGs). Our team was selected among the Top 10 finalists, promoting innovation and entrepreneurial thinking.",
    tag: [
      "Komplex",
      "Competition",
    ],
    pdf: "/Komplex.pdf"
  },
  {
    title: "Aspire Leadership  Program",
    Subtitles: "Learner Participant",
    picture: aspirepic,
    date: "June 2025 - Aug 2025",
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
    date: "Sep 2025",
    gallery: [
      firstImageKomplex,
      secondImageKomplex,
      thirdImageKomplex,
      fourthImageKomplex,
      fifthImageKomplex,
      sixthImageKomplex,
    ]
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
    date: "July 2025",
    gallery: [
      firstImageGrandcineplex,
      secondImageGrandcineplex,
      thirdImageGrandcineplex,
      fourthImageGrandcineplex,
      fifthImageGrandcineplex,
      sixthImageGrandcineplex,
    ]
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
    date: "Jan 2026",
    gallery: [
      firstImageUnifinder,
      secondImageUnifinder,
      thirdImageUnifinder,
      fourthImageUnifinder,
      fifthImageUnifinder,
      sixthImageUnifinder,
      seventhImageUnifinder,
      eighthImageUnifinder,
      ninthImageUnifinder,
      tenthImageUnifinder,
      eleventhImageUnifinder,
      twelfthImageUnifinder,
    ]
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
    videodemo: "https://youtu.be/mIUvftuUees?si=o4scTwVXMq5XJlVO",
    date: "Dec 2025",
    gallery: [
      firstImageGame,
      secondImageGame,
      thirdImageGame,
      fourthImageGame,
      fifthImageGame
    ]
  },
]


const ContactDetail = [
  { icon: 'FaLinkedin', iconColor: '#0A66C2', iconSize: 22, ContactName: 'LinkedIn', Username: '@arafat-man', label: "Connect with me professionally and see my career journey", href: "https://www.linkedin.com/in/arafat-man/" },
  { icon: 'FaGithub', iconColor: '#6e5494', iconSize: 22, ContactName: 'GitHub', Username: '@Ra-Fat', label: "Check out my latest projects and open source contributions", href: "https://github.com/Ra-Fat" },
  { icon: 'FaFacebook', iconColor: '#1877F2', iconSize: 22, ContactName: 'Facebook', Username: '@Arafat Man', label: "Behind the scenes of my development journey", href: "https://web.facebook.com/urj4zz/" },
];

const links = [
  { id: 'home', label: 'Home', icon: 'Home', iconSize: 20 },
  { id: 'about', label: 'About', icon: 'User', iconSize: 20 },
  { id: 'skills', label: 'Skills', icon: 'Code', iconSize: 20 },
  { id: 'experiences', label: 'Experiences', icon: 'Briefcase', iconSize: 20 },
  { id: 'projects', label: 'Projects', icon: 'FolderKanban', iconSize: 20 },
  { id: 'contact', label: 'Contact', icon: 'Mail', iconSize: 20 },
];


const socialLinks = [
  {
    href: "https://web.facebook.com/ra.fat.626421/",
    icon: FaFacebook,
  },
  {
    href: "https://www.instagram.com/urj4zz_/",
    icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/arafat-man/",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/Ra-Fat",
    icon: FaGithub,
  },
];



export { technologies, ExperiencesContext , ProjectsContext, primaryTechStack, ContactDetail, links, socialLinks};