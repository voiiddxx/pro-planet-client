import React, { useState } from 'react'
import "./Usernav.css";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faSquarePlus  } from '@fortawesome/free-regular-svg-icons'
import { faRightFromBracket, faTree } from '@fortawesome/free-solid-svg-icons'
import Addpost from '../Modals/Addpost/Addpost';
const Usernav = () => {
  

  const [OpenAddpostModal, setOpenAddpostModal] = useState(false);

  const CloseModal = ()=>{
    setOpenAddpostModal(false);
  }
  return (
    <>
    <div className="user-nav">
      <div className="user-nav-left">
        <p>Pro Planet🌍</p>
      </div>
      <div className="user-nav-mid">
      <input type="text" value="Search here" />
      </div>
      <div className="user-nav-right">
      <div className="nav-button">
      <FontAwesomeIcon onClick={()=>{
        setOpenAddpostModal(true);
      }} icon={faSquarePlus} size='lg' color='#212121;' />
      </div>
      <div className="nav-button">
      <FontAwesomeIcon icon={faTree} size='lg' color='#212121;' />
      </div>
      <div className="nav-button">
      <FontAwesomeIcon icon={faRightFromBracket} size='lg' color='#212121;' />
      </div>
      </div>
    </div>

    {
      OpenAddpostModal!== false ? <Addpost close={CloseModal}/>  :<p></p>
    }
    </>

    
  )
}

export default Usernav