import geoquixImg from '../assets/geoquix/geoquixMain.jpg';
import geoquixImg1 from '../assets/geoquix/geoquix1.jpg';
import geoquixImg2 from '../assets/geoquix/geoquix2.jpg';
import geoquixImg3 from '../assets/geoquix/geoquix3.jpg';
import geoquixImg4 from '../assets/geoquix/geoquix4.jpg';
import geoquixImg5 from '../assets/geoquix/geoquix5.jpg';

import { Tech } from "../../lib/enums/tech.enum";

export const geoquixProjectData = {
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
};
