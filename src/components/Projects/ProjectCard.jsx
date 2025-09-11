
import React from 'react'

const ProjectCard = (props) => {
  return (
   <>
    <div className='lg:w-1/2 h-full overflow-hidden group transition-all rounded-none hover:rounded-[50px]  relative ' >
       <img className='h-full w-full object-cover  ' src={props.image1} alt="" />
       <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 left-0  flex items-center justify-center h-full w-full bg-black/15 '>
         <h2 className='uppercase lg:text-5xl md:text-4xl text-2xl font-[font2] text-white border-2 border-white pt-2 px-5  rounded-4xl  ' >voir le projets </h2>
       </div>
    </div>
     <div className='lg:w-1/2 h-full overflow-hidden group transition-all rounded-none hover:rounded-[50px]  relative ' >
       <img className='h-full w-full object-cover   ' src={props.image2} alt="" />
       <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 left-0  flex items-center justify-center h-full w-full bg-black/15 '>
         <h2 className='uppercase lg:text-5xl md:text-4xl text-2xl font-[font2] text-white border-2 border-white pt-2 px-5  rounded-4xl  ' >voir le projets </h2>
       </div>
    </div>

   </>
  )
}

export default ProjectCard