import klipboarImg from '../assets/klipboar.jpg';
import minilrsImg from '../assets/minilrs.jpg';
import geoquixImg from '../assets/geoquix.jpg';

type ProjectKey = "klipboar" | "minilrs" | "geoquix";

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
};
