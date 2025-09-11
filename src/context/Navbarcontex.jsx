
import React, { createContext, useState } from 'react'


export const Navcontex = createContext();
export const Navcolorcontex = createContext();

const Navbarcontex = ({children}) => {

    const [navOpen, setnavOpen] = useState(false)
    const [navcolor, setnavcolor] = useState('white')



  return (
    <Navcontex.Provider value={[navOpen, setnavOpen]}>
        
      <Navcolorcontex.Provider value={[navcolor, setnavcolor]}>
      {children}
      </Navcolorcontex.Provider>
        
    </Navcontex.Provider >
  )
}

export default Navbarcontex