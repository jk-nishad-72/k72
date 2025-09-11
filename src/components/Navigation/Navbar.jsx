
import React , {useContext, useEffect, useRef} from 'react'
import { Navcolorcontex, Navcontex } from '../../context/Navbarcontex'
import { useLocation } from 'react-router'


const Navbar = () => {


   const navgreenRef = useRef(null)
   const menuRef1 = useRef(null)
   const menuRef2 = useRef(null)

    const [navOpen,setnavOpen] = useContext(Navcontex)
    const [navcolor, setnavcolor]=  useContext(Navcolorcontex)

         const locate = useLocation().pathname;

        //  console.log(locate)

        useEffect(function(){

          if(locate == '/projects' || locate == '/agence'){

             setnavcolor('black')

          }else{
             setnavcolor('white')
            
          }

          })
  return (
    <div className='w-screen top-0 flex fixed z-20 justify-between  '>

       <div className=' lg:w-34 lg:p-3 px-2 py-2 w-28 '> 
      <svg className='h-full w-full ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
            <path fill={navcolor}  fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
        </svg>

       </div>

       <div 
        onClick={()=>{
          setnavOpen(true)
        }}
        onMouseEnter={()=>{
            
             navgreenRef.current.style.height = '100%'
             menuRef1.current.style.backgroundColor = 'black'
             menuRef2.current.style.backgroundColor = 'black'

             
         
       }} 
       onMouseLeave={()=>{
             navgreenRef.current.style.height = '0%'
             menuRef1.current.style.backgroundColor = 'white'
             menuRef2.current.style.backgroundColor = 'white'

       }}
       className=' bg-black lg:h-13 lg:w-60 relative  h-10 w-45 '> 

        <div ref={navgreenRef} className='bg-[#d3fd50] cursor-pointer transition-all  h-0 w-full absolute top-0 '> </div>


         <div className='px-8 py-5 flex flex-col gap-1 items-end z-50 '>
          <div ref={menuRef1} className=' z-50 lg:h-0.5 lg:w-14 h-0.5 w-10 bg-[#e2dede] '></div>
         <div   ref={menuRef2} className='z-50 lg:h-0.5 lg:w-7 h-0.5 w-5 bg-[#e2dede] '></div>
         </div>
         <div>

         </div>

          

       </div>


  
    </div>
  )
}

export default Navbar