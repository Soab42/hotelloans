import React from "react";
import FoodBankLogo from "../../template/images/group-people-volunteering-foodbank-poor-people.jpg";
export default function Section3() {
  return (
    <section className="section-padding section-bg" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <img
              src={FoodBankLogo}
              className="custom-text-box-image img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-text-box">
              <h2 className="mb-2">Our Story</h2>

              <h5 className="mb-3">Hotel Loans, A Lending Organization</h5>

              <p className="mb-0 text-justify">
                {/* Hotel Loans, A Lending Organization denotes a specialized
                financial institution or company that focuses on providing loans
                tailored specifically for the hospitality industry, particularly
                hotels. This lending organization likely offers various
                financial products and services aimed at supporting hotel owners
                and investors in acquiring funds for property development,
                renovation, expansion, or other business needs within the
                hospitality sector. */}
                Hotel Loans, we are dedicated to delivering exceptional service
                and unparalleled financial expertise to support your funding and
                project development needs. We understand the significance of
                realizing our client’s goals and share the enthusiasm for
                turning their distinctive ideas into reality. With over 27 years
                of industry experience, robust underwriting capabilities, and a
                network of strategic investors, our team is well-equipped to
                secure funding for even the most complex loans across the
                nation. We take immense pride in being a privately held company
                with an entrepreneurial spirit at our core. Our commitment to
                innovation, personalized solutions, and a client-centric
                approach drives us to go above and beyond in meeting your
                financial requirements. We don’t just provide funding; we
                empower your vision and contribute to your success. Discover the
                difference of partnering with Hotel Loans, a trusted financial
                ally, driven by experience and fueled by a passion for your
                unique journey.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box mb-lg-0">
                  <h5 className="mb-3">Our Mission</h5>

                  <p>
                    we aim to contribute to the success and sustainability of
                    hotels and resorts worldwide.
                  </p>

                  <ul className="custom-list mt-2">
                    <li className="custom-list-item d-flex">
                      <i className="bi-check custom-text-box-icon me-2"></i>
                      Revolutionizing Hotel Financing Solutions.
                    </li>
                    <li className="custom-list-item d-flex">
                      <i className="bi-check custom-text-box-icon me-2"></i>
                      Expanding Horizons, Fueling Hospitality Dreams
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                  <div className="counter-thumb">
                    <div className="d-flex">
                      <span
                        className="counter-number"
                        data-from="1"
                        data-to="2009"
                        data-speed="1000"
                      ></span>
                      <span className="counter-number-text">2009</span>
                    </div>

                    <span className="counter-text">Founded</span>
                  </div>

                  <div className="counter-thumb mt-4">
                    <div className="d-flex">
                      <span
                        className="counter-number"
                        data-from="1"
                        data-to="120"
                        data-speed="1000"
                      ></span>
                      <span className="counter-number-text">120B</span>
                    </div>
                    <span className="counter-text">Loans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
