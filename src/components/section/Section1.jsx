import { useEffect, useRef, useState } from "react";
import Box from "/assets/1.jpg";

import Slide from "../Slide";
import { slideData } from "../../data/slide";
export default function Section1() {
  const [show, setShow] = useState(0);
  const idRef = useRef();
  useEffect(() => {
    clearInterval(idRef.current);
    idRef.current = setInterval(() => {
      setShow((show + 1) % slideData.length);
    }, 10000);

    return () => clearInterval(idRef.current);
  }, [show]);

  return (
    <section className="hero-section hero-section-full-height">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12 p-0">
            <div
              id="hero-slide"
              className="carousel carousel-fade slide"
              data-bs-ride="carousel"
            >
              <div className={`carousel-inner `}>
                <div
                  className={`carousel-item  relative ${
                    show === 0 ? "active" : ""
                  }   `}
                >
                  <img
                    src={Box}
                    className="carousel-image slide-right img-fluid blur-sm brightness-75"
                    alt="..."
                  />

                  <div className="absolute z-50 left-0 top-1 w-full flex flex-col items-center justify-center h-full slide-left">
                    <p className="font-bold text-7xl text-sky-500 w-4/6 slide-left">
                      Elevate Your Hotel Business with Our Financing Solutions!
                    </p>

                    <p className="text-2xl  pr-20  text-orange-500 w-4/6">
                      Understand the unique financial challenges of today. That
                      &#39; s why we are excited to introduce tailored financing
                      solutions designed to elevate your hotel business to new
                      heights.
                    </p>
                  </div>
                </div>
                {slideData.map((sd, i) => {
                  if (i === show) {
                    return <Slide show={show} data={sd} key={sd.title} />;
                  }
                })}
              </div>

              <button
                className="carousel-control-prev"
                onClick={() => {
                  setShow((prev) => {
                    return (prev - 1) % slideData.length;
                  });
                }}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                onClick={() => {
                  setShow((prev) => {
                    return (prev + 1) % slideData.length;
                  });
                }}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
