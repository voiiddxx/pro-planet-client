import React from 'react'
import "./adminhome.css"
import Usernav from '../components/Nav/Usernav'
import Sidebar from '../components/hero/Sidebar'
import Adminsidebar from '../components/hero/Adminsidebar'
const Adminhome = () => {
  return (
    <>
    <div className="admin-home-main">
    <Usernav/>
    <div className="admin-main-content">
    <Adminsidebar/>
    <div className="admin-mid">

    </div>

    <div className="admin-right">
      
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Adminhome