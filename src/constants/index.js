import project3 from "../assets/projects/project-3.jpg";
import expressMinimalList from '../assets/projects/expressMinimalList.png';
import portfolio from '../assets/projects/portfolio.png';
import portfolio2 from '../assets/projects/portfolio2.png';
import portfolio3 from '../assets/projects/portfolio3.png';
import express2 from '../assets/projects/express2.png';
import express3 from '../assets/projects/express3.png';
import express4 from '../assets/projects/express4.png';
import landingMobile from '../assets/projects/Journo/landingMobile.ng'
import landingFull from '../assets/projects/Journo/landingFull.png'
import signInDesktop from '../assets/projects/Journo/signInDesktop.png'
import signUpMobile from '../assets/projects/Journo/signUpMobile.png'
import entryAndResponseDesktop from '../assets/projects/Journo/entryAndResponseDesktop.png'
import homeMobile  from '../assets/projects/Journo/homeMobile.png'
import logMoodMobile  from '../assets/projects/Journo/logMoodMobile.png'
import manageAccountClerk  from '../assets/projects/Journo/manageAccountClerk.png'
import logMoodDesktop from '../assets/projects/Journo/logMoodDesktop.png'

export const HERO_CONTENT = `With a Bachelor of Science in Informatics (w/ an emphasis in Software Engineering), expertise in full stack development and technologies such as JavaScript, React.js, ASP.NET, MySQL, Python, MongoDB, and Agile methodology, I strive to create solutions that bridge the digital divide. My experience includes developing complex web applications, optimizing user experiences, leveraging machine learning for actionable insights, and adhering to best coding practices for scalability and maintainability. Let's work together to build software that makes a difference.`;

export const ABOUT_TEXT = 'I want to help mitigate the gap between those with higher and lesser means through software development and information technology. As a child of immigrants from an underdeveloped country, this has been a bottleneck throughout my life and academic journey. Proper resource allocation in software development affects everyone and every project has the potential to create more accessible technologies—beneficial for those with fewer financial opportunities, individuals who are neurodivergent, and to address the impact of predatory algorithms. With a Bachelor of Science in Informatics, my experience includes working as a Full Stack Developer Intern and Client Service Advisor. Ive developed complex web applications, optimized user experiences, and leveraged machine learning for actionable insights, all while adhering to best coding practices. I am passionate about joining a team that values computing ethics and strives to create impactful, accessible software.';


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
    title: "Journo: AI-Powered Fullstack Journaling Web App",
    image: [entryAndResponseDesktop, landingMobile, landingFull, signInDesktop, signUpMobile, homeMobile, logMoodMobile,manageAccountClerk, logMoodDesktop],
    description:
      "This is a full-stack journaling application powered by AI for analyzing user mood and providing feedback based on journal entries. Built with Next.js, the app integrates the Gemini AI API to enhance user journaling experiences, provides robust & secure authentication with Clerk, and features a remote SQLite database hosted on Turso/LibSQL. Codebase: github.com/bmonten3/journo",
    technologies: ["Gemini Ai API", "Sqlite3", "NextJs", "TypeScript", "Clerk Auth", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    image: [portfolio, portfolio2, portfolio3],
    description:
      "The personal portfolio website you are currently viewing; showcasing projects, skills, and contact information. Deployed on https://bmontenegro-portfolio.pages.dev/",
    technologies: ["ReactJs", "TailwindCSS", "Node.js", "Vite",'GIT', "HTML/CSS/JS"],
  },
  {
    title: "CRUD Web Application - Express Minimal List",
    image: [expressMinimalList, express2, express3, express4],
    description:
      "Simple to-do list program leveraging express server side technologies, sqlite database, security features, and authentication implementation.",
    technologies: ["Node.js", "ExpressJs", "HTML/CSS/JS", "SQLite", 'Handlebars'],
  },
  {
    title: "MERN Full Stack Web Application - Expense Tracking - Pending Deployment",
    image: [project3],
    description: "Built a complete expense tracking application using the MERN Stack (MongoDB, Express, ReactJS, and Node.js). Set up the back-end with Node.js and Express, connecting it to a MongoDB database. Integrated CORS for secure API access and implemented user authentication for managing and analyzing expenses. Created a dynamic and interactive front-end with ReactJS.",
    technologies: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
  },
 
];

export const CONTACT = {
  address: "Phoenix, Arizona 85001 ",
  phoneNo: "+1 *** ***-****",
  email: "pending@example.com",
};
