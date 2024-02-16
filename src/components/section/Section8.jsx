import React, { useState } from "react";
import Badge from "../../template/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg";
import { programs } from "../../data/programs";
export default function Section8() {
  const [route, setRoute] = useState(0);

  return (
    <section className="volunteer-section section-padding" id="loan">
      <div className="flex xl:flex-row flex-col w-full container text-teal-300 mb-16 xl:h-16 text-lg justify-between gap-2 ">
        {programs.map((program, i) => {
          return (
            <button
              key={programs.title}
              className={`shadow-lg backdrop-blur-md font-bold ${
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
              <div className="row h-fit" key={program.title}>
                <div className="col-lg-6 col-12">
                  <h2 className="text-white mb-4 slide-right text-3xl xl:text-inherit">
                    {program.title}
                  </h2>

                  <div className="shadow-2xl flex items-stretch justify-center xl:text-xl font-thin h-fit text-justify text-white p-6 slide-top rounded-lg bg-sky-400/20 bg-clip-padding backdrop-filter backdrop-blur-sm overflow-hidden bg-opacity-40">
                    {/* <span className=" bg-violet-600  h-16 w-full absolute -left-0 -top-0 blur-sm -z-10 slide-right"></span> */}
                    <div className="">{program.description}</div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 hidden xl:block">
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
