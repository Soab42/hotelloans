import Hands from "../../template/images/icons/hands.png";
import Heart from "../../template/images/icons/heart.png";
import Receive from "../../template/images/icons/receive.png";
import Scholarship from "../../template/images/icons/scholarship.png";
export default function Section2() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto">
            <p className="text-7xl text-emerald-500 font-bold mb-5">
              Welcome to Hotel Loans{" "}
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="#" className="d-block">
                <img
                  src={Hands}
                  className="featured-block-image img-fluid"
                  alt=""
                />

                <p className="featured-block-text">
                  Become a <strong>Member</strong>
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="#" className="d-block">
                <img
                  src={Heart}
                  className="featured-block-image img-fluid"
                  alt=""
                />

                <p className="featured-block-text">
                  <strong>Explore</strong> Earth
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="#" className="d-block">
                <img
                  src={Receive}
                  className="featured-block-image img-fluid"
                  alt=""
                />

                <p className="featured-block-text">
                  Make a <strong>Decision</strong>
                </p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img
                  src={Scholarship}
                  className="featured-block-image img-fluid"
                  alt=""
                />

                <p className="featured-block-text">
                  <strong>Start</strong> Working
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
