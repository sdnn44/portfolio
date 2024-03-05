interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
}

const portfolioProjects: Project[] = [
  { id: 1, title: "cs-archive", img: "/bg-2.jpg", description: "Lorem ipsum" },
  { id: 2, title: "messageme", img: "", description: "Lorem ipsum" },
  { id: 3, title: "task-manager", img: "", description: "Lorem ipsum" },
  { id: 4, title: "Personal portfolio", img: "", description: "Lorem ipsum" },
];

export default portfolioProjects;