import axios from "axios";
import taskReducer from "./reducers/taskreducer";

const { createContext, useReducer } = require("react");

const Taskcontext = createContext();

const initialState = {
    isLoading:true,
    task: {}
}

const TaskProvider = ({children})=>{

    const [state, dispatch] = useReducer(taskReducer , initialState);
    

    const AssingTask = async (task_title , task_detail , task_guidlines , task_image , task_level)=>{
        try {
            const token = localStorage.getItem("x-auth-token");

            const BodyParameter = {
                task_title:task_title,
                task_detail:task_detail,
                task_guidlines:task_guidlines,
                task_image:task_image,
                task_level:task_level
            }
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
            const response = await axios.post("https://pro-planet-server.onrender.com/assign-task" , BodyParameter , axiosconfig );
            console.log(response.data);
            alert("task Assigned");
        } catch (error) {
            console.log(error);
        }
    }

    const SpecificCategorytask = async(category)=>{
        try {
            dispatch({type:"API_LOADING"});
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
            const response = await axios.get("https://pro-planet-server.onrender.com/get-category-task?task_level="+category , axiosconfig);
            dispatch({type:"SET_API_DATA" , payload:response.data});
        } catch (error) {
            console.log(error);
        }
    }



    const submitTaskreponse = async (user , task , image , extradetail )=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
              const submiData = {
                user:user,
                task:task,
                image:image,
                extradetail:extradetail
              }

              const response = await axios.post("https://pro-planet-server.onrender.com/register-response" , submiData , axiosconfig );
              console.log(response.data);

        } catch (error) {
            console.log(error);
        }

    }


    return <Taskcontext.Provider value={{...state
        , AssingTask , SpecificCategorytask , submitTaskreponse}}>{children}</Taskcontext.Provider>
}

export {Taskcontext , TaskProvider};