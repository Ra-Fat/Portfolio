import React from "react";
import { Mail } from 'lucide-react';
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
, unity, threejs, postman, notion, expressjs, } from '../../assets';

import { Contact, Experience, NavbarLink, Project, SocialLink, TechStack } from './type';

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaLocationArrow } from 'react-icons/fa';


export const TechStackData: TechStack[] = [
  {
    name: "HTML",
    icon: html,
    tag: "Language",
    variant: "primary"
  },
  {
    name: "CSS",
    icon: css,
    tag: "Language",
    variant: "primary"
  },
  {
    name: "JavaScript",
    icon: javascript,
    tag: "Language",
    variant: "primary"
  },
  {
    name: "TypeScript",
    icon: typescript,
    tag: "Language",
    variant: "primary"
  },
  {
    name: "React JS",
    icon: reactjs,
    tag: "Framework",
    variant: "primary"
  },
  {
    name: "Tailwind",
    icon: tailwind,
    tag: "Framework",
    variant: "primary"
  },
  {
    name: "Node JS",
    icon: nodejs,
    tag: "Runtime",
    variant: "primary"
  },
  {
    name: "MongoDB",
    icon: mongodb,
    tag: "Database",
    variant: "secondary"
  },
  {
    name: "Figma",
    icon: figma,
    tag: "Tool",
    variant: "primary"
  },
  {
    name: "Git",
    icon: git,
    tag: "Tool",
    variant: "primary"

  },
  {
    name: "GitHub",
    icon: github,
    tag: "Platform",
    variant: "primary"
  },
  {
    name: "Next.js",
    icon: nextjs,
    tag: "Framework",
    variant: "primary"
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    tag: "Database",
    variant: "primary"
  },
  {
    name: "MySQL",
    icon: mysql,
    tag: "Database",
    variant: "primary"
  },
  {
    name: "Java",
    icon: java,
    tag: "Language",
    variant: "secondary"
  },
  {
    name: "C",
    icon: c,
    tag: "Language",
    variant: "secondary"
  },
  {
    name: "C++",
    icon: cplus,
    tag: "Language",
    variant: "secondary"
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    tag: "Framework",
    variant: "primary"
  },
  {
    name: "Flutter",
    icon: fluttter,
    tag: "Framework",
    variant: "primary"
  },
  {
    name: "Vite",
    icon: vite,
    tag: "Tool",
    variant: "primary"
  },
  {    name: "C#",
    icon: csharp,
    tag: "Language",
    variant: "secondary"
  },
  {
    name: "Vercel",
    icon: vercel,
    tag: "Platform",
    variant: "primary"
  },
  {
    name: "Unity",
    icon: unity,
    tag: "Platform",
    variant: "secondary"
  },
  {
    name: "Three.js",
    icon: threejs,
    tag: "Library",
    variant: "secondary"
  },
  {
    name: "Postman",
    icon: postman,
    tag: "Tool",
    variant: "primary"  
  },
  {
    name: "Notion",
    icon: notion,
    tag: "Tool",
    variant: "secondary"
  },
  {
    name: "Express.js",
    icon: expressjs,
    tag: "Framework",
    variant: "primary"
  },
];


export const ExperienceData: Experience[] = [
  {
    title: "Internship - OneWorld Technology",
    position: "Web Developer",
    picture_src: teaching,
    date: "April 2026 - June 2026",
    description: "A 3-month internship focused on web development, where I contributed to building and maintaining web applications, gaining hands-on experience in real-world projects and collaborating with a team of developers.",
    tags: [
      "Teaching",
      "Web Design",
    ],
    pdf_link: "/Certi.pdf"
  },
  {
    title: "Next-Gen Engagement",
    position: "Web design trainer",
    picture_src: teaching,
    date: "June 2025 - Aug 2025",
    description: "A community-driven program focused on sharing knowledge, mentoring junior students, building leadership skills, and applying theory through real-world projects and competitions.",
    tags: [
      "Teaching",
      "Web Design",
    ],
    pdf_link: "/Certi.pdf"
  },
  {
    title: "Next-Gen Engagement",
    position: "Competition Participant",
    picture_src: komplexcertificate,
    date: "Aug 2025 - Sep 2025",
    description:
      "A project-based competition under the Next-Gen program where I contributed to team development and achieved second place.",
    tags: [
      "Komplex",
      "Competition",
    ],
    pdf_link: "/Komplex.pdf"
  },
  {
    title: "Innovative Tech Challenge",
    position: "Competition Participant",
    picture_src: komplexcertificate,
    date: "Oct 2025 - Jan 2026",
    description:
      "A national innovation competition organized by CamTech University, encouraging students to develop practical tech solutions aligned with Sustainable Development Goals (SDGs). Our team was selected among the Top 10 finalists, promoting innovation and entrepreneurial thinking.",
    tags: [
      "Komplex",
      "Competition",
    ],
    pdf_link: "/Komplex.pdf"
  },
  {
    title: "Aspire Leadership  Program",
    position: "Learner Participant",
    picture_src: aspirepic,
    date: "June 2025 - Aug 2025",
    description:
      "A leadership and soft-skills program focused on communication, teamwork, confidence building, and personal growth.",
    tags: [
      "Soft Skill",
      "Leadership",
    ],
    pdf_link: "/cfaspireprogram.pdf"
  }

];




export const ProjectsData: Project[] = [
  {
    name: "KOMPLEX",
    description: "KOMPLEX is a free, interactive STEM learning platform for Cambodian high school students, offering curriculum-aligned lessons to improve understanding through engaging visuals and self-paced study.",
    techstack: [
      "PostgreSQL",
      "Next.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "Docker",
      "Firebase"
    ],
    github_link: "https://github.com/KOMPLEX-KH/KOMPLEX.git",
    hosting_link: "https://komplex.app/",
    image: komplexF,
    video_demo: "https://youtu.be/7lELfMt81No",
    date: "Sep 2025",
    image_banner: komplexProject,
    image_gallery: [
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
    techstack: [
      "Express.js",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS"
    ],
    github_link: "https://github.com/RaksaOC/Grand-Cineplex.git",
    hosting_link: "",
    image: grandcineplexF,
    video_demo: "https://youtu.be/ENPb3mJ1BhM",
    date: "July 2025",
    image_banner: firstImageGrandcineplex,
    image_gallery: [
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
    techstack: [
      "Flutter",
      "Dart",
      "JSON",
      "Shared Preferences",
      "Local Storage"
    ],
    github_link: "https://github.com/Ra-Fat/UniFinder.git",
    hosting_link: "",
    image: unifinder,
    video_demo: "https://youtu.be/luuqpryOJ3g",
    date: "Jan 2026",
    image_banner: firstImageUnifinder,
    image_gallery: [
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
    techstack:[
      "unity",
      "csharp",
      "animation",

    ],
    github_link: "https://github.com/Ra-Fat/Frost-Guard.git",
    hosting_link: "",
    image: gameF,
    video_demo: "https://youtu.be/mIUvftuUees?si=o4scTwVXMq5XJlVO",
    date: "Dec 2025",
    image_banner: firstImageGame,
    image_gallery: [
      firstImageGame,
      secondImageGame,
      thirdImageGame,
      fourthImageGame,
      fifthImageGame
    ]
  },
]


export const ContactData: Contact[] = [
  { icon: 'FaLinkedin', contact_name: 'LinkedIn', username: '@arafat-man', label: "Connect with me professionally and see my career journey", href: "https://www.linkedin.com/in/arafat-man/" },
  { icon: 'FaGithub', contact_name: 'GitHub', username: '@Ra-Fat', label: "Check out my latest projects and open source contributions", href: "https://github.com/Ra-Fat" },
  { icon: 'FaFacebook', contact_name: 'Facebook', username: '@Arafat Man', label: "Behind the scenes of my development journey", href: "https://web.facebook.com/urj4zz/" },
];

export const NavbarLinks: NavbarLink[] = [
  { id: 'home', label: 'Home', icon: 'Home'},
  { id: 'about', label: 'About', icon: 'User'},
  { id: 'skills', label: 'Skills', icon: 'Code'},
  { id: 'experiences', label: 'Experiences', icon: 'Briefcase'},
  { id: 'projects', label: 'Projects', icon: 'FolderKanban'},
  { id: 'contact', label: 'Contact', icon: 'Mail'},
];


export const socialLinks = [
  { href: "https://web.facebook.com/ra.fat.626421/", icon: React.createElement(FaFacebook), label: "Facebook" },
  { href: "https://www.instagram.com/urj4zz_/", icon: React.createElement(FaInstagram), label: "Instagram" },
  { href: "https://www.linkedin.com/in/arafat-man/", icon: React.createElement(FaLinkedin), label: "LinkedIn" },
  { href: "https://github.com/Ra-Fat", icon: React.createElement(FaGithub), label: "GitHub" },
]

export const ContactDetail = [
  {
    icon: React.createElement(Mail, { size: 22 }),
    ContactName: "Email",
    label: "manrafat2006@gmail.com",
    href: "mailto:contact@arafatman.com",
  },
  {
    icon: React.createElement(FaPhone, { size: 22 }),
    ContactName: "Phone",
    label: "+855 69 363 138",
    href: "tel:+85569363138",
  },
  {
    icon: React.createElement(FaLocationArrow, { size: 22 }),
    ContactName: "Location",
    label: "Phnom Penh, Cambodia",
    href: "https://www.google.com/maps/place/Phnom+Penh,+Cambodia",
  },
]

export const OverviewData = [
  {
    id: 'experiences',
    label: 'Experiences',
    items: [
      {
        title: 'Internship - OneWorld Technology',
        sub: 'Web Developer — Contributed to building and maintaining web applications.',
        badge: 'April 2026 - June 2026',
      },
      {
        title: 'Volunteer - Next-Gen Engagement Program',
        sub: 'Web Design Trainer — Mentored junior students in web design and development.',
        badge: 'July 2025 - Aug 2025',
      },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    items: [
      {
        title: 'University - CADT',
        sub: "Major in Computer Science specializing in Software Engineering",
        badge: '2024 – 2027',
      },
      {
        title: "High School - Preah Bat Norodom Sihamoni",
        sub: "Completed High School Education",
        badge: '2018 – 2023',
      },
    ],
  },
  {
    id: 'comp',
    label: 'Competitions',
    items: [
      {
        title: 'Next Gen Engagement - Komplex Competition',
        sub: 'Participated in developing KOMPLEX for a competition project.',
        badge: '2nd Place',
      },
      {
        title: 'Innovative Tech Challenge - CamTech University',
        sub: 'Developed an innovative solution as part of a team competition project.',
        badge: 'Top 10 Finalist',
      },
    ],
  },
];


export const Feature = [
  { id: 1, image: aspirepic, title: 'Aspire Program', tag: 'Certificate' },
  { id: 2, image: teaching, title: 'Trainer', tag: 'Certificate' },
  { id: 3, image: komplexcertificate, title: 'Komplex', tag: 'Certificate' },
]