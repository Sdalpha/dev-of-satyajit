import React from "react";
import "./Home.css";
import { FaGithub, FaCode, FaLinkedin } from "react-icons/fa";
import heroImage from "../../asset/hero.png";
import resume from "../../asset/Resume_Fab.pdf";


export default function Home() {
  return (
    <>
      <header>
      <div id="home" className="container-flued hero">
        <div className="row">
          <div className="col-lg-8 col-12 left-col ">
            <h1>
              hi,
              <br />
              i'm satyajit
              <br />
              <span className="fed">Full Stack Developer</span>
            </h1>
              
            <div className="ctn-group my-4">
              <a href="https://github.com/Sdalpha" className="ctn ctnblur">
                {" "}
                <FaGithub /> Github
              </a>
              <a href="https://www.linkedin.com/in/satyajit-dutta-9a3b021b9/" target="_" className="ctn ctnblur mx-4">
                {" "}
                <FaLinkedin /> Linkdin
              </a>
              <a href={resume} target="_"
              className="ctn ctnmain">
                <FaCode /> Resume
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-12 right-col">
            <div className="hero-terminl">
              <div className="upper">
                <span className="circle yellow"></span>
                <span className="circle green"></span>
                <span className="circle red"></span>
              </div>
              <div className="lower">
                
                <img src={heroImage} alt="heroImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
}
