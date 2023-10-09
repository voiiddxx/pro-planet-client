import React, { useContext, useState } from 'react'
import "./Addpost.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {  faImage  } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import { userContext } from '../../../contexts/Usercontext'


const Addpost = ({close}) => {
    const {AddPostNow} = useContext(userContext);


    const AddpostNow = (title , postimage)=>{
        AddPostNow(title , postimage);
    }

    const [Image, setImage] = useState(null);
    const [Caption, setCaption] = useState("");
    let files = [];
    const [UploadImage, setUploadImage] = useState(null);
    const HanldeImage = ()=>{
       if(Image!=null){
        alert(Image);
        console.log(Image[0]);
        let formdata = new FormData();
        formdata.append("file" , Image[0]);
        formdata.append("upload_preset" , "qouutdij");
        axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata , {
            onDownloadProgress:(ProgressEvent)=>{
                
              console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
            }
        }).then(response=>{
            console.log(response.data.url);
            files.push(response.data.url);
            setUploadImage(files);
            alert("Image Uploaded");
            AddPostNow(Caption , response.data.url);
        });
       }
       else{
        alert("Please Select Image");
       }

    }
  return (
    <>
    <div onClick={close} className="addpost-main"></div>
    <div className="addpost">
        <h1>Post Your Any Special Eco freindly Activity🍀</h1>
        <input className='addpost-input' type="text" placeholder='Write Your caption' onChange={(e)=>{
            setCaption(e.target.value);
        }} />
        <input  type="file" hidden className='imagenow'  onChange={(e)=>{
            setImage(e.target.files)
        }}  />
        {
            Image!=null  ? <p>✅{Image[0].name}</p>:<div onClick={()=>{
                document.querySelector(".imagenow").click();
              }}  className="addimage">
                    
              <FontAwesomeIcon icon={faImage} size='xl' color='#212121;' />
              <p>Select Image</p>
        
                </div>
        }

        <div className="postbuttons">
            <div onClick={HanldeImage} className="upload-button1">
                <p>Post</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Addpost