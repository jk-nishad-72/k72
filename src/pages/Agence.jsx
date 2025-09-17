
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'



const Agence = () => {

  const ImageDivuseRef = useRef(null);
  const imageRef = useRef(null)

  const imageArray = [

    '/Images/image1.jpg',
    '/Images/image2.jpg',
    '/Images/image3.jpg',
    '/Images/image4.jpg',
    '/Images/image5.jpg',
    '/Images/image6.jpg',
    '/Images/image7.jpg',
    '/Images/image8.jpg',
    '/Images/image9.jpg',
    '/Images/image10.jpg',
    '/Images/image11.jpg',
    '/Images/image12.jpg',
    '/Images/image13jpg.jpg',
    '/Images/image14.jpg',
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {

    gsap.to(ImageDivuseRef.current, {
      scrollTrigger: {
        trigger: ImageDivuseRef.current,
        start: 'top 28%',
        end: 'top -100%',
        scrub: true,
        pin: true,
        onUpdate: function (elem) {

          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray - 1;
          }

          imageRef.current.src = imageArray[imageIndex]

        }


      }
    })

  })


  return (

    <>

      <div className='py-1 '>

        <div className='section1 relative  '>

          <div ref={ImageDivuseRef} className='absolute lg:h-[20vw] h-30 w-25 lg:w-[15vw]  overflow-hidden  lg:top-[28vh] top-10   left-[30vw] rounded-2xl '>
            <img ref={imageRef} className='object-cover h-full w-full  ' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
          </div>
        </div>
        <div className='section2'>

          <div className='font-[font2] relative'>
            <h1 className=' text-center lg:text-[20vw] text-6xl  leading-[17vw] uppercase lg:mt-[55vh] mt-[40vh] ' > Soixan7e <br />  Douze </h1>
          </div>
          <div className='lg:pl-[40%] w-full mt-[15vh] p-3 text-left font-[font2] '>

            <p className='lg:text-5xl text-lg  h-screen  '>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Notre curiosité nourrit notre créativité.
              On reste humbles et on dit non aux gros egos,
              même le vôtre. Une marque est vivante. Elle a des valeurs,
              une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>

      </div>
    </>

  )
}


export default Agence