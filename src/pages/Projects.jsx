
import React from 'react'
import ProjectCard from '../components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = () => {

   const projects = [
    {
    image1:'/Images/projetsimg1.jpg',
    image2:'/Images/projetsimg2.jpg',
   },
    {
    image1:'/Images/projetsimg3.jpg',
    image2:'/Images/projetsimg4.jpg',
   },
    {
    image1:'/Images/projetsimg5.jpg',
    image2:'/Images/projetsimg6.jpg',
   },
    {
    image1:'/Images/projetsimg7.jpg',
    image2:'/Images/projetsimg8.jpg',
   },
   
  ]


   gsap.registerPlugin(ScrollTrigger);

   useGSAP(function(){

     gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        
        trigger:'.lol',
        start:'top 100%',
        end:'top -300%',
        scrub:true,


      }


     })

     
   })


  return (
    <div>

       <div>
        <h1 className=' lg:text-[13vw] text-7xl font-[font2] uppercase  mt-80 '> projets  </h1>  
       </div>
       
       <div className='-lg:-mt-15 lol'>
         {projects.map((elem,idx)=>{
          return <div key={idx}  className='hero w-full lg:h-[550px] mb-4 p-2 flex lg:flex-row flex-col  lg:gap-4 gap-2 ' >
           <ProjectCard  image1 ={elem.image1} image2 ={elem.image2} /> 
        </div>
         })}
       </div>


    </div>
  )
}

export default projects