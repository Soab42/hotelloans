import React from "react";
import Avatar from "../../template/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg";

export default function Section11() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
            <div className="contact-info-wrap">
              <h2>Get in touch</h2>

              <div className="contact-image-wrap d-flex flex-wrap">
                <img src={Avatar} className="img-fluid avatar-image" alt="" />

                <div className="d-flex flex-column justify-content-center ms-3">
                  <p className="mb-0">Clara Barton</p>
                  <p className="mb-0">
                    <strong>HR & Office Manager</strong>
                  </p>
                </div>
              </div>

              <div className="contact-info">
                <h5 className="mb-3">Contact Infomation</h5>

                <p className="d-flex mb-2">
                  <i className="bi-geo-alt me-2"></i>
                  123 Main Street New York, NY 10001 USA
                </p>

                <p className="d-flex mb-2">
                  <i className="bi-telephone me-2"></i>

                  <a href="tel: 120-240-9600">120-240-9600</a>
                </p>

                <p className="d-flex">
                  <i className="bi-envelope me-2"></i>

                  <a href="mailto:sales@hotelloans.net">sales@hotelloans.net</a>
                </p>

                <a
                  href="https://www.google.com/maps/place/123+Main+St,+Queens,+NY+10001,+USA/@40.7626859,-73.8340686,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2600ff31a3f4f:0xaeb90c61fe2e88fe!8m2!3d40.7626819!4d-73.8314937!16s%2Fg%2F11q2x8m5lk?entry=ttu"
                  className="custom-btn btn mt-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Direction
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mx-auto">
            <form
              className="custom-form contact-form"
              action="#"
              method="post"
              role="form"
            >
              <h2>Contact form</h2>

              <p className="mb-4">
                Or, you can just send an email:
                <a href="#">info@charity.org</a>
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="form-control"
                    placeholder="Jack"
                    required
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="form-control"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <input
                type="email"
                name="email"
                id="email"
                pattern="[^ @]*@[^ @]*"
                className="form-control"
                placeholder="Jackdoe@gmail.com"
                required
              />

              <textarea
                name="message"
                rows="5"
                className="form-control"
                id="message"
                placeholder="What can we help you?"
              ></textarea>

              <button type="submit" className="form-control">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
