import projectcubeImg from '../assets/projectcube/projectcubeMain.jpg';
import projectcubeImg1 from '../assets/projectcube/projectcube1.jpg';
import projectcubeImg2 from '../assets/projectcube/projectcube2.jpg';
import projectcubeImg3 from '../assets/projectcube/projectcube3.jpg';
import projectcubeImg4 from '../assets/projectcube/projectcube4.jpg';

import { Tech } from '../../lib/enums/tech.enum';

export const projectcubeProjectData = {
  title: "Project Cube",
  year: '2024',
  subtitle: "A 3D project portfolio built with Three.js.",
  background: "Project Cube background",
  mainImage: projectcubeImg,
  tech: [Tech.TypeScript, Tech.ThreeJS, Tech.React, Tech.MUI],
  repo: "https://github.com/JohnXander/project-cube",
  img1: projectcubeImg1,
  img2: projectcubeImg2,
  img3: projectcubeImg3,
  img4: projectcubeImg4,
  desc1: 'Text here',
  desc2: 'Text here',
  desc3: 'Text here',
  desc4: 'Text here',
}
