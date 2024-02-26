import React from 'react'
import "./Projects.css";
function MiniProjects() {
  return (
    <>
        <table class="table table-dark table-striped my-5">
  <thead>
    <tr>
      <th scope="col">Company's Projects</th>
     
      <th scope="col">Deploy Links</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>JavaScript Calculator</td>
    
      <td>
          <a href='https://sdalpha.github.io/js-calculator/' style={{color: '#46c5a6'}}  target='_' >Visit</a>
      </td>
    </tr>
    <tr>
  
      <td>Galery Projects</td>
     
      <td><a href='https://sdalpha.github.io/Gallery-Animation/' style={{color: '#46c5a6'}} target='_' >Visit</a></td>
    </tr>
    <tr>
  
      <td>Bulb On/Off</td>
     
      <td><a href=' https://sdalpha.github.io/Bulb-ON-OFF/' style={{color: '#46c5a6'}} target='_' >Visit</a></td>
    </tr>
    
  </tbody>
</table>
    </>
      
  )
}

export default MiniProjects
