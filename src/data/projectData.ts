import klipboarImg from '../assets/klipboar/klipboarMain.jpg';
import klipboarImg1 from '../assets/klipboar/klipboar1.jpg';
import klipboarImg2 from '../assets/klipboar/klipboar2.jpg';
import klipboarImg3 from '../assets/klipboar/klipboar3.jpg';
import klipboarImg4 from '../assets/klipboar/klipboar4.jpg';
import klipboarImg5 from '../assets/klipboar/klipboar5.jpg';
import klipboarImg6 from '../assets/klipboar/klipboar6.jpg';
import klipboarImg7 from '../assets/klipboar/klipboar7.jpg';
import klipboarImg8 from '../assets/klipboar/klipboar8.jpg';
import klipboarImg9 from '../assets/klipboar/klipboar9.jpg';
import klipboarImg10 from '../assets/klipboar/klipboar10.jpg';
import klipboarImg11 from '../assets/klipboar/klipboar11.jpg';
import klipboarImg12 from '../assets/klipboar/klipboar12.jpg';
import klipboarImg13 from '../assets/klipboar/klipboar13.jpg';
import klipboarImg14 from '../assets/klipboar/klipboar14.jpg';
import klipboarImg15 from '../assets/klipboar/klipboar15.jpg';
import klipboarImg16 from '../assets/klipboar/klipboar16.jpg';
import klipboarImg17 from '../assets/klipboar/klipboar17.jpg';
import klipboarImg18 from '../assets/klipboar/klipboar18.jpg';
import klipboarImg19 from '../assets/klipboar/klipboar19.jpg';
import klipboarImg20 from '../assets/klipboar/klipboar20.jpg';
import klipboarImg21 from '../assets/klipboar/klipboar21.jpg';
import klipboarImg22 from '../assets/klipboar/klipboar22.jpg';
import klipboarImg23 from '../assets/klipboar/klipboar23.jpg';
import klipboarImg24 from '../assets/klipboar/klipboar24.jpg';
import klipboarImg25 from '../assets/klipboar/klipboar25.jpg';
import klipboarImg26 from '../assets/klipboar/klipboar26.jpg';
import klipboarImg27 from '../assets/klipboar/klipboar27.jpg';
import minilrsImg from '../assets/minilrs/minilrsMain.jpg';
import minilrsImg1 from '../assets/minilrs/minilrs1.jpg';
import minilrsImg2 from '../assets/minilrs/minilrs2.jpg';
import minilrsImg3 from '../assets/minilrs/minilrs3.jpg';
import minilrsImg4 from '../assets/minilrs/minilrs4.jpg';
import minilrsImg5 from '../assets/minilrs/minilrs5.jpg';
import minilrsImg6 from '../assets/minilrs/minilrs6.jpg';
import minilrsImg7 from '../assets/minilrs/minilrs7.jpg';
import minilrsImg8 from '../assets/minilrs/minilrs8.jpg';
import minilrsImg9 from '../assets/minilrs/minilrs9.jpg';
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
    repo: "https://github.com/JohnXander/klipboar",
    img1: klipboarImg1,
    img2: klipboarImg2,
    img3: klipboarImg3,
    img4: klipboarImg4,
    img5: klipboarImg5,
    img6: klipboarImg6,
    img7: klipboarImg7,
    img8: klipboarImg8,
    img9: klipboarImg9,
    img10: klipboarImg10,
    img11: klipboarImg11,
    img12: klipboarImg12,
    img13: klipboarImg13,
    img14: klipboarImg14,
    img15: klipboarImg15,
    img16: klipboarImg16,
    img17: klipboarImg17,
    img18: klipboarImg18,
    img19: klipboarImg19,
    img20: klipboarImg20,
    img21: klipboarImg21,
    img22: klipboarImg22,
    img23: klipboarImg23,
    img24: klipboarImg24,
    img25: klipboarImg25,
    img26: klipboarImg26,
    img27: klipboarImg27,
    desc1: "Text here",
    desc2: "Text here",
    desc3: "Text here",
    desc4: "Text here",
    desc5: "Text here",
    desc6: "Text here",
    desc7: "Text here",
    desc8: "Text here",
    desc9: "Text here",
    desc10: "Text here",
    desc11: "Text here",
    desc12: "Text here",
    desc13: "Text here",
    desc14: "Text here",
    desc15: "Text here",
    desc16: "Text here",
    desc17: "Text here",
    desc18: "Text here",
    desc19: "Text here",
    desc20: "Text here",
    desc21: "Text here",
    desc22: "Text here",
    desc23: "Text here",
    desc24: "Text here",
    desc25: "Text here",
    desc26: "Text here",
    desc27: "Text here",
  },
  minilrs: {
    title: "Mini LRS",
    year: '2024',
    subtitle: "A compact and efficient Learning Record Store designed for seamless tracking and storage of xAPI statements.",
    background: 'Minilrs background',
    mainImage: minilrsImg,
    tech: [Tech.TypeScript, Tech.MongoDB, Tech.Express, Tech.React, Tech.Redux, Tech.Node, Tech.Tailwind, Tech.Firebase],
    repo: "https://github.com/JohnXander/mini-lrs",
    site: "https://mini-lrs.onrender.com",
    img1: minilrsImg1,
    img2: minilrsImg2,
    img3: minilrsImg3,
    img4: minilrsImg4,
    img5: minilrsImg5,
    img6: minilrsImg6,
    img7: minilrsImg7,
    img8: minilrsImg8,
    img9: minilrsImg9,
    desc1: `The landing page displays a timeline of xAPI statements. Each statement summarizes a user's action 
      (e.g., "Johnny completed Quiz 1") along with the time it occurred (e.g., "22 minutes ago"). This provides 
      a clear and organized view of all logged interactions.`,
    desc2: `Clicking on a statement opens a detailed dialog. This dialog displays the raw xAPI statement in JSON format, 
      showing fields like actor, verb, object, and additional details like results for completed actions.`,
    desc3: `The Learners page, accessible from the header, showcases a list of registered users. Each learner entry 
      includes their name, profile picture, and the date they joined. Guest users are excluded from this list, 
      focusing on registered participants.`,
    desc4: `Clicking on a learner opens a dialog with a profile preview. The preview highlights the user's activity, 
      such as the number of quizzes they have completed, offering insights into their engagement.`,
    desc5: `The Demo page simulates LMS-LRS interaction with three short quizzes. Guest users are prompted to sign in 
      or proceed as a guest when selecting a quiz. Registered users can jump straight into a quiz, creating a seamless 
      and tailored experience.`,
    desc6: `Upon selecting a quiz, a dialog with four multiple-choice questions about LRS functionality appears. 
      Actions such as opening the quiz (launched), submitting it (completed), or closing it prematurely (terminated) 
      are tracked and reflected on the Statements page.`,
    desc7: `Signed-in users see their profile picture in the header, leading to the Profile page. Here, they can update 
      personal details (e.g. profile picture, username, email, password), sign out, or delete their profile. Deleting 
      the profile also removes all associated xAPI statements from the system.`,
    desc8: `Users without accounts see a "Sign In" option in the header, directing them to the sign-in page. 
      Signing in unlocks personalized features, such as learner progress tracking and profile management.`,
    desc9: `From the sign-in page, users can navigate to the sign-up page to create an account. Registration requires 
      a username, email, password, and confirmation of the password, ensuring secure access to the application.`,
  },
  geoquix: {
    title: "GeoQuix",
    year: '2023',
    subtitle: `A geography quiz app that lets you test your knowledge on different countries around the world. 
      You can challenge yourself by playing solo or against friends to see who can get the highest score.`,
    background: `One of many full-stack apps I built after completing Boolean UK's coding bootcamp in October 2022.
      My aim was to build something that would interact with a free RESTful API service.`,
    mainImage: geoquixImg,
    tech: [Tech.TypeScript, Tech.NextJS, Tech.Prisma, Tech.tRPC, Tech.Postgres, Tech.Tailwind],
    repo: "https://github.com/JohnXander/geoquix",
    site: "https://geoquix.vercel.app",
    api: "https://restcountries.com",
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
