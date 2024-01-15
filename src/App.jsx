
import './App.css'
import ThemeBtn from './components/Btn'
import Card from './components/Card'
import { useState } from 'react'


import { ThemeContext } from './contexts/Themcontext'
import { useEffect } from 'react'

function App() {


  const [darkMode,setDarkMode] = useState("dark") ;
 

 const lightTheme = ()=>{
setDarkMode("light") ;
 }

 const darkTheme = ()=>{
  setDarkMode("dark")
 }

 useEffect(()=>{
   

  
  if( darkMode === "dark" ){
    document.querySelector("html").classList.remove("light")
    document.querySelector("html").classList.add("dark")
       
  }
  else
  {
    document.querySelector("html").classList.remove("dark")
    document.querySelector("html").classList.add("light")

  }



 },[darkMode])



  
  

  return (
    <>
    <ThemeContext.Provider value={{darkMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       < ThemeBtn></ThemeBtn>
                    </div>
            
                    <div className="w-full max-w-sm mx-auto">
                       <Card></Card>
                    </div>
                </div>
            </div>
            </ThemeContext.Provider>
    </>
  )
}

export default App
