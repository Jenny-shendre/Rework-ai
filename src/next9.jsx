import './next9.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Next9() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid bodycol m-0  p-2 ">
        <div class="container p-5">
          <h1 class="heading p-5">Success Stories</h1>
          <div class="row">
            <div class="col-md-4">
              <div class="card cardBorder">
                <img src="/img01.png " class="cardBorderimage" alt="Image 1"></img>
                <div class="card-body p-5">
                  <h5 class="card-title cardtext">Rework has been a great way to make the hiring process easier and faster.</h5>
                  <p class="card-text cardsubtitle">“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card cardBorder ">
                <img src="/img02.png" class="cardBorderimage" alt="Image 2"></img>
                <div class="card-body p-5">
                  <h5 class="card-title cardtext">Rework has been a great way to make the hiring process easier and faster.</h5>
                  <p class="card-text cardsubtitle">“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card cardBorder">
                <img src="/img03.png" class="cardBorderimage" alt="Image 3"></img>
                <div class="card-body p-5">
                  <h5 class="card-title cardtext"> Rework has been a great way to make the hiring process easier and faster.</h5>
                  <p class="card-text cardsubtitle">“We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Next9
