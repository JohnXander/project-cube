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

import { Tech } from "../../lib/enums/tech.enum";

export const minilrsProjectData = {
  title: "Mini LRS",
  year: '2024',
  subtitle: "A compact and efficient Learning Record Store designed for seamless tracking and storage of xAPI statements.",
  background: `A miniature version of the Learning Record Store project I worked on in my first job as a software engineer. 
    Built during my first year at the company, this project helped me deepen my understanding of our product, the e-learning industry, 
    and the tech stack we use. It also served as a way to explore how smaller-scale implementations of LRS functionality can be 
    developed.`,
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
    (e.g. "Johnny completed Quiz 1") along with the time it occurred (e.g. "22 minutes ago"). This provides 
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
    Signing in unlocks personalised features, such as learner progress tracking and profile management.`,
  desc9: `From the sign-in page, users can navigate to the sign-up page to create an account. Registration requires 
    a username, email, password, and confirmation of the password, ensuring secure access to the application.`,
};
