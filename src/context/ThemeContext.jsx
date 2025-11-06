import React, { createContext, useState } from 'react'


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
 const [isDarkMode , toggleDarkMode] = useState(\

    
 )

  return (
   <>
   <ThemeContext.Provider value={}>

   </ThemeContext.Provider>
   
   </>
  )
}

export default ThemeContext