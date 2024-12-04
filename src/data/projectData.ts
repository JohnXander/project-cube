import klipboarImg from '../assets/klipboar/klipboarMain.jpg';
import minilrsImg from '../assets/minilrs/minilrsMain.jpg';
import geoquixImg from '../assets/geoquix/geoquixMain.jpg';
import geoquixImg1 from '../assets/geoquix/geoquix1.jpg';
import geoquixImg2 from '../assets/geoquix/geoquix2.jpg';
import geoquixImg3 from '../assets/geoquix/geoquix3.jpg';
import geoquixImg4 from '../assets/geoquix/geoquix4.jpg';
import geoquixImg5 from '../assets/geoquix/geoquix5.jpg';
import projectcubeImg from '../assets/projectcube/projectcubeMain.jpg';
import comingsoonImg from '../assets/comingsoonMain.jpg';
import { Tech } from '../../lib/enums/tech.enum';
import { ProjectData, ProjectKey } from './projectData.types';

export const projectData: Record<ProjectKey, ProjectData> = {
  klipboar: {
    title: "Klipboar",
    year: '2024',
    subtitle: "A desktop app that allows students to create assignments and conduct research using the integrated browser. Teachers can analyse submissions to identify copied content, track the websites it was sourced from, and even view the exact time the copying took place.",
    description: "Klipboar is a cutting-edge desktop application designed for schools to streamline assignment creation, submission, and integrity analysis. Built using Electron, TypeScript, and the MERN stack with React Query and Tailwind CSS, the app allows students to draft assignments, link them to teacher-provided guidelines (including instructions, word limits, and due dates), and submit them securely. Featuring an integrated browser, Klipboar ensures all research is conducted within the app, enabling teachers to analyze submitted assignments for copied content with unparalleled precision. Teachers can identify copied text, see the exact source website, and view timestamps of when the copying occurred. Highlighted content makes it easy to trace sources, while hovering over specific characters reveals additional details like the exact time and date of copying. Students benefit from a “favorite sites” feature that prioritizes frequently used research sources for convenience. All functionality is secured with Passport.js, requiring users to be verified members of their organization to access the app. Comprehensive validation and user feedback ensure a seamless experience, and by replacing external browsers on school computers, Klipboar promotes academic honesty, accountability, and a streamlined assignment process.",
    mainImage: klipboarImg,
    tech: [Tech.Electron, Tech.TypeScript, Tech.MongoDB, Tech.Express, Tech.React, Tech.TanStackQuery, Tech.Node, Tech.Tailwind],
    repo: "https://github.com/JohnXander/klipboar"
  },
  minilrs: {
    title: "Mini LRS",
    year: '2024',
    subtitle: "A compact and efficient Learning Record Store designed for seamless tracking and storage of xAPI statements.",
    description: "This is the description for Mini LRS.",
    mainImage: minilrsImg,
    tech: [Tech.TypeScript, Tech.MongoDB, Tech.Express, Tech.React, Tech.Redux, Tech.Node, Tech.Tailwind],
    repo: "https://github.com/JohnXander/mini-lrs",
    site: "https://mini-lrs.onrender.com"
  },
  geoquix: {
    title: "GeoQuix",
    year: '2023',
    subtitle: "A geography quiz app that lets you test your knowledge on different countries around the world. You can challenge yourself by playing solo or against friends to see who can get the highest score.",
    description: "This is the description for GeoQuix.",
    mainImage: geoquixImg,
    tech: [Tech.TypeScript, Tech.NextJS, Tech.Prisma, Tech.tRPC, Tech.Postgres, Tech.Tailwind],
    repo: "https://github.com/JohnXander/geoquix",
    site: "https://geoquix.vercel.app",
    img1: geoquixImg1,
    img2: geoquixImg2,
    img3: geoquixImg3,
    img4: geoquixImg4,
    img5: geoquixImg5
  },
  projectcube: {
    title: "Project Cube",
    year: '2024',
    subtitle: "A 3D project portfolio built with Three.js.",
    description: "This is the description for Project Cube.",
    mainImage: projectcubeImg,
    tech: [Tech.TypeScript, Tech.ThreeJS, Tech.React, Tech.MUI],
    repo: "https://github.com/JohnXander/project-cube"
  },
  captivote: {
    title: "Captivote",
    year: '2025',
    subtitle: "A meme-sharing mobile app built with React Native.",
    description: "I plan to begin work on this project in 2025...",
    mainImage: comingsoonImg,
  },
  avatarify: {
    title: "Avatarify",
    year: '2025',
    subtitle: "An NPM package for creating user avatars.",
    description: "I plan to begin work on this project in 2025...",
    mainImage: comingsoonImg,
  },
};
