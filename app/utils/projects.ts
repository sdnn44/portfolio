interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  buttonBackground?: string;
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "cs-archive",
    img: "cs-archive-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    buttonBackground: 'rgb(118, 78, 249)',
  },
  {
    id: 2,
    title: "messageme",
    img: "messageme-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    buttonBackground: "#0057be",
  },
  {
    id: 3,
    title: "twitchify",
    img: "twitchify-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    buttonBackground: "#6b21a8",
  },
  {
    id: 4,
    title: "task-manager",
    img: "cs-archive-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    buttonBackground: "#764ef9"
  },
  {
    id: 5,
    title: "Personal portfolio",
    img: "cs-archive-preview1.png",
    description: "LNikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
    buttonBackground: "#764ef9",
  },
];

export default portfolioProjects;