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
  background: `My portfolio website, Project Cube, showcases the projects I've built in a unique and interactive way. 
    Instead of a traditional list or grid, I designed a rotating cube in the centre of the screen, with each face representing 
    a different project. This approach reflects my focus on creativity and user engagement, turning my portfolio into a 
    project in itself.`,
  mainImage: projectcubeImg,
  tech: [Tech.TypeScript, Tech.ThreeJS, Tech.React, Tech.MUI],
  repo: "https://github.com/JohnXander/project-cube",
  img1: projectcubeImg1,
  img2: projectcubeImg2,
  img3: projectcubeImg3,
  img4: projectcubeImg4,
  desc1: `The centerpiece of Project Cube is the rotating cube, which displays a project on each face. Read the laptop controls 
    to learn how to rotate the cube, zoom in and out, or open a project. If you prefer a cleaner interface, you can hide the 
    controls.`,
  desc2: `Beneath the cube, there’s a "Connect with me" section where you can find links to my GitHub, LinkedIn, and email. 
    This section also includes an option to play music — featuring a track I often listen to while coding. You can mute this 
    whenever you want.`,
  desc3: `Clicking on a cube face opens a dialog with all the details about the selected project. The dialog showcases the 
    project name and the year it was created, along with icons representing the tech stack used — hover over them to see the names. 
    You’ll also find a short description of the project, links to the GitHub repository and live site, a main image, and a brief 
    background explaining why I decided to create it.`,
  desc4: `Scroll down in the project dialog to see a complete walkthrough of the project. This includes step-by-step explanations 
    with screenshots. At the bottom of the dialog, there’s a convenient "Back to Top" button to quickly return to the beginning.`,
}
