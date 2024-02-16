// import African from "../../template/images/causes/group-african-kids-paying-attention-class.jpg";
// import { clientData } from "../../data/clientData";

// export default function Section7() {
//   return (
//     <section className="section-padding" id="section_3">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 col-12 text-center mb-4">
//             <h2>Our Causes</h2>
//           </div>
//           <div className="flex overflow-scroll gap-5">
//             {clientData.map((client) => {
//               return (
//                 <div
//                   className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
//                   key={client.hotelName}
//                 >
//                   <div className="custom-block-wrap">
//                     <img
//                       src={client.imageSrc}
//                       className="custom-block-image img-fluid h-96"
//                       alt=""
//                     />

//                     <div className="custom-block">
//                       <div className="custom-block-body">
//                         <h5 className="mb-3">{client.hotelName}</h5>

//                         <div className="flex gap-1">
//                           {client.facilities.map((f) => (
//                             <p
//                               className="px-3 text-black fw-bold p-1 rounded-full text-md bg-emerald-300"
//                               key={f}
//                             >
//                               {f}
//                             </p>
//                           ))}
//                         </div>

//                         <div className="progress mt-4">
//                           <div
//                             className="progress-bar w-75"
//                             role="progressbar"
//                             aria-valuenow="75"
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                           ></div>
//                         </div>

//                         <div className="d-flex align-items-center my-2">
//                           <p className="mb-0 font-bold">
//                             <strong>Location: </strong>
//                             {client.location}
//                           </p>

//                           <p className="ms-auto mb-0 font-bold">
//                             <strong>Rating:</strong>
//                             {client.rating}
//                           </p>
//                         </div>
//                       </div>

//                       <p className="custom-btn btn">
//                         Loan Amount:
//                         <span className=" pl-3 text-emerald-300 font-bold">
//                           {client.loanAmount}M
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React, { useState, useEffect } from "react";
// import { clientData } from "../../data/clientData";

// export default function Section7() {
//   const [currentClientIndex, setCurrentClientIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clientData.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Scroll to the center of the current client card
//     const cardWidth = document.querySelector(".col-lg-4").clientWidth;
//     const scrollLeft =
//       currentClientIndex * cardWidth - window.innerWidth / 2 + cardWidth / 2;
//     document
//       .querySelector(".flex")
//       .scrollTo({ left: scrollLeft, behavior: "smooth" });
//   }, [currentClientIndex]);

//   return (
//     <section className="section-padding" id="section_3">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 col-12 text-center mb-4">
//             <h2>Our Causes</h2>
//           </div>
//           <div className="flex overflow-scroll gap-5">
//             {clientData.map((client, index) => {
//               return (
//                 <div
//                   className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
//                   key={client.hotelName}
//                   style={{ minWidth: "300px" }} // Ensure a minimum width for the card
//                 >
//                   <div className="custom-block-wrap">
//                     <img
//                       src={client.imageSrc}
//                       className="custom-block-image img-fluid h-96"
//                       alt=""
//                     />

//                     <div className="custom-block">
//                       <div className="custom-block-body">
//                         <h5 className="mb-3">{client.hotelName}</h5>

//                         <div className="flex gap-1">
//                           {client.facilities.map((f) => (
//                             <p
//                               className="px-3 text-black fw-bold p-1 rounded-full text-md bg-emerald-300"
//                               key={f}
//                             >
//                               {f}
//                             </p>
//                           ))}
//                         </div>

//                         <div className="progress mt-4">
//                           <div
//                             className="progress-bar w-75"
//                             role="progressbar"
//                             aria-valuenow="75"
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                           ></div>
//                         </div>

//                         <div className="d-flex align-items-center my-2">
//                           <p className="mb-0 font-bold">
//                             <strong>Location: </strong>
//                             {client.location}
//                           </p>

//                           <p className="ms-auto mb-0 font-bold">
//                             <strong>Rating:</strong>
//                             {client.rating}
//                           </p>
//                         </div>
//                       </div>

//                       <p className="custom-btn btn">
//                         Loan Amount:
//                         <span className=" pl-3 text-emerald-300 font-bold">
//                           {client.loanAmount}M
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect, memo } from "react";
import { clientData } from "../../data/clientData";

function Section7() {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clientData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Batch update scroll position
    requestAnimationFrame(() => {
      const cardWidth = document.querySelector(".col-lg-4").clientWidth;
      const scrollLeft =
        currentClientIndex * cardWidth - window.innerWidth / 2 + cardWidth / 2;
      document
        .querySelector(".cardDiv")
        .scrollTo({ left: scrollLeft, behavior: "smooth" });
    });
  }, [currentClientIndex]);
  return (
    <section className="section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-4">
            <h2>Our Causes</h2>
          </div>
          <div className="flex overflow-scroll gap-5 cardDiv">
            {clientData.map((client, index) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0"
                  key={client.hotelName}
                  style={{ minWidth: "300px" }} // Ensure a minimum width for the card
                >
                  <div className="custom-block-wrap">
                    <img
                      src={client.imageSrc}
                      className="custom-block-image img-fluid h-96"
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Section7);
