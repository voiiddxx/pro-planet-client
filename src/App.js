import React from 'react'
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Start from './Start/Start'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Home from './Home/Home'
import Adminhome from './Home/Adminhome'
import Userhome from './Userhome/Userhome'
import Approve from './Verification/Approve'
import Approvemain from './Verification/Approvemain'
import Task from './Tasks/Task'
import Approvetask from './Tasks/Approvetask'
import Profile from './Profile/Profile'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Adminhome' element={<Adminhome/>}/>
        <Route path='/Userhome' element={<Userhome/>}/>
        <Route path='/Approve' element={<Approve/>}/>
        <Route path='/Approvemain' element={<Approvemain/>}/>
        <Route path='/Task' element={<Task/>}/>
        <Route path='/Approvetask' element={<Approvetask/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App