import React from "react";
import "./Home.css";
import { FaGithub, FaCode } from "react-icons/fa";
import heroImage from "../../asset/hero.png";


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
              <span className="fed">Front End Developer</span>
            </h1>
            <div className="ctn-group my-4">
              <button className="ctn ctnblur">
                {" "}
                <FaGithub /> Github
              </button>
              <button className="ctn ctnmain mx-4">
                <FaCode /> PROJECT
              </button>
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
