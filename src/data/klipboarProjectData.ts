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
import { Tech } from "../../lib/enums/tech.enum";

export const klipboarProjectData = {
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
  desc1: `When you open Klipboar, an Electron window appears on your desktop, taking you to the login page. Here, you can log 
    in or navigate to the registration page if you don't have an account.`,
  desc2: `Registering a user requires entering a name, email, password, and selecting a role (teacher or student). After successful 
    registration, you are automatically logged in. In this example, we created a teacher account named Jane Doe.`,
  desc3: `The login process involves two steps: logging in as a user and selecting an organisation. If you're not part of an 
    organisation, a message reflects that and you have the option to log out. Teachers can create a new organisation at this stage.`,
  desc4: `Teachers can create an organisation by entering a name in a dialog box. Here, we create "Jane Doe's School."`,
  desc5: `The new organisation now appears on the organisation login page. Teachers can manage members or leave the organisation. 
    Selecting an organisation completes the login process, granting both user and organisation tokens.`,
  desc6: `Logged in, you land on the Assignments page. If no assignments exist, a message will indicate "no assignments."`,
  desc7: `Teachers can navigate to the Guidelines page. If no guidelines exist, it will display "no guidelines." Clicking 
    "Create Guideline" opens a dialog for guideline creation.`,
  desc8: `In the guideline creation dialog, there are input details such as name, description, word limit, and due date. Here, we 
    create an assignment guideline titled "Term 1 Task."`,
  desc9: `The new guideline appears on the Guidelines page with options to edit or soft-delete it. Due dates display relative 
    times, like "in 3 days."`,
  desc10: `Back on the organisation log in page, teachers can add or remove organisation members via a dialog. By entering an 
    email, a teacher like Jane Doe can add a student, such as John Smith (an already-created student account).`,
  desc11: `A toast notification confirms successful member addition, ensuring seamless organisation management.`,
  desc12: `Now logged in as John Smith, we can now see Jane Doe's School in our organisation list. Students can log in to an 
    organisation but lack options to create or manage them.`,
  desc13: `Logged in as a student, the dashboard includes Assignments and a search bar but excludes the Guidelines page. 
    Students can create assignments and access the Klipboar search feature.`,
  desc14: `Students can type website addresses or keywords in the search bar. This launches a second Electron window with the 
    specified website for research purposes.`,
  desc15: `The main window displays shortcuts to frequently visited websites under the search bar. Clicking a shortcut launches 
    the website directly. These website shortcut icons are ordered by total number of launches.`,
  desc16: `Students fill out a form to create assignments, selecting a teacher and guideline. In this example, we create 
    "All About Apples."`,
  desc17: `The assignment list shows details like title, description, teacher, word count, and due date. The status updates to 
    "Submitted" once the assignment is turned in.`,
  desc18: `Clicking an assignment opens a detailed view where students can write, edit, save, submit, or delete their work.`,
  desc19: `Using the built-in browser, students can copy text (e.g., from Wikipedia) and paste it into their assignments, 
    adding their own content as needed.`,
  desc20: `In the assignment editor, students can modify text they paste, such as adding punctuation or continuing sentences.`,
  desc21: `Students can conduct additional research, such as looking up terms, copying text, and refining their work in the 
    assignment editor.`,
  desc22: `The word count dynamically updates as students add text, ensuring they stay within the assignment's limits.`,
  desc23: `After saving their work, students submit the assignment. A confirmation dialog ensures submission is intentional 
    and final.`,
  desc24: `Now logged in again as Jane Doe, we can see John Smith's assignment in our assignments list. 
    Teachers see submitted assignments in their list with details like word count and submission timing 
    (e.g. "3 days early").`,
  desc25: `Teachers view assignments with a similar layout but cannot edit content. They see a "Websites Used" section 
    listing sources used by the student.`,
  desc26: `Teachers can click on a website in "Websites Used" to highlight text copied from that source, revealing its origin 
    and contextual details.`,
  desc27: `Teachers can see fine-grained metadata, such as text origin and timestamps, for every character in an assignment, 
    highlighting student contributions and edits.`,
};