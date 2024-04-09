import './cardsP3.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Cards() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div class="cards-bg container-fluid m-0">
        <div class="container text-center">
          <div class="row g-2">
            <div className="col-12 col-sm-12 col-md-12 cards-text my-5">
              <p>Our Amazing Benefits Helpful For Your Hiring</p>
            </div>
            <div class=" col-4 col-6 col-12 col-lg-4 col-sm-12 col-md-6">

              <img class="float-start" src="/c1.png" /><br /><br /><br />
              <p class="para-text text-head">60% <br />
                Cost Reduce</p>
              <p class="para-text text-cont">Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p>
            </div>
            <div class="col-4 col-6 col-12 col-lg-4 col-sm-12 col-md-6">
              <img class="float-start" src="/c2.png" /><br /><br /><br />
              <p class="para-text text-head">50% Faster <br />
                Recruitment by TAT</p>
              <p class="para-text text-cont">Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p>
            </div>
            <div class="col-4 col-6 col-12 col-lg-4 col-sm-12 col-md-6">

              <img class="float-start" src="/c3.png" /><br /><br /><br />
              <p class="para-text text-head">Highly Contextualized <br />
                Interview</p>
              <p class="para-text text-cont">Al models generate highly contextualized interviews for the candidates based on your Company profile, Job description and Candidate's CV.</p>
            </div>

            <div class="col-4  col-6 col-12 col-lg-4 col-sm-12 col-md-6">

              <img class="float-start" src="/c4.png" /><br /><br /><br />
              <p class="para-text text-head">Automated <br />
                Scheduling</p>
              <p class="para-text text-cont">Email & WhatsApp based communication for interview scheduling with automated reminders.</p>
            </div>
            <div class="col-4 col-6 col-12 col-lg-4 col-sm-12 col-md-6">

              <img class="float-start" src="/c5.png" /><br /><br /><br />        <p class="para-text text-head">AI generated Interviews <br />
                On what matters</p>
              <p class="para-text text-cont">0 manual interventions, completely seamless experience for the candidates.</p>
            </div>
            <div class="col-4 col-6 col-12 col-lg-4 col-sm-12 col-md-6">

              <img class="float-start" src="/c6.png" /><br /><br /><br />
              <p class="para-text text-head">in-built <br />
                ATS</p>
              <p class="para-text text-cont">To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.</p>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default Cards
