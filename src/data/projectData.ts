import comingsoonImg from '../assets/comingsoonMain.jpg';
import { ProjectData, ProjectKey } from './projectData.types';
import { klipboarProjectData } from './klipboarProjectData';
import { minilrsProjectData } from './minilrsProjectData';
import { geoquixProjectData } from './geoquixProjectData';
import { projectcubeProjectData } from './projectcubeProjectData';

export const projectData: Record<ProjectKey, ProjectData> = {
  klipboar: klipboarProjectData,
  minilrs: minilrsProjectData,
  geoquix: geoquixProjectData,
  projectcube: projectcubeProjectData,
  captivote: {
    title: "Captivote",
    year: '2025',
    subtitle: "A meme-sharing mobile app built with React Native.",
    background: "I plan to begin work on this project in 2025...",
    mainImage: comingsoonImg,
  },
  avatarify: {
    title: "Avatarify",
    year: '2025',
    subtitle: "An NPM package for creating user avatars.",
    background: "I plan to begin work on this project in 2025...",
    mainImage: comingsoonImg,
  },
};
