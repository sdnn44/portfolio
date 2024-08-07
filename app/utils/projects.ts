import { IconType } from "react-icons";
import { SiAxios, SiEdotleclerc, SiExpress, SiFirebase, SiFramer, SiInertia, SiLaravel, SiMongodb, SiMui, SiNextdotjs, SiNodedotjs, SiPhpmyadmin, SiPrisma, SiPython, SiReact, SiReactquery, SiReactrouter, SiRedux, SiSelenium, SiStyledcomponents, SiSupabase, SiTailwindcss, SiTypescript, SiVite, SiVuedotjs } from "react-icons/si";

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  tech: IconType[];
  github: string;
  livedemo: string;
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Personal portfolio",
    img: "portfolio-preview1.png",
    description: "This website serves as a portfolio to showcase my projects and provide insights into my background. The site features sections detailing my educational background, employment history, recent projects, and a contact area for further inquiries. The project was developed with Next.js 13, React 18, Tailwind CSS, leveraging Framer Motion and gsap for smooth animations.",
    tech: [SiNextdotjs, SiReactquery, SiTailwindcss],
    github: "https://github.com/sdnn44/portfolio",
    livedemo: "https://slajdev.vercel.app/",
  },
  {
    id: 2,
    title: "cs-archive",
    img: "cs-archive-preview1.png",
    description: "A website that aggregates previously scrapped information about player bans from Counter-Strike 1.6 servers from various sources and displays it intuitively in one place. Utilizing SteamAPI, the site presents essential user details, including account creation date, country of origin, and a summary of any bans, categorized by type. Data was collected using Python and Selenium, and the frontend was built with React 18.",
    tech: [SiPython, SiReact, SiRedux, SiReactrouter, SiFirebase, SiStyledcomponents, SiMui, SiExpress],
    github: "https://github.com/sdnn44/cs-archive",
    livedemo: "https://cs-archive.vercel.app/",
  },
  {
    id: 3,
    title: "messageme",
    img: "messageme-preview1.png",
    description: "The project involved the use of modern web technologies, such as Google Firebase and React, to provide an interactive chat environment in which messages can be transmitted in real time, regardless of the type of device being used. The application provides users with fundamental functions characteristic of popular instant messengers such as user lock, and notifications. Its design, as well as its preparation, has been targeted so that it can be classified as a progressive application (PWA).",
    tech: [SiReact, SiFirebase, SiReactrouter, SiRedux, SiReactquery, SiStyledcomponents, SiMui],
    github: "https://github.com/sdnn44/messageme",
    livedemo: "https://messagemenow.vercel.app/login",
  },
  {
    id: 4,
    title: "twitchify",
    img: "twitchify-preview1.png",
    description: "A web application that allows users to easily display the most popular clips from the Twitch.tv platform, specifically those from their favorite creators. The use of twitch API in the project allows the user to easily view the most watched clips from a selected time period, or for a selected game. The project was created using Next.js 13, React 18, Tailwind CSS, Material UI and framer-motion for animation.",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiMui, SiAxios],
    github: "https://github.com/sdnn44/twitchify",
    livedemo: "https://twitchify.vercel.app/",
  },
  {
    id: 5,
    title: "task-manager",
    img: "taskmanager-preview1.png",
    description: "Intuitive application designed to help users efficiently manage their tasks. Users can easily add, delete, or edit tasks, as well as mark them as completed or important. The application enhances productivity by offering visual previews of tasks through both a pie chart and a calendar view. All these features are seamlessly integrated into a user-friendly dashboard, making task management both effective and visually appealing.",
    tech: [SiNextdotjs, SiReact, SiMongodb, SiStyledcomponents, SiPrisma, SiAxios],
    github: "https://github.com/sdnn44/task-manager",
    livedemo: "#",
  },
  {
    id: 6,
    title: "admin-helper",
    img: "admindashboard-preview1.png",
    description: "An application used to count game time and the number of server administration bans. The data is scraped from various sources and automatically added to the database.",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiFirebase, SiAxios, SiTailwindcss],
    github: "https://github.com/sdnn44/admin-summary",
    livedemo: "https://strefaskilla-helper.vercel.app",
  },
  {
    id: 7,
    title: "advanced admin-helper",
    img: "codmoddashboard-preview.png",
    description: "An extended application that allows you to summarize the work of admins. It has been extended with the ability to add, edit and delete admins directly from a web browser. An account system has also been added, allowing the user to create an account and use all the application's functionalities.",
    tech: [SiNextdotjs, SiReact, SiTypescript, SiFirebase, SiAxios, SiTailwindcss, SiLaravel, SiPhpmyadmin],
    github: "https://github.com/sdnn44/advanced-admin-summary",
    livedemo: "https://codmod-summary.vercel.app/",
  },
  {
    id: 8,
    title: "chatbox-tracker",
    img: "chatbox-tracker.png",
    description: "An application that allows users to keep track of the messages they send. In addition to messages for individuals, a leaderboard has been created with the people with the highest number of messages sent.",
    tech: [SiReact, SiTailwindcss, SiVite, SiFirebase, SiPython, SiSelenium],
    github: "https://github.com/sdnn44/chatbox-tracker",
    livedemo: "https://chatbox-tracker.vercel.app/",
  },
  {
    id: 9,
    title: "clonestagram",
    img: "clonestagram.png",
    description: "A web application written along the lines of the well-known Instagram app. Users can add posts, edit them, add reactions under them, and comment on other people's posts.",
    tech: [SiVuedotjs, SiInertia, SiLaravel, SiPhpmyadmin, SiTailwindcss, SiVite],
    github: "https://github.com/sdnn44/clonestagram",
    livedemo: "https://github.com/sdnn44/clonestagram",
  },
];

export default portfolioProjects;