// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './brands.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Brands() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="row brands-bg container-fluid m-0">
        <div className="col-12  text-center brands-text mt-5 mb-3 "><p>Hire for 1000+ Brands Including</p></div>
        <div className="col-12 mb-5 mt-1 d-flex justify-content-center container-fluid">
          <div className="row  container-fluid d-flex justify-content-between">
            <div className=" col-lg-2 col-md-4 col-sm-12 d-flex justify-content-around">
              <img src="/google.jpg" alt="" /></div>
            <div className=" col-lg-2 col-md-4 col-sm-12 d-flex justify-content-around">
              <img src="/ama.jpg" alt="" /></div>
            <div className=" col-lg-2 col-md-4 col-sm-12 d-flex justify-content-around">
              <img src="/nok.jpg" alt="" /></div>
            <div className="  col-lg-2 col-md-4 col-sm-12 d-flex justify-content-around">
              <img src="/mic.jpg" alt="" /></div>
            <div className=" col-lg-2 col-md-4 col-sm-12 d-flex justify-content-around">
              <img src="/brands.jpg" alt="" /></div>
            <div className=" col-lg-2 col-md-4 col-sm-12 d-flex justify-content-around">
              <img src="/google.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands
