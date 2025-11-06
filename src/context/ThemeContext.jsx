import React, { createContext, useState } from 'react'


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
 const [isDarkMode , toggleDarkMode] = useState("");
const value = {
  isDarkMode , toggleDarkMode
}

    
 

  return (
   <>
   <ThemeContext.Provider value={value}>

   </ThemeContext.Provider>
   
   </>
  )
}

export default ThemeContext