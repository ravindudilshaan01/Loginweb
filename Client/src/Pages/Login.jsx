import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const loginUser=(e) =>{
        e.preventDefault()
        axios.get('/')
    }
  return (
    <div className='form-box'>
        <div className='boxname'>Login</div>
        <form onSubmit={loginUser}>
            <label htmlFor="email">Email</label>
            <input type='email'
             placeholder='Enter Email'
             value={data.email} 
             onChange={(e) => setData({ ...data, email: e.target.value })}/>
            <label htmlFor="password">Password</label>
            <input type='password' 
            placeholder='Enter Password'
            value={data.password} 
            onChange={(e)=>setData({ ...data,password:e.target.value })}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
