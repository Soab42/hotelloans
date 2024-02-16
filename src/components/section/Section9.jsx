import React, { useState } from "react";
import { FAQs } from "../../data/quistion";

export default function Section9() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="news-section section-padding overflow-hidden"
      id="section_5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 mb-5">
            <h2>Frequently Asked Questions</h2>
            <div className="flex flex-col w-1/2 mt-5 gap-1">
              {FAQs.map((q, i) => {
                return (
                  <FAQ
                    key={i}
                    index={i}
                    question={q.question}
                    answer={q.answer}
                    isOpen={activeIndex === i}
                    toggleAccordion={toggleAccordion}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ question, answer, index, isOpen, toggleAccordion }) {
  const toggle = () => {
    toggleAccordion(index);
  };

  return (
    <div className="">
      <button
        className="text-start p-3 text-xl text-teal-400 ring-1 ring-gray-200 drop-shadow-lg  w-full font-bold bg-sky-600 backdrop-brightness-125"
        onClick={toggle}
      >
        {question}
      </button>

      <div
        className={`text-xl bg-slate-100 overflow-hidden duration-300 ${
          isOpen ? "max-h-[70rem] p-4 opacity-100" : "max-h-0 opacity-0 hidden"
        } transition-max-height`}
      >
        <span className="bi-stars mr-2"></span>
        {answer}
      </div>
    </div>
  );
}
