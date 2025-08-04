import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { navItems, mediaItems } from "../constants/Constants";

export default function Header() {
  const [isActive, setIsActive] = useState("");
  const [isClose, setIsClose] = useState(true);
  return (
   <header className="w-full bg-[#050414]/70 z-20 sticky top-0 backdrop-blur-md ">
     <div className="relative  flex max-w-[900px] px-6 mx-auto justify-between py-4 ">
      <div className="text-lg font-semibold md:text-xl">
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
          className="cursor-pointer text-white hover:text-[#8245ec] sm:hidden"
          size={24}
        />
      </div>
      <div
        className={`bg-[#050414]/70 sm:bg-transparent  ${
          isClose ? "hidden" : "flex"
        } absolute top-1 right-0 flex-col space-y-2 px-10 py-8 sm:static sm:flex sm:flex-1 sm:flex-row sm:space-y-0 sm:p-0`}
      >
        {/* list items  */}
        <ul className="relative items-center justify-center space-y-2 text-base font-semibold sm:mx-auto sm:flex sm:gap-5 sm:space-y-0 md:gap-10 md:text-[17px] lg:text-lg">
          <li className="cursor-pointer text-[#D1D5DB] hover:text-[#8245ec] sm:hidden">
            <IoClose
              size={24}
              className="absolute -top-5 -right-5"
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
                } cursor-pointer text-center hover:text-white md:hover:text-[#8245ec]`}
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
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          {mediaItems.map((mediaItem) => {
            return (
              <a
                key={mediaItem.id}
                className="cursor-pointer text-[#D1D5DB] hover:text-white md:hover:text-[#8245ec]"
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
    </div>
   </header>
  );
}
