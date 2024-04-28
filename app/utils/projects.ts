import { IconType } from "react-icons";
import { SiAxios, SiEdotleclerc, SiExpress, SiFirebase, SiMongodb, SiMui, SiNextdotjs, SiNodedotjs, SiPrisma, SiPython, SiReact, SiReactquery, SiReactrouter, SiRedux, SiStyledcomponents, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  tech: IconType[];
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Personal portfolio",
    img: "portfolio-preview1.png",
    description: "This website serves as a portfolio to showcase my projects and provide insights into my background. The site features sections detailing my educational background, employment history, recent projects, and a contact area for further inquiries. The project was developed with Next.js 13, React 18, Tailwind CSS, leveraging Framer Motion and gsap for smooth animations.",
    tech: [SiNextdotjs, SiReactquery, SiTailwindcss],
  },
  {
    id: 2,
    title: "cs-archive",
    img: "cs-archive-preview1.png",
    description: "A website that aggregates previously scrapped information about player bans from Counter-Strike 1.6 servers from various sources and displays it intuitively in one place. Utilizing SteamAPI, the site presents essential user details, including account creation date, country of origin, and a summary of any bans, categorized by type. Data was collected using Python and Selenium, and the frontend was built with React 18.",
    tech: [SiPython, SiReact, SiRedux, SiReactrouter, SiFirebase, SiStyledcomponents, SiMui, SiExpress],
  },
  {
    id: 3,
    title: "messageme",
    img: "messageme-preview1.png",
    description: "The project involved the use of modern web technologies, such as Google Firebase and React, to provide an interactive chat environment in which messages can be transmitted in real time, regardless of the type of device being used. The application provides users with fundamental functions characteristic of popular instant messengers such as user lock, and notifications. Its design, as well as its preparation, has been targeted so that it can be classified as a progressive application (PWA).",
    tech: [SiReact, SiFirebase, SiReactrouter, SiRedux, SiReactquery, SiStyledcomponents, SiMui],
  },
  {
    id: 4,
    title: "twitchify",
    img: "twitchify-preview1.png",
    description: "A web application that allows users to easily display the most popular clips from the Twitch.tv platform, specifically those from their favorite creators. The use of twitch API in the project allows the user to easily view the most watched clips from a selected time period, or for a selected game. The project was created using Next.js 13, React 18, Tailwind CSS, Material UI and framer-motion for animation.",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiMui, SiAxios],
  },
  {
    id: 5,
    title: "task-manager",
    img: "cs-archive-preview1.png",
    description: "Intuitive application designed to help users efficiently manage their tasks. Users can easily add, delete, or edit tasks, as well as mark them as completed or important. The application enhances productivity by offering visual previews of tasks through both a pie chart and a calendar view. All these features are seamlessly integrated into a user-friendly dashboard, making task management both effective and visually appealing.",
    tech: [SiNextdotjs, SiReact, SiMongodb, SiStyledcomponents, SiPrisma, SiAxios],
  },
  {
    id: 6,
    title: "Personal portfolio",
    img: "cs-archive-preview1.png",
    description: "LNikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
  },
];

export default portfolioProjects;