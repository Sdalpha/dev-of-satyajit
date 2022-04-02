import React from 'react'
import "./Navbar"
import { FaHome,FaCode,FaCodeBranch,FaUserAlt } from "react-icons/fa";
function Navsm() {
  return (
    <div className='mobile-nav'>
      <ul>
            <li><a href="#home"><FaHome/></a></li>
            <li><a href="#skills"><FaCode/></a></li>
            <li><a href="#project"><FaCodeBranch/></a></li>
            <li><a href="#about"><FaUserAlt/></a></li>
      </ul>
    </div>
  )
}

export default Navsm
