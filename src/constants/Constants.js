//    1 header section icons

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

//    2 skills section logo
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";

import reduxLogo from "../assets/tech_logo/redux.png";

import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";

import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";

import cLogo from "../assets/tech_logo/c.png";

import javaLogo from "../assets/tech_logo/java.png";

import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";

import figmaLogo from "../assets/tech_logo/figma.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";

//    3 project section logo
import foodieHamburgerLogo  from "../assets/project_logo/foodie-humburger-menu.png";
import restCountriesLogo from "../assets/project_logo/rest-country-api.png";
import shoeCompanyLogo from "../assets/project_logo/shoe-company.png";
   



// 1   header section

//  navbar items
export const navItems = [
	{
		id: "about",
		label: "About",
	},
	{
		id: "skills",
		label: "Skills",
	},
	{
		id: "projects",
		label: "Projects",
	},
	{
		id: "education",
		label: "Education",
	},
];

// media items
export const mediaItems = [
	{
		id: "github",
		component: FaGithub,
		link: "https://github.com/aditi1717",
	},
	{
		id: "linkedin",
		component: FaLinkedin,
		link: "https://www.linkedin.com/in/aditi-parihar-ba6b33248",
	},
	{
		id: "mail",
		component: IoIosMail,
		link: "mailto:aditiparihar179@gmail.com",
	},
	{
		id: "instagram",
		component: FaInstagram,
		link: "https://www.instagram.com/aditi_1810",
	},
];


//    2 skills section

// tech items
export const skillsInfo = [
	{
		title: "Frontend",
		skills: [
			{ name: "HTML", logo: htmlLogo },
			{ name: "CSS", logo: cssLogo },
			{ name: "Javascript", logo: javascriptLogo },
			{ name: "React Js", logo: reactjsLogo },
			{ name: "Redux", logo: reduxLogo },
			{ name: "Tailwind css", logo: tailwindcssLogo },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node Js", logo: nodejsLogo },
			{ name: "Express Js", logo: expressjsLogo },
			{ name: "MySQL", logo: mysqlLogo },
			{ name: "MangoDB", logo: mongodbLogo },
		],
	},
	{
		title: "Languages",
		skills: [
			{ name: "C", logo: cLogo },
			{ name: "Java", logo: javaLogo },
			{ name: "Javascript", logo: javascriptLogo },
		],
	},
	{
		title: "Tools",
		skills: [
			{ name: "Git", logo: gitLogo },
			{ name: "GitHub", logo: githubLogo },
			{ name: "VS Code", logo: vscodeLogo },
			{ name: "Netlify", logo: netlifyLogo },
			{ name: "Figma", logo: figmaLogo },
		],
	},
];



// 3 projects section

export const projects = [
	{
		id: 0,
		title: "Rest Countries Explorer",
		description:
			"An interactive and visually appealing React.js web app that allows users to explore detailed information about countries from around the world. Using the REST Countries API, users can search, filter by region, and view key details such as population, capital, flags, and bordering countries. Built with responsiveness and modern UI principles, this project offers a smooth and engaging experience for geography enthusiasts and curious minds alike.",
		image: restCountriesLogo,
		tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
		github: "https://github.com/aditi1717/rest-countries-api-project",
		webapp: "https://rest-country-aditi-app.netlify.app/", // replace with actual live link if available
	},
	{
		id: 1,
		title: "Foodie Hamburger Menu",
		description:
			"A visually appealing and responsive frontend web page built using HTML, CSS & JavaScript. Showcases a dynamic hamburger menu design where users can navigate through sections like Top Picks, Stunner Menu, New Foodie Collection, and Deal of the Day. Includes smooth menu toggle animation and mobile‑first layout.",
		image: foodieHamburgerLogo,
		tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
		github: "https://github.com/aditi1717/Foodie-humburger-project",
		webapp: "https://foodie-humburger-menu.netlify.app/",
	},
	{
		id: 2,
		title: "Shoe Company Showcase",
		description:
			"A modern and responsive frontend website for a fictional shoe brand, built using HTML, Tailwind CSS, and JavaScript. It features clean product layouts, smooth hover effects, and a mobile-first design approach powered by utility-first Tailwind classes. Perfect for showcasing ecommerce design skills.",
		image: shoeCompanyLogo,
		tags: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX"],
		github: "https://github.com/aditi1717/shoe-company-project",
		webapp: "https://aditi-shoe-company.netlify.app/",
	},
];