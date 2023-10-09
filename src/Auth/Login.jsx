import React, { useContext, useState } from 'react'
import "./Register.css"
import earthimage from "./earth.png"
import { authContext } from '../contexts/Authcontext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(authContext);

    const handleLogin =  async(e)=>{
        e.preventDefault();
       const data = await login(username , password);
       if(data === 200){
        navigate("/Home")
       }
       else{
        alert("There is some problem")
       }
    }
  
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    return (
      <div className="register-main">
          <div className="register-left">
            <img src={earthimage} alt="greencityimage" />
          </div>
          <div className="register-right">
            <p>Hellow!🖐️</p>
            <h1>Welcome To The Pro Planet 🌱</h1>
            <form >
              <p>username</p>
              <input className='register-input' type="text" placeholder='Enter Your Username' onChange={(e)=>{
                setusername(e.target.value)
              }} />
              
              <p>Password</p>
              <input className='register-input' type="password" placeholder='Enter Your password'
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
               />
      <p></p>
              <input className='submit-button' type="submit" value="Get Started" onClick={handleLogin} />
              
            </form>
          </div>
      </div>
    )
}

export default Login