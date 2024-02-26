import React from 'react'
import "./Projects.css";
import { FaGithub, FaCode } from "react-icons/fa";
import pr2 from "../../asset/mtool.png"
import pr3 from "../../asset/genpass.png"
import pr4 from "../../asset/miracurall.png"
import pr1 from "../../asset/sksplay.png"
import MiniProjects from './MiniProjects';
function Projects() {
  return (
    <>
    <div className="row heading-project" >
      <span className='linebar'></span>
      <h2>Projects</h2>
      <p>I love building projects and practice my engineering skills, here's an archive of things that I've worked on.</p>
    </div>
    <div id='project'>
    <div className="container-fluide">
      <div className="row project-r">
        <div className="col-lg-6 col-sm-12 pcol colleft">
                <h1>SKS Play</h1>
                <p>SKS Play is a Online Streaming Platform where you can watch sort films, music videos and many more. also this is an music distribution platform . spread your music worldwide with the power of sks play music distribution. here i use react technology to build ui amazing. </p>
                <ul className="skills-used">
                  <li className="tag-batch" >React.js</li>
                </ul>
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
                <h1>Mtool</h1>
                <p>A royalty management system for music content. Admin can add information using forms and csv files, user can get that using varius charts, tables, filters. 
                </p>
                <ul className="skills-used">
                  <li className="tag-batch" >React.js</li>
                  <li className="tag-batch" >Node.js</li>
                  <li className="tag-batch" >MongoDB</li>
                  <li className="tag-batch" >Express.js</li>
                </ul>
                <div className="group-btn">
                  <a className='ctn disabled' href="#project"  ><FaGithub/> Repo <code>(private)</code></a>
                  <a className='ctnblur mx-3' href="https://mtool.bengalpictures.com/" target="_"><FaCode/> Deploy</a>
                </div>
        </div>
        <div className="col-lg-6 col-sm-12 pcol colright">
                <div className="project-img">
                      <img src={pr2} alt="" />
                </div>
        </div>
      </div>

      {/* ============project-2 */}
      <div className="row project-r">
        <div className="col-lg-6 col-sm-12 pcol colleft">
                <h1>genpass-quick</h1>
                <p>
                A simple and quick password generator npm package. It generates a random password. <br /> Install this npm package using  {" -> "} <code>npm i genpass-quick</code>
                </p>
                <ul className="skills-used">
                  <li className="tag-batch" >Node.js</li>
                  <li className="tag-batch" >npm package</li>
                </ul>
                <div className="group-btn">
                  <a className='ctn' href="https://www.npmjs.com/package/genpass-quick?activeTab=code" target="_"><FaGithub/> Repo</a>
                  <a className='ctnblur mx-3' href="https://www.npmjs.com/package/genpass-quick" target="_"><FaCode/> Deploy</a>
                </div>
        </div>
        <div className="col-lg-6 col-sm-12 pcol colright">
                <div className="project-img">
                      <img src={pr3} alt="" />
                </div>
        </div>
      </div>


       {/* ============project-4 */}
       <div className="row project-r">
        <div className="col-lg-6 col-sm-12 pcol colleft">
                <h1>Miralcurall</h1>
                <p>
                A social media platform for the people who are interested in the field of art and literature. they can share their thoughts, art, literature, and many more.
                </p>
                <ul className="skills-used">
                  <li className="tag-batch" >Next.js 14</li>
                  <li className="tag-batch" >Server Action</li>
                  <li className="tag-batch" >MongoDB</li>
                  <li className="tag-batch" >Tailwindcss</li>
                  <li className="tag-batch" >react-aria-components</li>
                </ul>
                <div className="group-btn">
                  <a className='ctn disabled' href="#project" target="_"><FaGithub/> Repo <code>(private)</code></a>
                  <a className='ctnblur mx-3 disabled' href="#project"><FaCode/> WIP</a>
                </div>
        </div>
        <div className="col-lg-6 col-sm-12 pcol colright">
                <div className="project-img">
                      <img src={pr4} alt="" />
                </div>
        </div>
      </div>



    </div>

    </div>
    {/* <div className="row" id='miniProjects'>
      <MiniProjects/>
    </div> */}
    </>
  )
}

export default Projects
