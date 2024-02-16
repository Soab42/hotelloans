import React from "react";
import "./template/css/bootstrap-icons.css";
import "./template/css/bootstrap.min.css";
import "./template/css/style.css";
import "./template/css/index.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
function App() {
  const [scroll, setScroll] = useState(false);
  // console.log(scroll);
  useEffect(() => {
    // calculate current scroll position for navbar and scrollToTop button
    const updateScrollPosition = () => {
      const currentPosition = document.documentElement.scrollTop;
      if (currentPosition >= 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", () => {
      updateScrollPosition();
    });
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  return (
    <div id="section_1 " className="relative">
      <Header />

      <NavBar scroll={scroll} />

      <MainPage />

      <Footer />
    </div>
  );
}

export default React.memo(App);
