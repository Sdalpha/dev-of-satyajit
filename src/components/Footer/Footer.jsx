import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <section className='footer'>
     
     
<div class="container">

  <footer class="text-center text-white">

    <div class="container">

      <section class="mt-5">

        <div class="row text-center d-flex justify-content-center pt-5">
 
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">About Me</a>
            </h6>
          </div>


          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#project" class="text-white">Projects</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#skills" class="text-white">Skills</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#home" class="text-white">Home</a>
            </h6>
          </div>

        </div>

      </section>


     <hr class="my-3" /> 

      {/* <section class="mb-2">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor
            </p>

          </div>
        </div>
      </section>  */}

      {/* <section class="text-center mb-2">
        <a href="/" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="/" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="/" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="/" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="/" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="/" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </section> */}

    </div>

    <div
         class="text-center p-3"
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         > Satyajit Dutta</a>
    </div>

  </footer>

</div>

    </section>
  )
}

export default Footer
