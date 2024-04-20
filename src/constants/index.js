import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blubird,
  buyonia,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui/UX designer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Next js Developer (Junior)",
    company_name: "Buyonia Soft Limited",
    company_url: "https://buyoniasoft.com/",
    icon: buyonia,
    iconBg: "#383E56",
    date: "August 2022 - November 2022",
    points: [
      "Learn Vanilla Javascript.",
      "Developed CSR Application frontend using react.js.",
      "Developed SSR Application frontend using next.js.",
    ],
  },
  {
    title: "React & Next Developer",
    company_name: "Buyonia Soft Limited",
    company_url: "https://buyoniasoft.com/",
    icon: buyonia,
    iconBg: "#383E56",
    date: "August 2022 - June 2023",
    points: [
      "Performance optimization techniques.",
      "Debugging and troubleshooting skills.",
      "State management implementation (Redux).",
      "Reusable component design.",
      "Authentication and authorization",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Blubird Interactive LTD",
    company_url: "https://blubirdinteractive.com/",
    icon: blubird,
    iconBg: "#edf2f7",
    date: "July 2023 - present",
    points: [
      "SaaS Project management.",
      "Dynamic component management.",
      "Actively engaged with cross-functional teams, encouraging a culture of knowledge sharing and open communication.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with him was an incredible experience. I was amazed by the level of creativity and attention to detail that our web developer brought to our project. He truly transformed our vision into reality, exceeding our expectations.",
    name: "Hadd",
    designation: "Marketing Director",
    company: "Sunrise Tech",
    image: "/reviews/hadd.png",
  },
  {
    testimonial:
      "I had the pleasure of working with him, and I can confidently say that he is exceptional. His dedication to understanding our needs and delivering a tailored solution was remarkable. He went above and beyond to ensure our satisfaction.",
    name: "Marc",
    designation: "Operations Manager",
    company: "Blue Horizon Inc.",
    image: "/reviews/marc.png",
  },
  {
    testimonial:
      "It was an absolute pleasure working with him. His professionalism, expertise, and proactive communication made the entire process seamless and enjoyable. I highly recommend him for any web development project.",
    name: "Fares",
    designation: "Founder & CEO",
    company: "Crimson Innovations",
    image: "/reviews/fares.png",
  },
];

const projects = [
  {
    name: "FoodClub UK",
    description:
      "Foodclub is a member and partner based club where members can enjoy guaranteed discount from club partners. Club Member can get discount from club partner (restaurant, food shop, grocery and meat shop etc) all over the UK.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.foodclubuk.com/",
  },
  {
    name: "New Village Fish Bar",
    description:
      "Welcome to our online restaurant food order site! Discover delicious meals crafted by our talented chefs and enjoy easy online ordering for delivery or pickup. Join us for a culinary journey filled with flavor and convenience.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.villagefishbar.co.uk/",
  },
  {
    name: "Unique Taxi",
    description:
      "Unique Taxi is a locally owned luxury tour and transport company in Chippenham, near Castle Combe and Lacock villages. With unrivaled local knowledge, exceptional customer service, and reliability, we're a leading taxi and tour company.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://uniquetaxi.co.uk/",
  },
];

export { services, technologies, experiences, testimonials, projects };
