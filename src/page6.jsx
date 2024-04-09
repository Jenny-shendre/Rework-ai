import './page6.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Page6() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="row container-fluid d-flex justify-content-center m-0">
        <div className="col-xl-7 col-xxl-7 col-lg-7 col-md-12 col-sm-12 ">
          <div className="row container-fluid d-flex justify-content-center">
            <div className="col-12 mt-5 ">
              <h1 class="headingtxt mt-5 ">Discover the Future of Talent Assessment!</h1>
            </div>
            <div className="col-12 mt-3">
              <p class="textp">Facing challenges in traditional hiring?Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.</p>
              <ul class="textp mt-5"><h5>Inside this Whitepaper:</h5>
                <li>Manual vs. Machine-based hiring: Costs & Challenges.</li>
                <li>The truth about "Interview as a Service."</li>
                <li>Generative AI: The simple explanation. Optimize Your Hiring Process Today!</li>
              </ul>
            </div>
            <div className="col-12 mt-5">
              <button class="Book-A-Demo-button button1 px-4 py-2 mt-4">Download Now for Smarter Recruitment</button>
            </div>
          </div>

        </div>
        <div className="col-xl-4 col-xxl-4 col-lg-4 col-sm-6 col-md-6 d-flex justify-content-center p-5">
          <img src="/handbook12.png " alt="" />
        </div>
      </div>


    </>
  )
}

export default Page6

