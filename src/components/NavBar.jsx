import Logo from "../template/assets/logo.png";
export default function NavBar({ scroll }) {
  return (
    <nav
      className={`${
        scroll ? "fixed w-full z-50 top-0 flex " : ""
      } bg-light shadow-lg navbar-expand-lg navbar`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} className="logo img-fluid" alt="Hotels Loans" />
        </a>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#top">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link click-scroll" href="#loan">
                Loan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#contact">
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
