import React, { useState } from "react";
import Badge from "../../template/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg";
import { programs } from "../../data/programs";
export default function Section8() {
  const [route, setRoute] = useState(0);

  return (
    <section className="volunteer-section section-padding" id="loan">
      <div className="flex w-full container text-teal-400 mb-16 h-16 text-lg justify-between gap-2 ">
        {programs.map((program, i) => {
          return (
            <button
              key={programs.title}
              className={`shadow-lg backdrop-blur-md ${
                i === route ? "bg-[#5bc1ac] text-white" : ""
              } hover:bg-[#5bc1ac] hover:text-slate-100 rounded-md duration-500 w-full`}
              onClick={() => setRoute(i)}
            >
              {program.title}
            </button>
          );
        })}
      </div>
      <div className="container">
        {programs.map((program, i) => {
          if (route === i) {
            return (
              <div className="row" key={program.title}>
                <div className="col-lg-6 col-12">
                  <h2 className="text-white mb-4 slide-right">
                    {program.title}
                  </h2>

                  <div className="shadow-2xl flex items-stretch justify-center text-2xl font-thin h-[21rem] text-justify text-white p-6 slide-top rounded-lg bg-sky-400/30 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
                    <span className=" bg-white/10 h-full w-36 mr-2  left-0 top-0 -z-10"></span>
                    {program.description}
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <img
                    src={program.img}
                    className="rounded-2xl w-full slide-left h-[26rem]"
                    alt=""
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
