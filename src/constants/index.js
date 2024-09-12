import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  mySQL,
  tailwind,
  postgreSQL,
  mongodb,
  git,
  springboot,
  docker,
  meta,
  pro,
  tesla,
  shopify,
  evehicle,
  adim,
  jwt,
  postman,
  cef01,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "mySQL",
    icon: mySQL,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "postgreSQL",
    icon: postgreSQL,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "springboot",
    icon: springboot,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "CUBIKSOFT TECHNOLOGY",
    icon: pro,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using Spring Boot and other related technologies.",
      "A Java Developer internship provides hands-on experience with Java programming, including working on real-world projects that enhance skills in core Java concepts, object-oriented programming (OOP), and Java frameworks like Spring and Hibernate.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I've known Hari for the past few months, and there are several qualities that really stand out. He is highly dedicated, consistently invests extra time and effort into learning new things, and has a strong ability to quickly grasp concepts. He possesses tremendous potential that is just waiting to be fully realized.",
    name: "Gokul",
    designation: "Full Stack Developer",
    company: "IIT Madras"
    
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp"
   
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    //image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-vehicle Bunk Finder",
    description:
      "This application is used to find charging bunk station for EVs, We can register new users, bunks and admin, We can also add new bunks and update old bunks",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: evehicle,
    source_code_link: "https://github.com/Hariprasath36/evehicle.git",
  },
  {
    name: "Admin and User Registration Api ",
    description:
      "This application is used to Register, Login and Logout, We can add new users and set it is a normal user or admin, After register user and admin can login to their respective page",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: adim,
    source_code_link: "https://github.com/Hariprasath36/Admin-and-User-Login.git",
  },
  {
    name: "JWT Authentication and Authorisation",
    description:
      "This application is fully based on security, In this application I used JWT to login the user, After register we run it in Postman and after login we can use JWT token to view the data",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: jwt,
    source_code_link: "https://github.com/Hariprasath36/sping_jwt.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
