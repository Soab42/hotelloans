import { useEffect, useRef, useState } from "react";

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
