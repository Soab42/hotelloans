import React, { useEffect, useRef, useState } from "react";
import Avatar1 from "../../template/images/avatar/portrait-young-beautiful-woman-gesticulating.jpg";
import Avatar3 from "../../template/images/avatar/portrait-young-redhead-bearded-male.jpg";
import Avatar4 from "../../template/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg";
import Avatar5 from "../../template/images/avatar/studio-portrait-emotional-happy-funny.jpg";
export default function Section10() {
  const data = 4;

  const [show, setShow] = useState(0);
  const idRef = useRef();
  useEffect(() => {
    clearInterval(idRef.current);
    idRef.current = setInterval(() => {
      setShow((show + 1) % data);
    }, 3000);

    return () => clearInterval(idRef.current);
  }, [show]);
  let content;
  if (show === 0) {
    content = (
      <div className="carousel-item active " key={1}>
        <div className="carousel-caption">
          <h4 className="carousel-title slide-right">
            Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis
            metus tempor orci
          </h4>

          <small className="carousel-name slide-top" key={1}>
            <span className="carousel-name-title">Thomas</span>, Partner
          </small>
        </div>
      </div>
    );
  } else if (show === 1) {
    content = (
      <div className="carousel-item active " key={2}>
        <div className="carousel-caption">
          <h4 className="carousel-title slide-left">
            Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm
            tokito charity theme
          </h4>

          <small className="carousel-name slide-top" key={2}>
            <span className="carousel-name-title">Jane</span>, Advisor
          </small>
        </div>
      </div>
    );
  } else if (show === 2) {
    content = (
      <div className="carousel-item active " key={3}>
        <div className="carousel-caption">
          <h4 className="carousel-title slide-right">
            Sint quae natus harum tempora dolor velit aspernatur nesciunt!
            Neque!
          </h4>

          <small className="carousel-name slide-top" key={3}>
            <span className="carousel-name-title">Bob</span>, Entreprenuer
          </small>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="carousel-item active" key={4}>
        <div className="carousel-caption">
          <h4 className="carousel-title slide-left" key={4}>
            alias nobis incidunt enim id suscipit ipsa, aperiam animi doloremque
            vero explicabo. Odio obcaecati aperiam?
          </h4>

          <small className="carousel-name slide-top">
            <span className="carousel-name-title">Jane</span>, Advisor
          </small>
        </div>
      </div>
    );
  }

  return (
    <section className="testimonial-section section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h2 className="mb-lg-3 ">Happy Customers</h2>

            <div
              id="testimonial-carousel"
              className="carousel carousel-fade slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {content}
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#testimonial-carousel"
                    onClick={() => setShow(0)}
                    data-bs-slide-to="0"
                    className={`${show == 0 ? "active" : ""}`}
                  >
                    <img
                      src={Avatar1}
                      className="img-fluid rounded-circle avatar-image duration-300"
                      alt="avatar"
                    />
                  </li>

                  <li
                    data-bs-target="#testimonial-carousel"
                    onClick={() => setShow(1)}
                    data-bs-slide-to="1"
                    className={`${show == 1 ? "active" : ""}`}
                  >
                    <img
                      src={Avatar3}
                      className="img-fluid rounded-circle avatar-image duration-300"
                      alt="avatar"
                    />
                  </li>

                  <li
                    data-bs-target="#testimonial-carousel"
                    onClick={() => setShow(2)}
                    data-bs-slide-to="2"
                    className={`${show == 2 ? "active" : ""}`}
                  >
                    <img
                      src={Avatar4}
                      className="img-fluid rounded-circle avatar-image duration-300"
                      alt="avatar"
                    />
                  </li>

                  <li
                    data-bs-target="#testimonial-carousel"
                    onClick={() => setShow(3)}
                    data-bs-slide-to="3"
                    className={`${show == 3 ? "active" : ""}`}
                  >
                    <img
                      src={Avatar5}
                      className="img-fluid rounded-circle avatar-image duration-300"
                      alt="avatar"
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
