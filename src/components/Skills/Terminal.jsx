import React from 'react'
import {AiFillHtml5} from "react-icons/ai";
import {FaGitAlt,FaLinux} from "react-icons/fa";
import {SiBootstrap,SiCss3,SiFirebase,SiReact,SiFigma,SiMysql,SiAdobephotoshop,SiJava ,SiJavascript} from "react-icons/si";


function Terminal() {
  return (
    <div className="hero-terminl ter">
              <div className="upper">
                <span className="circle yellow"></span>
                <span className="circle green"></span>
                <span className="circle red"></span>
              </div>
              <div className="t-lower">
                  <ul className='items'>
                    <li className=''><AiFillHtml5/></li>
                    <li className=''><SiCss3/></li>
                    <li className=''><SiJavascript/></li>
                    <li className=''><SiReact/></li>
                  </ul>
                  <ul className='items'>
                    <li className=''><SiJava/></li>
                    <li className=''><FaGitAlt/></li>
                    <li className=''><SiMysql/></li>
                    <li className=''><FaLinux/></li>
                  </ul>
                  <ul className='items'>
                    <li className=''><SiAdobephotoshop/></li>
                    <li className=''><SiFigma/></li>
                    <li className=''><SiFirebase/></li>
                    <li className=''><SiBootstrap/></li>
                  </ul>
                  
              </div>
            </div>
  )
}

export default Terminal
