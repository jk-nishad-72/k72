import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1]  lg:mt-0 mt-90    text-center  '>



            <p className=' absolute lg:right-5 lg:w-75 lg:bottom-40 right-1 text-[3.5vw] w-65 bottom-30 text-left lg:text-sm  '>
               &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait. </p>

            <div className='lg:leading-[9vw] leading-[13vw]   uppercase   lg:text-[9vw] text-[11vw]   flex items-center justify-center  '>L'étincelle </div>
            <div className='lg:leading-[9vw] leading-[13vw]   uppercase  lg:text-[9vw] text-[11vw]  flex items-center justify-center   '>
                qui
                <div className=' w-[16vw] h-[7.5vw] overflow-hidden rounded-full '>
                    < Video />
                </div>
                génère
            </div>
            <div className='lg:leading-[9vw] leading-[13vw]  uppercase   lg:text-[9vw] text-[11vw]  flex items-center justify-center  '>la créativité</div>

        </div>
    )
}

export default HomeHeroText