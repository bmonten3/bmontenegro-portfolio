import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import expressMinimalList from '../assets/projects/expressMinimalList.png';
import porftolio from '../assets/projects/portfolio.png';
import reactCalc from '../assets/projects/reactCalc.png';

export const HERO_CONTENT = `With a Bachelor of Science in Informatics and expertise in full stack development and technologies such as JavaScript, React.js, ASP.NET, MySQL, Python, MongoDB, and Agile methodology, I strive to create solutions that bridge the digital divide. My experience includes developing complex web applications, optimizing user experiences, leveraging machine learning for actionable insights, and adhering to best coding practices for scalability and maintainability. Let's work together to build software that makes a difference.`;

export const ABOUT_TEXT = 'I want to help mitigate the gap between those with higher means and lesser means through software development and information technology. As a child of immigrants from an underdeveloped country, this has been a bottleneck throughout my life and academic journey. Proper resource allocation in software development affects everyone and every project has the potential to create more accessible technologies—beneficial for those with fewer financial opportunities, individuals who are neurodivergent, and to address the impact of predatory algorithms. With a Bachelor of Science in Informatics, my experience includes working as a Full Stack Developer Intern and Client Service Advisor. Ive developed complex web applications, optimized user experiences, and leveraged machine learning for actionable insights, all while adhering to best coding practices. I am passionate about joining a team that values computing ethics and strives to create impactful, accessible software.';


export const EXPERIENCES = [
  {
    year: "January 2023 - December 2023",
    role: "Full Stack Developer",
    company: "Bit Space Development Ltd.",
    description: `Contributed to the development of an ongoing analytics dashboard project at Bit Space Development Ltd., utilizing React.js, Express, and .NET for front-end and back-end development. Implemented data visualization features and real-time updates, optimized MySQL performance, and collaborated with UI/UX designers in Adobe XD. Employed best coding practices, including component-based architecture in React.js, SOLID principles in .NET, and RESTful API design with Express. Actively participated in Agile processes to ensure continuous delivery and iterative improvement.`,
    technologies: ["HTML/CSS/JS", "React.js", "Node.js", "ASP.NET"],
  },
  {
    year: "August 2023 - Present",
    role: "Client Service Advisor",
    company: "First Citizen's Bank",
    description: `Assisted corporate clients with a wide range of bank products, including depository, cash management, investment, and international products. Offered technical support on various platforms, conducted walkthrough sessions for special corporate finance reporting, and addressed troubleshooting for online banking tools, payment modules, and QuickBooks. Provided exceptional corporate/client support via email and phone channels, resolving inquiries on general bank requests, bank products, card servicing, and technical issues.`,
    technologies: ["CRM", "QuickBooks", "Dynamics", "Excel"],
  },
  {
    year: "January 2022 - August 2023",
    role: "Xbox/Surface Technical Support Lead",
    company: "Microsoft",
    description: `Facilitated direct engagement between internal development, engineering teams, and advocates, resulting in faster resolution of complex issues and better communication. Provided call center-based support to advanced advocates, driving key KPIs such as first call resolution and quality goals for Microsoft and Xbox products/policy. Managed a team of documentation administrators and implemented processes to improve documentation accuracy and completeness. Developed and implemented strategies to increase access to specialized tools for advocates, resulting in more efficient issue resolution and higher customer satisfaction.`,
    technologies: ["Cisco", "Jira/Azure", "CRMS", "Excel"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: porftolio,
    description:
      "The personal portfolio website you are currently viewing; showcasing projects, skills, and contact information.",
    technologies: ["ReactJs", "TailwindCSS", "Node.js", "Vite",'GIT', "HTML/CSS/JS"],
  },
  {
    title: "CRUD Web Application - Express Minimal List",
    image: expressMinimalList,
    description:
      "Simple to-do list program leveraging express server side technologies, sqlite database, security features, and authentication implementation.",
    technologies: ["Node.js", "ExpressJs", "HTML/CSS/JS", "SQLite", 'Handlebars'],
  },
  {
    title: "Pending",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Deployed ReactJs Calculator",
    image: reactCalc,
    description:
      "This calculator uses NodeJS and ReactJs to quickly mock up fully functional calculations with a very modern and responsive design. The CSS does a lot with little effort. Utilizing GIT version control, the app is hosted on Cloudflare pages with npm build commands and configurations. Deployed at https://bmonten3-reactjscalculator.pages.dev/",
    technologies: ["HTML", "CSS", "React.js", "CloudFlarePages", "GIT"],
  },
];

export const CONTACT = {
  address: "Phoenix, Arizona 85001 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
