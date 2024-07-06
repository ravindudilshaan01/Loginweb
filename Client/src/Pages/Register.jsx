import React from 'react'
import './Register.css'
import { useState } from 'react'

export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const registerUser=(e) => {
        e.preventDefault()
    }

  return (
    <div className='form-box'>
        <div className='boxname'>Register</div>
        <form onSubmit={registerUser}>
            <label htmlFor="name">Name</label>
            <input
            type='text' placeholder='Enter Name'
            value={data.name} 
            onChange={(e)=>setData({...data,name:e.target.value})}/>
            <label htmlFor="email">Email</label>
            <input 
            type='email' placeholder='Enter Email'
            value={data.email} 
            onChange={(e)=>setData({...data,email:e.target.value})}/>
            <label htmlFor="password">Password</label>
            <input 
            type='password' placeholder='Enter Password'
            value={data.password} 
            onChange={(e)=>setData({...data,password:e.target.value})}/>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}
