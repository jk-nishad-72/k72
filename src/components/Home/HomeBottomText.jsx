
import React from 'react'
import { Link } from 'react-router'
import projects from '../../pages/projects'

const HomeBottomText = () => {
  return (
    <div className='font-[font1]  text-center b-0   '>
        <Link className='text-[6vw] text-white uppercase border-3  rounded-full px-4 pt-2      hover:border-[#d3fd50] hover:text-[#d3fd50] ' to='/projects'> projects</Link>
        <Link className='text-[6vw] text-white uppercase border-3  rounded-full px-4 pt-2 ml-6 hover:border-[#d3fd50] hover:text-[#d3fd50]  ' to='/agence'> agence</Link>
    </div>
  )
}

export default HomeBottomText