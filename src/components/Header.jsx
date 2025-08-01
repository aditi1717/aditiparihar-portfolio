import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { navItems, mediaItems } from "../constants/Constants";

export default function Header() {
	const [isActive, setIsActive] = useState("");
	const [isClose, setIsClose] = useState(true);
	return (
		<header className="w-full bg-[#050414]/70  flex py-4 justify-between">
			<div className="sm:text-lg md:text-xl font-semibold">
				<span className="text-[#8245ec]">&lt;</span>
				<span className="text-white">Aditi</span>
				<span className="text-[#8245ec]">/</span>
				<span className="text-white">Parihar</span>
				<span className="text-[#8245ec]">&gt;</span>
			</div>
			<div
				className={isClose ? "" : "hidden"}
				onClick={() => {
					setIsClose(false);
				}}
			>
				<FiMenu
					className="text-white hover:text-[#8245ec] sm:hidden cursor-pointer "
					size={24}
				/>
			</div>
			<div
				className={`bg-[#050414]/70 sm:bg-transparent ${
					isClose ? "hidden" : "flex"
				} space-y-2 sm:space-y-0 flex-col px-6 py-2 pb-6 sm:p-0  sm:flex sm:flex-row absolute top-3 right-2 sm:static sm:flex-1 z-10`}
			>
				{/* list items  */}
				<ul className="sm:flex items-center justify-center  text-base  md:text-lg sm:gap-5 md:gap-10 sm:mx-auto space-y-2 sm:space-y-0">
					<li className="text-white hover:text-[#8245ec] sm:hidden cursor-pointer ">
						<IoClose
							size={24}
							className="ml-26"
							onClick={() => {
								setIsClose(true);
							}}
						/>
					</li>
					{navItems.map((navItem) => {
						return (
							<li
								className={`${
									isActive === navItem.id ? "text-[#8245ec]" : "text-[#D1D5DB]"
								} hover:text-white md:hover:text-[#8245ec] cursor-pointer text-center`}
								key={navItem.id}
								onClick={() => {
									setIsActive(navItem.id);
								}}
							>
								<a href={`#${navItem.id}`}>{navItem.label}</a>
							</li>
						);
					})}
				</ul>
				<div className="flex gap-2 sm:gap-3 md:gap-4 ">
					{mediaItems.map((mediaItem) => {
						return (
							<a
								key={mediaItem.id}
								className="text-[#D1D5DB] hover:text-white md:hover:text-[#8245ec] cursor-pointer"
								href={mediaItem.link}
								rel="noopener noreferror"
								target="_blank"
							>
								<mediaItem.component size={24} />
							</a>
						);
					})}
				</div>
			</div>
		</header>
	);
}
