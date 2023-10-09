import React, { useContext, useEffect, useState } from 'react'
import "./Userhomemid.css"
import Post from '../Post/Post'
import Verifymodal from '../Modals/Verify/Verifymodal';
import { userContext } from '../../contexts/Usercontext';

const Userhomemid = () => {

  const {isLoading , GettingallPost , posts} = useContext(userContext);
  console.log(posts);


  useEffect(()=>{
    GettingallPost();
    
  } , [])
  const [proPlanetModel, setproPlanetModel] = useState(false);

  const CloseModel = ()=>{
    setproPlanetModel(false);
  }
    return (
    <>
    <div onClick={()=>{
      setproPlanetModel(true)
    }} className="veryfi-popup">
        <p >Get Pro Planet Verified Badge and Bonus Planet Coins Now🔥</p>
    </div>
    <div className="user-home-mid-main">
        <div className="extra"></div>
    <div className="post-scroll">
    {
      isLoading ? <p>Posts Are Loading</p> : posts.map((curr,index)=>{
        return <Post {...curr}  key={index} />
      })
    }
    </div>
    </div>
    {
      proPlanetModel ? <Verifymodal close={CloseModel}/> : <div></div>
    }
    </>
  )
}

export default Userhomemid