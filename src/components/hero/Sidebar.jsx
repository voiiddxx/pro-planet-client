import React, { useContext, useState } from 'react'
import "./Userhomehero.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faIdBadge,faUser  } from '@fortawesome/free-regular-svg-icons'
import {faCloud, faHome, faRankingStar, faSignOut, faTasks} from '@fortawesome/free-solid-svg-icons'
import { authContext } from '../../contexts/Authcontext'
import { useNavigate } from 'react-router'
import { userContext } from '../../contexts/Usercontext'
import axios from 'axios'

const Sidebar = () => {
    
  const {user} = useContext(authContext);
  const navigate = useNavigate();
  const [imagetoupdate, setimagetoupdate] = useState(null);
  const {updateImage} = useContext(userContext);
  


  const [ImageModal, setImageModal] = useState(false);

  const handleimage = ()=>{
    if(imagetoupdate!=null){
      alert(imagetoupdate);
      let formdata = new FormData();
      formdata.append("file" , imagetoupdate[0]);
      formdata.append("upload_preset" , "qouutdij");
      axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata , {
          onDownloadProgress:(ProgressEvent)=>{
              
            console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
          }
      }).then(response=>{
          console.log(response.data.url);
          alert("Image Uploaded");
          updateImage(response.data.url);
      });
     }
     else{
      alert("Please Select Image");
     }
  }

  return (
    <>
    <div className="ush-left">
            <div className="ush-left-first">
                <img onClick={()=>{
                  setImageModal(true);
                 
                }} src= {user?.userprofile} alt="useimage" />
                <p> hellow, <span>{user.username}!</span> </p>
            </div>
            <div className="ush-left-border"></div>

            <div className="ush-left-buttons">
                <div onClick={()=>{
                  navigate("/Userhome")
                }} className="ush-left-nav">
                <FontAwesomeIcon icon={faHome} size='lg' color='blue' />
                <p>Home</p>
                </div>
                <div className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faRankingStar} size='lg' color='black' />
                <p>Pro Planet Ranking</p>
                </div>
                <div onClick={()=>{
                  navigate("/Profile")
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faUser} size='lg' color='black' />
                <p>Profile</p>
                </div>
                <div onClick={()=>{
                  navigate("/Task")
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faTasks} size='lg' color='black' />
                <p>Weekly Tasks</p>
                </div>
                <div className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faIdBadge} size='lg' color='black' />
                <p>Pro Person verification</p>
                </div>
                <div className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faCloud} size='lg' color='black' />
                <p>About Us</p>
                </div>
                <div className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faSignOut} size='lg' color='black' />
                <p>Logout Now</p>
                </div>
            </div>
        </div>


        {
          ImageModal!==false ? <div className="image-div">
            <div className="image-container">
              <h1>Update Image💡</h1>
          <input onChange={(e)=>{
            setimagetoupdate(e.target.files);
          }} type="file" hidden className='image-upload-input' />
              <div onClick={()=>{
                document.querySelector(".image-upload-input").click();
              }} className="image-input">
                <p>Select Image 📸</p>
              </div>
              <div onClick={handleimage} className="image-button-upload">
                <p>Update</p>
              </div>
              <div onClick={()=>{
                setImageModal(false)
              }} className="close-button">
                <p>Close</p>
              </div>
              
            </div>
          </div> : <div></div>
        }
    </>
  )
}

export default Sidebar