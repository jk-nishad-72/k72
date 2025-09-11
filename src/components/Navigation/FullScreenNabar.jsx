
import React ,{useContext, useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Navcontex } from '../../context/Navbarcontex'


const FullScreenNabar = () => {

     const fullScreenNavlinkRef = useRef(null)


     const [navOpen, setnavOpen] = useContext(Navcontex)


      function gsapAnimation(){

        const tl = gsap.timeline()

        tl.to('.fullScreenNav',{
            display:'block',

        })
        tl.to('.staring',{

         height:'100%',
         stagger:{
          amount:-0.3
         },
     })
     
     tl.to('.link',{
        opacity:1,
        rotateX:0,
        stagger:{
          amount:0.3
         },
        })
        tl.to('.navLink',{
            opacity:1
        })

      }
   
      function gsapAnimationReverse(){

        const tl = gsap.timeline()

        tl.to('.link',{
            opacity:0,
            rotateX:90,
            stagger:{
                amount:0.1
            }
        })
        tl.to('.staring',{
            height:0,
            stagger:{
                amount:0.1
            }
        })
        tl.to(".navLink",{
            opacity:0
        })
        tl.to('.fullScreenNav',{
           display:'none'
        })
   

         
      }
    
  useGSAP(function(){

     if(navOpen){
        gsapAnimation()
     }else{
        gsapAnimationReverse()
     }
    
    
     
  },[navOpen])





    return (
        <div className='fullScreenNav z-100 hidden absolute overflow-hidden  h-screen w-full text-white  '>
            
              <div className='h-screen w-full fixed  '>

                        <div className='h-full w-full flex '>
                                <div className=' staring w-1/5  h-full bg-black' ></div>
                                <div className=' staring w-1/5  h-full bg-black' ></div>
                                <div className=' staring w-1/5  h-full bg-black' ></div>
                                <div className=' staring w-1/5  h-full bg-black' ></div>
                                <div className=' staring w-1/5  h-full bg-black' ></div>
                    </div>
              </div>


               <div ref={fullScreenNavlinkRef} className=' relative '>
                    <div className='navLink flex justify-between w-full p-5 items-start '>

                        <div className='cursor-pointer '>
                            <svg className='h-[50px] w-[120px] ' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
                            <path fill='white'  fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg> 
                    </div>

              <div
               onClick={()=>{ setnavOpen(false)}}
                className='h-25 w-25  relative cursor-pointer  ' >

                 <div className='h-35 w-[2px] bg-[#D3FD50] absolute -rotate-45 origin-top '></div>
                 <div className='h-35 w-[2px] bg-[#D3FD50] absolute rotate-45 right-0 origin-top '></div>

              </div>

                   </div>
                   
                    <div className='all_links  py-40 lg:py-10  '>

                        <div className='link  origin-top relative border-t-1 border-white font-[font2] '>

                            <h1 className=' lg:text-[8vw] text-5xl uppercase text-center leading-[0.8] py-3 '>Projets</h1>

                            <div className='moveLink  absolute text-black flex top-0 bg-[#D3FD50]'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout voir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout voir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout voir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout voir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                    </div>
                                </div>





                        </div>



                        <div className='link  origin-top relative border-t-1 border-white font-[font2] '>

                            <h1 className='lg:text-[8vw] text-5xl uppercase text-center leading-[0.8] py-3 '>Agence</h1>
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout savoir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage3.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout savoir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage3.jpg" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout savoir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage3.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour Tout savoir</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage3.jpg" alt="" />
                                    </div>
                                </div>

                        </div>
                        <div className='link  origin-top relative border-t-1 border-white font-[font2] '>

                            <h1 className='lg:text-[8vw] text-5xl uppercase text-center leading-[0.8] py-3 '>contact</h1>
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour envoyer un fax </h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour envoyer un fax</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour envoyer un fax</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>Pour envoyer un fax</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                                    </div>
                                </div>





                        </div>
                        <div className='link  origin-top relative border-y-1 border-white font-[font2] '>

                            <h1 className='lg:text-[8vw] text-5xl uppercase text-center leading-[0.8] py-3 '>blogue</h1>
                            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>lier less articles </h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage4.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>lier less articles</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage5.jpg" alt="" />
                                    </div>
                                    <div className='moveX flex items-center'>
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>lier less articles</h2>
                                        <video className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage4.jpg" alt="" />
                                        <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-5 pt-4 uppercase'>lier less articles</h2>
                                        <img className='lg:h-25 h-10 rounded-full shrink-0 lg:w-60 w-32 object-cover' src="/Images/navImage5.jpg" alt="" />
                                    </div>
                                </div>





                        </div>
                    </div>
               </div>

        </div>
    )
}

export default FullScreenNabar