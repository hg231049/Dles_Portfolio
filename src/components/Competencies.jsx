import React from "react";
import { Link } from "react-router-dom";
import { competencies } from "@/data/competencies";

export const Competencies = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {competencies.map((item) => (
        <div
          key={item.id}
          className="rounded-md md:rounded-xl bg-white/45 backdrop-blur-md border border-white/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="thumbs mb-4 overflow-hidden rounded-sm md:rounded-sm">
            <img src={item.thumbs} alt={item.title} />
          </div>
          {/* badge */}
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-day-color px-3 py-1 text-xs font-bold text-white tracking-wider">
                {item.badge}
              </span>
            </div>
          <div className="relative">
            {/* title */}
            <h3 className="text-xl font-black text-text-color">{item.title}</h3>

            <p className="mt-2 text-sm text-subText-color leading-relaxed whitespace-pre-line">
              {item.subtitle}
            </p>
            {item.link && (
                <div className="view-btn absolute bottom-3 right-3 flex justify-center items-center w-10 h-10 text-lg font-bold rounded-4xl bg-white shadow-md cursor-pointer">
                  <Link to={item.link}>+</Link>
                </div>
              )}
          </div>
          

          {/* line */}
          <div className="my-5 h-px w-full bg-day-color/20"></div>

          {/* list */}
          <ul className="space-y-3">
            {item.points.map((point, idx) => (
              <li
                key={idx}
                className="flex gap-3 text-sm leading-relaxed text-text-color"
              >
                <span className="mt-[7px] block w-1.5 h-1.5 rounded-full bg-day-color shrink-0"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Competencies;
