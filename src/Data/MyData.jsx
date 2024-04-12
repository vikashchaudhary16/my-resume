// import {
//   faHtml5,
//   faCss3,
//   faReact,
//   faNodeJs,
//   faAngular,
//   faPython,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
// import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Me from "../images/Me.PNG";
// import silicon from "../images/silicon.png";
// // import tcs from "../images/tcs.png";
// import sapient from "../images/sapient.jpeg";
// import kiit from "../images/kiit.jpeg";
// import champ from "../pdfs/Champ.pdf";
// import COLLABORATING from "../pdfs/DXC_COL_AWARD.pdf";
// import Oracle from "../pdfs/oracle-eCertificate.pdf";

export const myData = {
  avatar: Me,
  name: "Vikash Chaudhary",
  profession: "Full Stack Developer",
  company: "DXC Technology",
  companyStartDate: new Date("2015-08-24"),
  address: "Bangalore, India.",
  dateOfBirth: new Date("1991-01-16"),
  phone: "+91 903631917201",
  email: "vikashchoudhary16@gmail.com",
  noticePeriod: "90 days",
  servingNotice: false,
  lastWorkingDay: new Date("2022-04-30"),
  website: {
    name: "github.com/vikashchaudhary16/my-resume",
    link: "https://vikashchaudhary16.github.io/my-resume/#/resume",
  },
  social: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/vikashchaudhary16/",
      icon: <LinkedInIcon sx={{ color: "#0077b5" }} />,
    },
    {
      name: "github",
      url: "https://github.com/vikashchaudhary16",
      icon: <GitHubIcon sx={{ color: "#211f1f" }} />,
    }
  ],
  languages: [
    { name: "English", profeciency: "Fluent", rate: 4.5 },
    { name: "Hindi", profeciency: "Fluent", rate: 4 },
    // { name: "Odia", profeciency: "Native", rate: 4.5 },
  ],
  intrests: ["Cricket", "Watching TV"],
  bio: `My name is Vikash Chaudhary, and I work as an Senior Software Developer in DXC Technology Bangalore office. In April 2019, I began working at DXC Technology as a Senior Software Developer. I also have a Master degree in Master of Computer Application (MCA) from Bangalore Acharya Institute of Technology.
I'm a Dedicated and efficient full stack developer with 8.5+ year-experience, specialized in developing cutting-edge engineering Technologies such as React.Js, Node.Js, Express.Js, JavaScript, HTML5, CSS3, Angular-10., SQL, C# and .NET`,
  bioKeyPoints: [
    `Experience on using HTML5 and CSS3 to define the structure of the web page and to beautify the layout and appearance of the webpage.`,
    `Designed Responsive Designs using CSS3 to arrange all elements of a web page adapt to the screen size of different devices, such as PC, tablet, and mobile phone.`,
    `Good knowledge on all the string, array, and object built-in method (eg: forEach, filter, map,) closure and this keyword in JavaScript.`,
    "Experience on using ES6 standards properties to realize major functions and behavior of the webpage.",
    `Experience on using TypeScript adding additional syntax to JavaScript, and easy to catch errors in the editor.`,
    `Designed front-end framework with React.js Using class component and functional component. Very familiar with the properties of component, states, props.`,
    `Hands on using React Hooks (State Hook, Effect Hook and so on) to use state and lifecycle methods inside functional components.`,
    `Used React Axios to get Web APIs to transfer data from backend and update the states in the store of Redux.`,
    `Hands on using React-Router to manage the different React components path location.`,
    `Hand on experience using React UI libraries such as Material UI, Ant Design and Bootstrap, developing web more efficiently with high-quality and responsive components.`,
    `Developed Node.js and Express.js to run script in sever-side and to develop the server based applications and divert users to routes.`,
    `Developed SQL Database (MySQL) management systems to analysis, design and management of the business data and database.`,
    `Hands-on experience in NoSQL Database (MongoDB), data modeling and schema design.`,
    `Used GitHub to conduct modern distributed source code management.`,
    `Experience with common front-end development tools such as Babel, Webpack, NPM.`,
    `Experience using JavaScript test frameworks such as Jest, Mocha and Chai.`,
    `Experience with project management tools by using Agile, Scrum and Jira and able to troubleshoot problems on various projects.`,
    `Hands-on experience to develop on multiple operating systems like Ubuntu, MacOS and Windows.`,
  ],  
};
