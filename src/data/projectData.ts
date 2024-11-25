import klipboarImg from '../assets/klipboarScreen.jpg';
import minilrsImg from '../assets/minilrsScreen.jpg';
import geoquixImg from '../assets/geoquixScreen.jpg';
import projectcubeImg from '../assets/projectcubeScreen.jpg';
import comingsoonImg from '../assets/comingsoonScreen.jpg';

type ProjectKey = "klipboar" | "minilrs" | "geoquix" | "projectcube" | "captivote" | "avatarify";

interface ProjectData {
  title: string;
  subtitle?: string;
  description: string;
  video?: string;
  image?: string;
}

export const projectData: Record<ProjectKey, ProjectData> = {
  klipboar: {
    title: "Klipboar",
    subtitle: "A school desktop app built with Electron.",
    description: "This is the description for Klipboar.",
    image: klipboarImg,
  },
  minilrs: {
    title: "Mini LRS",
    subtitle: "A Learning Record Store built with the MERN stack.",
    description: "This is the description for Mini LRS.",
    image: minilrsImg,
  },
  geoquix: {
    title: "GeoQuix",
    subtitle: "A geography quiz app built with the T3 stack.",
    description: "This is the description for GeoQuix.",
    image: geoquixImg,
  },
  projectcube: {
    title: "Project Cube",
    subtitle: "A 3D project portfolio built with Three.js.",
    description: "This is the description for Project Cube.",
    image: projectcubeImg,
  },
  captivote: {
    title: "Captivote",
    subtitle: "A meme-sharing mobile app built with React Native.",
    description: "This is the project I'm currently working on...",
    image: comingsoonImg,
  },
  avatarify: {
    title: "Avatarify",
    subtitle: "An NPM package for creating user avatars.",
    description: "I will start working on this project in 2025...",
    image: comingsoonImg,
  },
};
