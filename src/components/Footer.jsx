import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <img src="assets/logo.png" className="logo img-fluid" alt="" />
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <h5 className="site-footer-title mb-3">Quick Links</h5>

            <ul className="footer-menu">
              <li className="footer-menu-item">
                <a href="#about" className="footer-menu-link">
                  Our Story
                </a>
              </li>

              <li className="footer-menu-item">
                <a href="#client" className="footer-menu-link">
                  Client
                </a>
              </li>

              <li className="footer-menu-item">
                <a href="#faq" className="footer-menu-link">
                  FAQs
                </a>
              </li>

              <li className="footer-menu-item">
                <a href="#loan" className="footer-menu-link">
                  loan
                </a>
              </li>

              <li className="footer-menu-item">
                <a href="#partner" className="footer-menu-link">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <h5 className="site-footer-title mb-3">Contact Infomation</h5>

            <p className="text-white d-flex mb-2">
              <i className="bi-telephone me-2"></i>

              <a href="tel: 120-240-9600" className="site-footer-link">
                120-240-9600
              </a>
            </p>

            <p className="text-white d-flex">
              <i className="bi-envelope me-2"></i>

              <a
                href="mailto:
sales@hotelloans.net"
                className="site-footer-link"
              >
                sales@hotelloans.net
              </a>
            </p>

            <p className="text-white d-flex mt-3">
              <i className="bi-geo-alt me-2"></i>
              123 Main Street New York, NY 10001 USA
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

      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-12">
              <p className="copyright-text mb-0">
                Copyright © {currentYear} <a href="#">hotel laons</a>
              </p>
            </div>

            <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-linkedin"></a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="https://youtube.com/templatemo"
                    className="social-icon-link bi-youtube"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
