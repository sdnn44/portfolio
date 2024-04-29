export interface ExperienceProps {
  id: number;
  img: string,
  role: string;
  grade?: string;
  company: string;
  date: string[];
  desc: string;
  skills?: string[];
}

const experiences: ExperienceProps[] = [
  {
    id: 0,
    img: "kul.png",
    role: "Computer Science - Master's Degree",
    grade: "4,751",
    company: "The John Paul II Catholic University of Lublin",
    date:[ "Oct 2021 - Sep 2023"],
    desc: "I possess advanced expertise and skills essential for innovative work across the domains of designing, programming, and testing applications. Proficient in contemporary programming languages and cutting-edge technologies, including mobile and web platforms, I bring comprehensive capabilities to the table. Furthermore, my experience extends to adeptly managing and designing databases, along with applying sophisticated techniques in artificial intelligence.",
  },
  {
    id: 1,
    img: "itlu.jpg",
    role: "Web Developer - Intern",
    company: "ITLU Sp. z o. o.",
    date: ["Aug 2020 - Oct 2020"],
    desc: "I developed web projects that aligned with the creative vision of the graphics department and adhered to marketing and SEO guidelines. My work involved creating responsive landing pages and web applications using my programming skills in JavaScript, HTML, and CSS. I leveraged popular frameworks and libraries, including Tailwind and Bootstrap, to ensure high-quality design and functionality. Additionally, I managed the deployment of WordPress-based websites on servers. I meticulously optimized and customized websites to cater to the unique requirements of clients, enhancing user satisfaction and engagement.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Bootstrap",
      "Tailwind CSS",
      "Wordpress",
      "Figma",
      "Github",
    ],
  },
  {
    id: 2,
    img: "kul.png",
    role: "Computer Science - Bachelor Degree",
    grade: "4,764",
    company: "The John Paul II Catholic University of Lublin",
    date: ["Oct 2018 - June 2021"],
    desc: "I have acquired extensive knowledge in data protection, cryptography, and advanced algorithmic methods. My technical skills are particularly strong in SQL, where I have advanced proficiency in designing relational databases for standard applications and administering database systems. Additionally, I am adept at applying design patterns, writing scripts, and developing web applications using modern frameworks. This diverse skill set allows me to tackle complex challenges in the field of information technology.",
  },
  {
    id: 3,
    img: "stella.jpg",
    role: "Junior Extruder Operator",
    company: "Stella",
    date: ["Apr 2018 - Oct 2018", "Jul 2019 - Oct 2019", "Jul 2021 - Oct 2021", "Jul 2022 - Oct 2022"],
    desc: "While my role wasn't directly related to IT, I gained valuable soft skills. As a production operator, I oversaw the manufacturing of plastic sleeves, subsequently molded into garbage bags by machines. I applied analytical thinking to continuously monitor the effectiveness of our operations, drawing appropriate conclusions. I effectively coordinated and organized the work of both local and international employees. Also creatively addressed challenges while prioritizing unique customer requirements. Ensuring meticulous attention to detail, I demonstrated the ability to collaborate seamlessly within diverse teams, facilitating the achievement of shared objectives.",
  },
  {
    id: 4,
    img: "komarek.jpg",
    role: "IT Service Engineer",
    company: "KOM-AREK",
    date: ["2016"],
    desc: "I was responsible for monitoring and maintaining the technical condition of computers, installations, and ICT devices. This included conducting repairs and performing maintenance on computer equipment and peripheral devices. I collaborated closely and systematically with superiors and other organizational units within the Company. Moreover, I ensured that all relevant documentation was properly maintained and updated as required.",
   
    // doc: "https://media.licdn.com/dms/image/D4D2DAQFlp60ZqHuaFQ/profile-treasury-image-shrink_1280_1280/0/1691180828512?e=1692381600&v=beta&t=mM5Y_NE5EPlQhez5FAN6NLVSKcO_Ojt_9Gq3mnFGkAQ",
  },
];

export default experiences;