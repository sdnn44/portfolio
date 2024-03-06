interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "cs-archive",
    img: "cs-archive-preview1.png",
    description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna.",
  },
  { id: 2, title: "messageme", img: "cs-archive-preview1.png", description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna." },
  { id: 3, title: "task-manager", img: "cs-archive-preview1.png", description: "Nikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna." },
  { id: 4, title: "Personal portfolio", img: "cs-archive-preview1.png", description: "LNikt nie lubi oszustów, prawda? Aplikacja została stworzona z jednoznacznym celem: wspierania uczciwej i sprawiedliwej rozgrywki dla szerokiej społeczności graczy. Strona pozwala na sprawdzenie Steam_ID gracza pod kątem banów za oszukiwanie. Użytkownik na podstawie Steam_ID gracza może sprawdzić, czy na konto została nałożona aktywna blokada permanentna." },
];

export default portfolioProjects;