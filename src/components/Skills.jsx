import { skillsInfo } from "../constants/Constants";
// import Tilt from "react-parallax-tilt";

export default function Skills() {
  return (
    <section className='bg-custom-multi-gradient py-40 clip-path-custom'>
        <div className='max-w-[900px] px-6 mx-auto text-center space-y-12'>
           
           {/* section title */}
         <div className='text-center space-y-3'>
              <h1 className='text-2xl xs:text-3xl font-bold text-white md:text-4xl'>{'Skills'.toUpperCase()}</h1>
           <div className="h-1 w-28 bg-[#8245ec] mx-auto"></div>
           <p className='xs:text-base text-[14px]  text-gray-400  md:text-[17px] lg:text-lg font-bold'>A collection of my technical skills and expertise honed through various projects and experiences</p>
         </div>

         {/* skills categories*/}
         <div className="flex  flex-wrap justify-center gap-3 ">
           {skillsInfo.map((category)=>{
           return ( <div key={category.title} className="space-y-4 px-1 xs:px-2 py-4 min-h-[194px] max-w-[450px] min-w-[200px] xs:min-w-[316px] lg:min-w-[406px] flex-1 bg-gray-900 rounded-2xl border border-white  shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                 <h2 className="text-gray-400 text-2xl xs:text-3xl font-bold md:text-4xl'">{category.title}</h2>
                 <div className="grid grid-cols-2 lg:grid-cols-3 gap-1">
                   {
                     category.skills.map((skill)=>{
                        return (<div key={skill.name} className="p-2 flex justify-center gap-1/2 xs:gap-1 items-center border-2 border-gray-700 rounded-4xl bg-transparent ">
                            <img src={skill.logo} alt={`${skill.logo} logo`} className="w-6 h-6 xs:w-8 xs:h-8" />
                            <span className="text-gray-300 text-xs sm:text-sm font-semibold">{skill.name}</span>
                        </div>)
                     })
                   }
                 </div>
            </div>)
           })}
         </div>
       </div>
    </section>
   
  )
}
