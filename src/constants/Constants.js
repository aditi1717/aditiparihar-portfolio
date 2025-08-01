//    header section icons

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";

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
