import React from 'react'
import "./Projects.css";
import { FaGithub, FaCode } from "react-icons/fa";
import pr2 from "../../asset/covidproject.png"
import pr1 from "../../asset/sksplay.png"
function Projects() {
  return (
    <div id='project'>

    <div className="container-fluide">
      <div className="row project-r">
        <div className="col-lg-6 col-sm-12 pcol colleft">
                <h1>SKS Play</h1>
                <p>SKS Play is a Online Streaming Platform where you can watch sort films, music videos and many more. also this is an music distribution platform . spread your music worldwide with the power of sks play music distribution. here i use react technology to build ui amazing. </p>
                <div className="group-btn">
                  <a className='ctn' href="https://github.com/Sdalpha/sks-play-md" target="_"><FaGithub/> Repo</a>
                  <a className='ctnblur mx-3' href="https://sdalpha.github.io/sks-play-md/" target="_"><FaCode/> Deploy</a>
                </div>
        </div>
        <div className="col-lg-6 col-sm-12 pcol colright">
                <div className="project-img">
                      <img src={pr1} alt="" />
                </div>
        </div>
      </div>
      {/* ============project-2 */}
      <div className="row project-r">
        <div className="col-lg-6 col-sm-12 pcol colleft">
                <h1>Covid Tracker</h1>
                <p>The Covid Tracker is a web application to track the ongoing COVID-19 pandemic in the India . It maintained a daily-updated dataset of state-level information related to the outbreak, including counts of the number of cases, recovered , confirmed cases, deaths, active cases. This is a single page web application using React Js .</p>
                <div className="group-btn">
                  <a className='ctn' href="https://github.com/Sdalpha/CovidTracker_ReactJs" target="_"><FaGithub/> Repo</a>
                  <a className='ctnblur mx-3' href="https://sdalpha.github.io/CovidTracker_ReactJs/" target="_"><FaCode/> Deploy</a>
                </div>
        </div>
        <div className="col-lg-6 col-sm-12 pcol colright">
                <div className="project-img">
                      <img src={pr2} alt="" />
                </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Projects
