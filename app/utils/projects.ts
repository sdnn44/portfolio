import { IconType } from "react-icons";
import { SiNextdotjs, SiReact, SiReactquery, SiSupabase, SiTailwindcss } from "react-icons/si";

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
    description: "LNikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
  },
  {
    id: 2,
    title: "cs-archive",
    img: "cs-archive-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
  },
  {
    id: 3,
    title: "messageme",
    img: "messageme-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
  },
  {
    id: 4,
    title: "twitchify",
    img: "twitchify-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
  },
  {
    id: 5,
    title: "task-manager",
    img: "cs-archive-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
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