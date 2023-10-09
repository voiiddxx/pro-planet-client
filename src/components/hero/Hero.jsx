import React, { useContext } from 'react'
import "./Hero.css"
import hero from "./earth.png";
import { authContext } from '../../contexts/Authcontext';
import { useNavigate } from 'react-router'

const Hero = () => {
  const {user} = useContext(authContext);
  const navigate = useNavigate();
  
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h2>Hey {user.username}🖐️</h2>
            <h1>Be a Pro Planet Person And Help to Save <span> The Earth 🌍  </span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus repellendus, unde quibusdam ipsam sed ullam eligendi minus cupiditate provident in iure molestiae ratione cumque! Magnam ea odit explicabo, necessitatibus id eum consequuntur laborum delectus.</p>
           <div className="button">
           <p onClick={()=>{
            navigate("/Userhome")
           }} >Explore Now ⚡</p>
           </div>
        </div>
        <div className="hero-image">
            <img src={hero} alt="heroimage" />
        </div>
    </div>
  )
}

export default Hero