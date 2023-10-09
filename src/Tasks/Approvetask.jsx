import React, { useContext, useEffect } from 'react'
import "./Approvetask.css"
import Usernav from '../components/Nav/Usernav'
import Adminsidebar from '../components/hero/Adminsidebar'
import { reponseContext } from '../contexts/Responsecontext'

const Approvetask = () => {

    const {getResponseData , ApproveResponse} = useContext(reponseContext);
    useEffect(()=>{
        getResponseData();
    } , []);
    const {Taskresponse} = useContext(reponseContext);
    console.log(Taskresponse);
  return (
    <>
    <div className="approve-task-main-admin">
        <Usernav/>

        <div className="admin-approve-main-content">
            <div className="admin-approve-left">
                <Adminsidebar/>
            </div>
            <div className="admin-approve-mid">
                <h1>Approve Weekly Tasks Submissions</h1>
                <div className="cards-admin">
                {
                    Taskresponse.length>0 ? 
                    Taskresponse.map((curr , index)=>{
                        return <div className="admin-approve-card">
                        <div className="card-upper">
                            <img src={curr.image} alt="task" />
                        </div>
                        <div className="card-bottom">
                        <div className="user">
                                <img src= {curr.user.userprofile} alt="userprofile" />
                                <p>{curr.user.username}</p>
                            </div>
                            <h1>{curr.task.task_title}</h1>
                            <h3>Submission Details</h3>
                            <p> {curr.extradetail}</p>
    
                            <div className="approve-admin-button">
                                <div onClick={()=>{
                                    ApproveResponse(curr.user._id , curr.task.task_level , curr._id);
                                    console.log("userid" , curr.user._id , "level" , curr.task.task_level , "responseid" , curr._id);
                                }} className="ap-button">
                                    <p>Approve</p>
                                </div>
                                <div className="ap-button-reject">
                                    <p>Reject</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    })
                     : <p>there is no data</p>
                }
                
                </div>
            </div>
            <div className="admin-approve-right"></div>
        </div>
    </div>
    </>
  )
}

export default Approvetask