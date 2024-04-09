import './cardP5.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function CardP5() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="body-bg">
        <div class="container-fluid m-0 ">
          <div class="text-center p-5">
            <h1 class="heading">Choose Your Simple, Transparent Pricing</h1>
          </div>
          <div class="row  p-5">
            <div class="col-sm-4 ">
              <div class="card">
                <div class="card-body">
                  <h5 class="title-color1-3">1 Month</h5>
                  <h1 class="card-title title1-3 pt-3" >&#8377; 199.00/month </h1>
                  <p class="card-sub-title title-subtitle1-3 pt-5 " >Suitable for companies with 5-10 <br /> openings</p>
                  <p class="card-text pt-5 pb-5 ps-2 pe-2">
                    <p> <img src="/green1.png" alt="" />10 interview-ready candidates</p>
                    <p><img src="/green1.png" alt="" />Unlimited job postings</p>
                    <p><img src="/green1.png" alt="" />Receive pre-vetted profiles within 48 hours</p>
                    <p> <img src="/red1.png" alt="" />Dedicated account manager</p>
                    <p> <img src="/red1.png" alt="" />Assistance with interview scheduling</p>
                    <p><img src="/red1.png" alt="" />Custom reports</p>
                  </p>
                  <button class="getStartedButt-1-3 ms-5 me-5 mb-2 ps-5 pe-5 pt-3 pb-3">Get Started</button>
                </div>
              </div>
            </div>
            <div class="col-sm-4 ">
              <div class="card card2 card-2colo">
                <div class="card-body">
                  <h5>3 Months</h5>
                  <h1 class="card-title title1-3 pt-3" >&#8377; 149.00/month </h1>
                  <p class="card-sub-title subtitle-2 pt-5" >Suitable for companies with 5-10 <br /> openings</p>
                  <p class="card-text pt-5 pb-5 ps-2 pe-2">
                    <p> <img src="/green1-removebg-preview.png" alt="" />10 interview-ready candidates</p>
                    <p><img src="/green1-removebg-preview.png" alt="" />Unlimited job postings</p>
                    <p><img src="/green1-removebg-preview.png" alt="" />Receive pre-vetted profiles within 48 hours</p>
                    <p> <img src="/red1-removebg-preview.png" alt="" />Dedicated account manager</p>
                    <p> <img src="/red1-removebg-preview.png" alt="" />Assistance with interview scheduling</p>
                    <p><img src="/red1-removebg-preview.png" alt="" />Custom reports</p>
                  </p>
                  <button class="getStartedButt-2 ms-5 me-5 mb-2 ps-5 pe-5 pt-3 pb-3">Get Started</button>
                </div>
              </div>
            </div>

            <div class="col-sm-4 ">
              <div class="card">
                <div class="card-body">
                  <h5 class="title-color1-3">6 Months</h5>
                  <h1 class="card-title title1-3 pt-3" >&#8377; 169.00/month </h1>
                  <p class="card-sub-title title-subtitle1-3 pt-5" >Suitable for companies with 5-10 <br /> openings</p>
                  <p class="card-text pt-5 pb-5 ps-2 pe-2">
                    <p> <img src="/green1.png" alt="" />10 interview-ready candidates</p>
                    <p><img src="/green1.png" alt="" />Unlimited job postings</p>
                    <p><img src="/green1.png" alt="" />Receive pre-vetted profiles within 48 hours</p>
                    <p> <img src="/red1.png" alt="" />Dedicated account manager</p>
                    <p> <img src="/red1.png" alt="" />Assistance with interview scheduling</p>
                    <p><img src="/red1.png" alt="" />Custom reports</p>
                  </p>
                  <button class="getStartedButt-1-3 ms-5 me-5 mb-2 ps-5 pe-5 pt-3 pb-3">Get Started</button>
                </div>
              </div>
            </div>
            <div>
              <div className="col-12 mx-lg-4 px-5 mt-5 book-Demo-Butt"><button type="button" class="Book-A-Demo-button p-lg-3 px-lg-5  ">Book A Demo</button></div>
            </div>



          </div>

        </div>
      </div>
    </>
  )
}

export default CardP5