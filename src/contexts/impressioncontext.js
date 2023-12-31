import { createContext } from "react";
import axios from "axios";


const impressionContext = createContext();

const ImpressionProvider = ({children})=>{
    const likeThePost = async (postid)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }

              const bodyParameter = {
                postid:postid,
              }
            const response = await axios.post("https://pro-planet-server.onrender.com/like-user-post" , bodyParameter , axiosconfig );
            if(response.status===200){
                alert("Post Liked")
            }else{
                alert("Some Error");
            }
        } catch (error) {
            console.log(error);
        }
    }


    const postComment = async (commentdetail , postid)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
              const bodyParameter = {
                commentdetail:commentdetail,
                postid:postid
              }

              const response = await axios.post("https://pro-planet-server.onrender.com/post-comment-user-post" , bodyParameter , axiosconfig);
              if(response.status ===200){
                alert("Comment Posted")
              }
              else{
                alert("Some error occured")
              }
        } catch (error) {
        }
    }
    return <impressionContext.Provider value={{likeThePost , postComment}}>{children}</impressionContext.Provider>
  
}



export {impressionContext , ImpressionProvider};