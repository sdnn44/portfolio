import { IconType } from "react-icons";
import { SiCplusplus, SiCss3, SiFirebase, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMui, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";

interface Skill {
    id: number;
    title: string;
    Icon: IconType;
}
const skills: Skill[] = [
    {
        id: 1,
        title: "React.js",
        Icon: SiReact
    },
    {
        id: 2,
        title: "Next.js",
        Icon: SiNextdotjs
    },
    {
        id: 3,
        title: "HTML5",
        Icon: SiHtml5
    },
    {
        id: 4,
        title: "CSS3",
        Icon: SiCss3
    },
    {
        id: 5,
        title: "Javascript",
        Icon: SiJavascript
    },
    {
        id: 6,
        title: "Typescript",
        Icon: SiTypescript
    },
    {
        id: 7,
        title: "Node.js",
        Icon: SiNodedotjs
    },
    {
        id: 8,
        title: "Python",
        Icon: SiReact
    },
    {
        id: 9,
        title: "Java",
        Icon: FaJava
    },
    {
        id: 10,
        title: "C++",
        Icon: SiCplusplus
    },
    {
        id: 11,
        title: "MongoDB",
        Icon: SiMongodb
    },
    {
        id: 12,
        title: "Firebase",
        Icon: SiFirebase
    },
    {
        id: 13,
        title: "Redux",
        Icon: SiRedux
    },
    {
        id: 14,
        title: "Tailwind CSS",
        Icon: SiTailwindcss
    },
    {
        id: 15,
        title: "MUI",
        Icon: SiMui
    },
    {
        id: 15,
        title: "GIT",
        Icon: SiGit
    },
];

export default skills;