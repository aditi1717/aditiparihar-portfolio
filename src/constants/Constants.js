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