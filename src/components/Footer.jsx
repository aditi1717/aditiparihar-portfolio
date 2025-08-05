import { navItems } from "../constants/Constants";

import { mediaItems } from "../constants/Constants";
export default function Footer() {
  return (
    <footer className=' max-w-[430px] w-full p-6 flex flex-col items-center mx-auto space-y-4 pt-30 text-center'>
       <h3 className="text-purple-500 font-semibold text-xl sm:text-2xl">Aditi Parihar</h3>
       <ul className="flex justify-between w-full  gap-1 flex-wrap">
           {navItems.map((navItem) => {
                    return (
                      <li
                        className=' cursor-pointer text-white hover:text-[#8245ec] text-sm xs:text-base'
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
         <div className="flex gap-2 xs:gap-4">
                 {mediaItems.map((mediaItem) => {
                   return (
                     <a
                       key={mediaItem.id}
                       className="cursor-pointer text-white hover:text-[#8245ec]"
                       href={mediaItem.link}
                       rel="noopener noreferror"
                       target="_blank"
                     >
                       <mediaItem.component size={20} xs:size={24} />
                     </a>
                   );
                 })}
               </div>
               <p className="text-gray-400 text-sm sm:text-base">Made with ❤️ by Aditi Parihar</p>
    </footer>
  )
}
