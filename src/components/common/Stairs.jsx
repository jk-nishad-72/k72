
import React,{useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router'

const Stairs = (props) => {

    const currentPath = useLocation().pathname
    
  const starUseRef = useRef(null)
 
   const pageRef = useRef(null)

  useGSAP(function(){

    const tl = gsap.timeline()

    tl.to(starUseRef.current,{
      display:'block'
     })
     tl.from('.stair',{
         height:0,
         stagger:{
          amount:-0.25
         },
     })
     tl.to('.stair',{
       y:'100%',
       stagger:{
          amount:-0.25
         },
     })
     tl.to(starUseRef.current,{

      display:'none'

     })
     tl.to('.stair',{
       y:'0%',
       
     })

     gsap.from(pageRef.current,{
        opacity:0,
        delay:1.2,
     })
     
  },[currentPath])

//   console.log(props.children)

  return (
    
     <div>
         <div ref={starUseRef}  className='h-screen w-full fixed z-10 top-0 '>
          
      <div className='h-full w-full flex '>
     <div className='stair w-1/5  h-full bg-black' ></div>
     <div className='stair w-1/5  h-full bg-black' ></div>
     <div className='stair w-1/5  h-full bg-black' ></div>
     <div className='stair w-1/5  h-full bg-black' ></div>
     <div className='stair w-1/5  h-full bg-black' ></div>
    </div>

     </div>

     <div ref={pageRef} >

        {props.children}
     </div>
     </div>

  )
}

export default Stairs