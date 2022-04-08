import React from 'react'
import Terminal from './Terminal';
import "./Skills.css";

function Skills() {

  return (
    <section id='skills'>
      <div className="container-fluide skill-container ">
        <div className="row sm-row">
          <div className="col-lg-6 col-sm-12 my-auto left">
                <Terminal/>
          </div>
          <div className="col-lg-6 col-sm-12 my-auto right">
            <div className="linebar"></div>
            <h1>Technologies and Tools</h1>
            <p className='pera'>Using a combination of cutting-edge technologies and reliable open-source software I build user-focused, performant apps and websites for smartphones, tablets, and desktops.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
