import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './views/Home'
import Books from './views/Books'
import Users from './views/Users'

function App() {


  return (
    <>
     
     <Navbar/>
     {/*<Home/>*/}
     <Books/>
     <Users/>
    
     
    
      
    </>
  )
}

export default App
