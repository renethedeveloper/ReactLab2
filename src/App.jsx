import { useState } from 'react'
import NavBar from './components/navbar'
import Form from './components/form'
import Users from '../users'

import './App.css'
import SideBar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] =useState(true)

  return (
    <>
    <NavBar/>
    
    <Form/>
     {isVisible ? <SideBar /> : null}/
    <button  className='hidebutton' onClick={() => setIsVisible(!isVisible)}>Don't like that stupid side bar? Hit this button!</button>
    <Users/>
  
      
    </>
  )
}

export default App
