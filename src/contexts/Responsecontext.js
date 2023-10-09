import axios from "axios";
import { createContext, useReducer } from "react";
import responseReducer from "./reducers/responsereducer";


const reponseContext = createContext();

const initialState = {
    isLoading:false,
    Taskresponse : []
}

const ResponseProvider = ({children})=>{

    const [state, dispatch] = useReducer(responseReducer , initialState);
    

    const getResponseData = async ()=>{
        try {
            dispatch({type:"API_LOADING"});
                const token = localStorage.getItem("x-auth-token");
                const axiosconfig = {
                    headers:{
                      "Accept":"application/json",
                      "x-auth-token":token
                    }
                  }
                const reponse = await axios.get("https://pro-planet-server.onrender.com/get-responses" , axiosconfig);
                console.log(reponse.data);
                dispatch({type:"SET_API_DATA" , payload:reponse.data});

        } catch (error) {
            console.log(error);
        }
    }


    const ApproveResponse = async (userid , task_level ,submitid)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const reponseBodyparamter = {
                userid:userid,
                task_level:task_level,
                submitid:submitid
            }
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }

              const response = await axios.post("https://pro-planet-server.onrender.com/approve-weekly-task" , reponseBodyparamter , axiosconfig);
              console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    return <reponseContext.Provider value={{...state , getResponseData , ApproveResponse}}>{children}</reponseContext.Provider>
}

export {ResponseProvider , reponseContext};