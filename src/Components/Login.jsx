import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    const navigate = useNavigate()
    
    let handlelogin= async (e)=>{
        e.preventDefault()
        let payload={
          email,
          password
    
        };
       
        try {
            const response = await axios.post("https://reqres.in/api/login", payload);
            const token = response.data.token;
      
            if (token) {
              
              localStorage.setItem("authToken", token);
              toast.success("Login successful!");
              navigate("/userlist");
            }
          } catch (error) {
            
            toast.error("Invalid credentials. Please try again.");
          }
        };
  return (
    <div id='form-container'>
         
          <form onSubmit={handlelogin}>
            
                <h2>Login</h2>
                
                <div className="form-items">
                   <input type='text' placeholder='Email'onChange={(e)=>{
                    setEmail(e.target.value)
                   }}></input>
                </div>
                <div className="form-items">
                   <input type='password' placeholder='password' onChange={(e)=>{
                    setPassword(e.target.value)
                   }}></input>
                </div>
                <div className="form-items" id="btn">
                    <button type="submit">Login</button>
                   
                </div>
          </form>
        </div>
  )
}

export default Login