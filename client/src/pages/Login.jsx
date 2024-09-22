import React from 'react'
import { useState } from 'react'
import axios from "axios"
const Login = () => {
    const [email ,SetEmail] = useState("")
    const [password ,setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let api=("http://localhost:3001/user/userlogin")
        axios.post(api,{password:password,email:email}).then((res)=>{
            console.log(res)
        })
        
    }
    
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" onChange={(e)=>{SetEmail(e.target.value)}}/>
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </>
  )
}
export default Login
