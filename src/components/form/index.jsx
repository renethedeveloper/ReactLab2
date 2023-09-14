import React, { useState } from 'react'
import "./index.css"

const Form = () => {

    const [username, setUsername] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassWord] =useState("")

    const handleClick=(e)=>{
        e.preventDefault()
        
        
    }


  return (
    <div>
      <form className='form-container' action="">

        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e)=> setUsername(e.target.value)}value={username} />
        <label htmlFor="email">Email</label>
        <input type="text"  onChange={(e)=> setEmail(e.target.value)}value={email} />
        <label htmlFor="password">Password</label>
        <input type="text" onChange={(e)=> setPassWord(e.target.value)}value={password} />
        <button  onClick={handleClick} className='submitButton'>Submit</button>
      </form>
    </div>
  )
}

export default Form
