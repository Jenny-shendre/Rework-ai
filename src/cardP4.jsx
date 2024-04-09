import './cardP4.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function CardP4() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid m-0">
        <div className="row container-fluid m-0">
          <div className="col-12 text-center text-head p-5 ">
            <h1>How Our System Operates</h1>
          </div>
          <div className="col-12 pb-5">
            <div className="row container-fluid m-0">
              <div className="col-xxl-4 col-xl-4 col-md-12 col-sm-12 col-lg-4 card-bg1-3 p-3">
                <div className="row container-fluid m-0">
                  <div className="col-12 d-flex justify-content-between">
                    <h3>Upload Documents</h3>
                    <img src="/cp4-1.png" />
                  </div>
                  <div className="col-12 mt-4 mb-4 p-3 para ">
                    <p>Shortlist the most qualified candidate and upload their details for the top companies</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-md-12 col-sm-12 col-lg-4 card-bg-2 p-3">
                <div className="row container-fluid m-0">
                  <div className="col-12 d-flex justify-content-between">
                    <h3>Sign Up</h3>
                    <img src="/cp4-2.png" />
                  </div>
                  <div className="col-12 mt-4 mb-4 p-3 para ">
                    <p>Follow the link below to sign up and get access of the current job postings</p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-md-12 col-sm-12 col-lg-4 card-bg1-3 p-3">
                <div className="row container-fluid m-0">
                  <div className="col-12 d-flex justify-content-between">
                    <h3>Get Rewards</h3>
                    <img src="/cp4-3.png" />
                  </div>
                  <div className="col-12 mt-4 mb-4 p-3 para">
                    <p>As soon as the candidate gets selected you get your benefits</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 text-center pb-5">
            <button class="Book-A-Demo-button px-3 py-2">Get Started</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default CardP4
