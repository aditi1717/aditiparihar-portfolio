import React from 'react'

export default function Education() {
  return (
    <section id='education' className='bg-custom-multi-gradient py-25 md:py-40 clip-path-custom w-full'>
        <div className='max-w-[900px] px-6 mx-auto space-y-12 text-center w-full'>
              {/* section title */}
         <div className='text-center space-y-3'>
              <h1 className='text-2xl xs:text-3xl font-bold text-white md:text-4xl'>{'Education'.toUpperCase()}</h1>
           <div className="h-1 max-w-50 bg-[#8245ec] mx-auto"></div>
           <p className='xs:text-base text-[14px]  text-gray-400  md:text-[17px] lg:text-lg font-bold'>My education has been a journey of learning and development. Here are the details of my academic background</p>
         </div>

         {/* education details */}
         <div className='flex px-1 gap-6 sm:gap-4 flex-wrap'>
          <div className="flex-1 min-w-[190px]  xs:min-w-[250px] p-2 xs:p-4 border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 space-y-3">
						<h3 className="text-lg xs:text-xl md:text-2xl font-bold text-white">
							Master's Degree
						</h3>
						<p className="text-xs xs:text-sm md:text-base text-gray-400">
							Completed my Master's of Computer Application from IPS
							Academy,Indore
						</p>
						<p className="text-xs xs:text-sm md:text-base text-gray-400">
							2023-2025|completed
						</p>
					</div>
           <div className="flex-1 min-w-[190px] xs:min-w-[250px] p-2 xs:p-4 border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 space-y-3">
						<h3 className="text-lg xs:text-xl md:text-2xl font-bold text-white">
							Bachelor's Degree
						</h3>
						<p className="text-xs  xs:text-sm md:text-base text-gray-400">
							Completed my Bachelor's in Computer Science from M.H
							college,Jabalpur
						</p>
						<p className="text-xs xs:text-sm md:text-base text-gray-400">
							2020-2023|completed
						</p>
					</div>
         </div>
 
        </div>
    </section>
  )
}
