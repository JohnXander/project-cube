import klipboarImg from '../assets/klipboarScreen.jpg';
import minilrsImg from '../assets/minilrsScreen.jpg';
import geoquixImg from '../assets/geoquixScreen.jpg';
import projectcubeImg from '../assets/projectcubeScreen.jpg';
import comingsoonImg from '../assets/comingsoonScreen.jpg';

type ProjectKey = "klipboar" | "minilrs" | "geoquix" | "projectcube" | "captivote" | "avatarify";

interface ProjectData {
  title: string;
  year?: string;
  subtitle?: string;
  description: string;
  video?: string;
  image?: string;
  tech?: string[];
  repo?: string;
  site?: string;
}

export const projectData: Record<ProjectKey, ProjectData> = {
  klipboar: {
    title: "Klipboar",
    year: '2024',
    subtitle: "A school desktop app built with Electron.",
    description: "This is the description for Klipboar.",
    image: klipboarImg,
    tech: ["Electron", "TypeScript", "MongoDB", "Express", "React", "TanStack Query", "Node", "Tailwind"],
    repo: "https://github.com/JohnXander/klipboar"
  },
  minilrs: {
    title: "Mini LRS",
    year: '2024',
    subtitle: "A Learning Record Store built with the MERN stack.",
    description: "This is the description for Mini LRS.",
    image: minilrsImg,
    tech: ["TypeScript", "MongoDB", "Express", "React", "Redux", "Node", "Tailwind"],
    repo: "https://github.com/JohnXander/mini-lrs",
    site: "https://mini-lrs.onrender.com"
  },
  geoquix: {
    title: "GeoQuix",
    year: '2023',
    subtitle: "A geography quiz app built with the T3 stack.",
    description: "This is the description for GeoQuix.",
    image: geoquixImg,
    tech: ["TypeScript", "Next JS", "Prisma", "tRPC", "Postgres", "Tailwind"],
    repo: "https://github.com/JohnXander/geoquix",
    site: "https://geoquix.vercel.app"
  },
  projectcube: {
    title: "Project Cube",
    year: '2024',
    subtitle: "A 3D project portfolio built with Three.js.",
    description: "This is the description for Project Cube.",
    image: projectcubeImg,
    tech: ["TypeScript", "Three.js", "React", "MUI"],
    repo: "https://github.com/JohnXander/project-cube"
  },
  captivote: {
    title: "Captivote",
    year: '2025',
    subtitle: "A meme-sharing mobile app built with React Native.",
    description: "This is the project I'm currently working on...",
    image: comingsoonImg,
  },
  avatarify: {
    title: "Avatarify",
    year: '2025',
    subtitle: "An NPM package for creating user avatars.",
    description: "I will start working on this project in 2025...",
    image: comingsoonImg,
  },
};
