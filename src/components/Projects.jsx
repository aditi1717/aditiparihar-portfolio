import { useState } from "react"
import { projects } from "../../../Portfolio/src/Constants"

export default function Projects() {
    const [selectedProject,setSelectedProject]=useState(null);
    const handleOpenModel=(project)=>{
           setSelectedProject(project);
    }
     const handleCloseModel=()=>{
           setSelectedProject(null);
    }
  return (
    <section id='projects' className="mt-25 md:mt-40 max-w-[900px] px-6 mx-auto space-y-12">
          {/* section title */}
         <div className='text-center space-y-3'>
              <h1 className='text-2xl xs:text-3xl font-bold text-white md:text-4xl'>{'Projects'.toUpperCase()}</h1>
           <div className="h-1 w-28 bg-purple-500 mx-auto"></div>
           <p className='xs:text-base text-[14px]  text-gray-400  md:text-[17px] lg:text-lg font-bold'>A collection of my technical skills and expertise honed through various projects and experiences</p>
         </div>
 
         {/* projects container */}
         <div className="grid gap-6 sm:gap-4  xs:grid-cols-2 md:grid-cols-3 place-items-center px-1">
            {projects.map((project)=>{
                return(
                    <div key={project.id} className="h-full max-w-[350px] md:max-w-[230px]  text-center px-2 md:px-4 py-4 md:py-6 border border-white bg-gray-900  rounded-2xl shadow-2xl cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 space-y-8" onClick={() => handleOpenModel(project)}>
                        <div className=" rounded-2xl overflow-hidden">
                            <img src={project.image} alt={`${project.title} image`} className=" w-full object-cover "/>
                        </div>
                        <div className="space-y-6 xs:space-y-4 md:space-y-6">
                             <h3 className="text-xl md:text-2xl font-bold text-white ">{project.title}</h3>
                        <p className="line-clamp-3 text-sm md:text-base leading-7 text-gray-400 ">{project.description}</p>
                        <div className="space-x-2 space-y-2">
                          {
                            project.tags.map((tag,index)=>{
                                 return(
                            <span key={index} className="text-purple-500 bg-[#251F38] rounded-full text-xs font-semibold px-3 py-2 inline-block">{tag}</span>
                           )
                            })
                          }
                        </div>
                        </div>
                    </div>
                )
            })}
         </div>

         
         {/* modal conatiner */}

         {selectedProject && (
            <div className="bg-black/90  fixed inset-0  z-50 px-6  ">
               <div className="max-w-[900px] py-2 px-4 mx-auto h-dvh bg-gray-900 text-center space-y-2">
                    <div className="flex justify-end">
                        <button className=" text-white text-3xl font-bold hover:text-purple-500 cursor-pointer" onClick={handleCloseModel}> &times;</button>
                    </div>
                    <div className="space-y-3 sm:space-y-6 ">
                         <div className=" rounded-2xl overflow-hidden max-w-[630px] mx-auto">
                            <img src={selectedProject.image} alt={`${selectedProject.title} image`} className=" w-full object-cover "/>
                        </div>
                         <div className=" space-y-3  sm:space-y-4">
                             <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-white ">{selectedProject.title}</h3>
                        <p className="text-sm lg:text-base xs:leading-7 text-gray-400 ">{selectedProject.description}</p>
                        <div className="space-x-2 space-y-2">
                          {
                            selectedProject.tags.map((tag,index)=>{
                                 return(
                            <span key={index} className="text-purple-500 bg-[#251F38] rounded-full text-xs sm:text-sm font-semibold px-2 py-1 inline-block">{tag}</span>
                           )
                            })
                          }
                        </div>
                        <div className="flex gap-8">
                            <a href={selectedProject.github}
										target="_blank"
										rel="noopener noreferrer" className="bg-gray-800 hover:bg-purple-800 text-gray-400 rounded-2xl py-1 px-3 text-sm xs:text-base sm:text-xl lg:text-2xl font-semibold flex-1"
                                        >View Code</a>
                            <a href={selectedProject.webapp}
										target="_blank"
										rel="noopener noreferrer" className="rounded-2xl py-1 px-3 text-sm xs:text-base sm:text-xl lg:text-2xl font-semibold bg-purple-600 hover:bg-purple-800 text-white flex-1">View Live</a>
                        </div>
                        </div>
                    </div>
                   
            </div>
         </div>
         )}
    </section>
  )
}
