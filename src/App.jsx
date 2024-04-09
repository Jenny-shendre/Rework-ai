// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="row container-fluid m-0 ">
        <div className="col">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid mt-4">
              <a class="navbar-brand mx-lg-5 mx-sm-0" href="#">
                <img class="main-logo" src="/image1.jpg"></img></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class=" collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="mx-2 nav-item nav-text">
                    <a class="nav-text" aria-current="page" href="#">Talent Finder</a>
                  </li>
                  <li class="mx-2 nav-item nav-text">
                    <a class="nav-text" aria-current="page" href="#">For Recruiters</a>
                  </li>
                  <li class="mx-2 nav-item nav-text">
                    <a class="nav-text " aria-current="page" href="#">For Employers</a>
                  </li>
                  <li class="mx-2 nav-item nav-text">
                    <a class="nav-text" aria-current="page" href="#">About Us</a>
                  </li>
                  <li class="mx-2 nav-item nav-text">
                    <a class="nav-text " aria-current="page" href="#">Company</a>
                  </li>
                </ul>

                <button type="button" class="mx-sm-auto mx-xs-auto px-5 p-2 nav-button">Log in</button>
                <button type="button" class="px-5 p-2 mx-lg-4 mx-sm-auto  nav-button">Get Started</button>
              </div>
            </div>
          </nav></div>
      </div>

      {/* First Page Body */}

      <div className="row container-fluid mt-5">
        <div className="col-xl-7 col-lg-7 col-xs-12 col-sm-12 col-md-12 d-flex justify-content-center">
          <div className="row">
            <div className="col-12 mx-lg-4 px-5"><span class="h1-bold-text">Power Up your Hiring </span><br /><h1 class="h1-bold">With Rework .</h1></div>

            <div className="col-12 mx-lg-4 px-5 mt-4 "><span class="p-text">Empower your business with cutting-edge A.I. technology, simplified processes,and top-tier
              talent connections. Rework is your strategic partner in redefining how you <br /> hire .</span></div>
            <div className="col-12 mx-lg-4 px-5 mt-5"><button type="button" class="Book-A-Demo-button p-lg-3 px-lg-5  ">Book A Demo</button></div>

            <div className="col-12 mx-lg-4 px-5 mt-4">
              <img src="/photo_2024-04-02_00-06-30-removebg-preview.png" alt="" /></div>
          </div>
        </div>
        <div className="mt-4 col-sm-12 col-xs-12 col-md-12 col-lg-5 col-xl-5"><br /><br /><br /><br /><br /><img class="w-100 mt-5" src="/image2-removebg-preview.png"></img>
        </div>
      </div>
    </>
  )
}

export default App
