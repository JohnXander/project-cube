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
    subtitle: `A desktop app that allows students to create assignments and conduct research using the integrated browser.
      Teachers can analyse submissions to identify copied content, track the websites it was sourced from, and even view 
      the exact time the copying took place.`,
    background: 'Klipboar background',
    mainImage: klipboarImg,
    tech: [Tech.Electron, Tech.TypeScript, Tech.MongoDB, Tech.Express, Tech.React, Tech.TanStackQuery, Tech.Node, Tech.Tailwind],
    repo: "https://github.com/JohnXander/klipboar"
  },
  minilrs: {
    title: "Mini LRS",
    year: '2024',
    subtitle: "A compact and efficient Learning Record Store designed for seamless tracking and storage of xAPI statements.",
    background: 'Minilrs background',
    mainImage: minilrsImg,
    tech: [Tech.TypeScript, Tech.MongoDB, Tech.Express, Tech.React, Tech.Redux, Tech.Node, Tech.Tailwind],
    repo: "https://github.com/JohnXander/mini-lrs",
    site: "https://mini-lrs.onrender.com"
  },
  geoquix: {
    title: "GeoQuix",
    year: '2023',
    subtitle: `A geography quiz app that lets you test your knowledge on different countries around the world. 
      You can challenge yourself by playing solo or against friends to see who can get the highest score.`,
    background: `One of many full-stack apps I built after completing Boolean UK's coding bootcamp in October 2022.
      My aim was to build something that would interact with a free RESTful API: https://restcountries.com.`,
    mainImage: geoquixImg,
    tech: [Tech.TypeScript, Tech.NextJS, Tech.Prisma, Tech.tRPC, Tech.Postgres, Tech.Tailwind],
    repo: "https://github.com/JohnXander/geoquix",
    site: "https://geoquix.vercel.app",
    img1: geoquixImg1,
    img2: geoquixImg2,
    img3: geoquixImg3,
    img4: geoquixImg4,
    img5: geoquixImg5,
    desc1: `On the landing page, you'll see a selection of quiz categories, including Capital Cities, Flags, Timezones,
      Land Area, and Population. Click on a category to view a prompt asking if you're ready to start the quiz.`,
    desc2: `The quiz format is multiple choice, with 4 possible answers for each question — only one is correct. 
     At the top of the screen, you'll see your progress: the number of questions you've answered, how many you’ve gotten right, 
     and a timer showing the remaining time. Each quiz gives you 100 seconds to complete as many questions as possible.`,
    desc3: `When time runs out, your score and accuracy are displayed. Accuracy is calculated based on the percentage of 
      questions you answered correctly. At this stage, you can choose to save your score by entering your name, 
      which adds your result to the leaderboard.`,
    desc4: `The leaderboard showcases all recorded entries, including the name, score, accuracy, and the corresponding quiz 
      category. It's a great way to see how you rank against other players.`,
    desc5: `To make it easier to find specific results, you can filter the leaderboard by quiz category, score, or accuracy. 
      This helps you focus on specific achievements or compare performances within a particular category.`,
  },
  projectcube: {
    title: "Project Cube",
    year: '2024',
    subtitle: "A 3D project portfolio built with Three.js.",
    background: "Project Cube background",
    mainImage: projectcubeImg,
    tech: [Tech.TypeScript, Tech.ThreeJS, Tech.React, Tech.MUI],
    repo: "https://github.com/JohnXander/project-cube"
  },
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
