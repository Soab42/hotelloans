import React, { useState, useEffect, memo } from "react";
import { clientData } from "../../data/clientData";

function Section7() {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex(
        (prevIndex) => (prevIndex + 1) % (clientData.length - 3)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding" id="client">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-4">
            <h2>Our Happiness</h2>
          </div>
          <div className="flex overflow-scroll gap-2 px-2 cardDiv">
            {clientData.map((client, index) => {
              if (checkConsecutive(currentClientIndex, index)) {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 slide-left"
                    key={client.hotelName}
                    style={{ minWidth: "300px" }} // Ensure a minimum width for the card
                  >
                    <div className="custom-block-wrap">
                      <img
                        src={client.imageSrc}
                        className="custom-block-image img-fluid h-80"
                        alt=""
                      />

                      <div className="custom-block">
                        <div className="custom-block-body">
                          <h5 className="mb-3">{client.hotelName}</h5>

                          <div className="flex gap-1 flex-wrap">
                            {client.facilities.map((f) => (
                              <p
                                className="xl:px-3 px-2 text-black font-bold p-1 rounded-full xl:text-md text-sm bg-emerald-300"
                                key={f}
                              >
                                {f}
                              </p>
                            ))}
                          </div>

                          <div className="progress mt-4">
                            <div
                              className="progress-bar w-75"
                              role="progressbar"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div className="d-flex align-items-center my-2">
                            <p className="mb-0 font-bold">
                              <strong>Location: </strong>
                              {client.location}
                            </p>

                            <p className="ms-auto mb-0 font-bold">
                              <strong>Rating:</strong>
                              {client.rating}
                            </p>
                          </div>
                        </div>

                        <p className="custom-btn btn">
                          Loan Amount:
                          <span className=" pl-3 text-emerald-300 font-bold">
                            {client.loanAmount}M
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Section7);

function checkConsecutive(a, b) {
  if (a === b || a + 1 === b || a + 2 === b) {
    return true;
  } else {
    return false;
  }
}
