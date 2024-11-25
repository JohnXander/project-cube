import klipboarImg from '../assets/klipboarScreen.jpg';
import minilrsImg from '../assets/minilrsScreen.jpg';
import geoquixImg from '../assets/geoquixScreen.jpg';
import projectcubeImg from '../assets/projectcube.jpg';
import comingsoonImg from '../assets/comingsoonScreen.jpg';

type ProjectKey = "klipboar" | "minilrs" | "geoquix" | "projectcube" | "captivote" | "avatarify";

interface ProjectData {
  title: string;
  description: string;
  video?: string;
  image?: string;
}

export const projectData: Record<ProjectKey, ProjectData> = {
  klipboar: {
    title: "Klipboar",
    description: "This is the description for Klipboar.",
    image: klipboarImg,
  },
  minilrs: {
    title: "Mini LRS",
    description: "This is the description for Mini LRS.",
    image: minilrsImg,
  },
  geoquix: {
    title: "GeoQuix",
    description: "This is the description for GeoQuix.",
    image: geoquixImg,
  },
  projectcube: {
    title: "Project Cube",
    description: "This is the description for Project Cube.",
    image: projectcubeImg,
  },
  captivote: {
    title: "Captivote",
    description: "This is the description for Captivote.",
    image: comingsoonImg,
  },
  avatarify: {
    title: "Avatarify",
    description: "This is the description for Avatarify.",
    image: comingsoonImg,
  },
};
