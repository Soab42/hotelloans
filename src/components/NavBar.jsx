import { useState } from "react";
export default function NavBar({ scroll }) {
  const [route, setRoute] = useState();
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav
      className={`${
        scroll ? "fixed w-full z-50 top-0 flex " : ""
      } bg-light shadow-lg navbar-expand-lg navbar `}
    >
      <div className="container relative">
        <a className="navbar-brand" href="#">
          <img
            src={"https://i.ibb.co/Fs0RFBR/logo.png"}
            className="logo img-fluid h-10"
            alt="Hotels Loans"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsopen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            isOpen
              ? "hidden xl:block"
              : "absolute left-0 top-14 bg-white w-full slide-right"
          }`}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" onClick={() => setRoute()}>
              <a
                className={`nav-link click-scroll ${!route ? "active" : ""}`}
                href="#"
              >
                Home
              </a>
            </li>

            <li className="nav-item" onClick={() => setRoute("about")}>
              <a
                className={`nav-link click-scroll ${
                  route == "about" ? "active" : ""
                }`}
                href="#about"
              >
                About
              </a>
            </li>

            <li className="nav-item" onClick={() => setRoute("loan")}>
              <a
                className={`nav-link click-scroll ${
                  route == "loan" ? "active" : ""
                }`}
                href="#loan"
              >
                Loan
              </a>
            </li>
            {/* <li className="nav-item" onClick={() => setRoute("blog")}>
              <a
                className={`nav-link click-scroll ${
                  route == "blog" ? "active" : ""
                }`}
                href="#blog"
              >
                Blog
              </a>
            </li> */}
            <li className="nav-item" onClick={() => setRoute("contact")}>
              <a
                className={`nav-link click-scroll ${
                  route == "contact" ? "active" : ""
                }`}
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item ms-3">
              <a
                className="nav-link custom-btn custom-border-btn btn gap-2 bi-telephone"
                href="#"
              >
                <span className="pl-2">Call us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
