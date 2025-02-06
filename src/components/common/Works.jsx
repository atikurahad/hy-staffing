import React, { useState } from "react";

import applyRed from "../../assets/images/apply.svg"
import applyWhite from "../../assets/images/applyWhite.svg"
import marketingRed from "../../assets/images/marketingRed.svg"
import marketingWhite from "../../assets/images/Marketing.svg"
import matchedWhite from "../../assets/images/matchedWhite.svg"
import matchedRed from "../../assets/images/matched.svg"
import WorkRed from "../../assets/images/work.svg"
import workWhite from "../../assets/images/workWhite.svg"




function Works() {
  const [hoverImg, setHoverImg] = useState();

  const workData = [
    {
      id: 1,
      title: "Register Online",
      img: marketingWhite,
      hoverImg: marketingRed,
      desc: "Create an account and fill out your profile to get started.",
    },
    {
      id: 2,
      title: "Search and Apply",
      img:applyWhite ,
      hoverImg:applyRed ,
      desc: "Browse our extensive job listings and apply for positions that match your qualifications.",
    },
    {
      id: 3,
      title: "Get Matched",
      hoverImg: matchedRed,
      img:matchedWhite ,
      desc: "Our team reviews your application and connects you with potential employers.",
    },
    {
      id: 4,
      title: "Start Working",
      hoverImg:WorkRed ,
      img:workWhite,
      desc: "Begin your new job with confidence, knowing you've found the right fit.",
    },
  ];

  return (
    <div className="py-20  px-[300px] bg-[#fff]/30">
      <h1 className="text-5xl font-serif font-extrabold text-gray-700 text-center">
        How It Works
      </h1>
      <p className="text-gray-600 text-center mt-4">
        Seamlessly Navigate the Path to Your Next Job with Our Simple Process.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 ">
        {workData.map((item, index) => (
          <div onMouseEnter={() => setHoverImg(item.id)}
          onMouseLeave={()=>setHoverImg(null)}
            key={index}
            className="group flex flex-col items-start gap-4  p-6 rounded-[20px]  bg-[#FAFBFC]  transition-all duration-300 w-[600px] hover:bg-[#F4F5F7]"
          >
            <div className="flex items-center gap-[21px]">
              {/* Image */}
              <div
                className="p-4 flex items-center justify-center rounded-[8px] 
               bg-[#EBECF0] transition-all duration-300"
              >
                <img
                 
                  src={item.id===hoverImg ? item.hoverImg: item.img}
                  alt={item.title}
                  className="w-10 h-10 "
                />
              </div>

              {/* Title */}
              <h2 className="text-[24px]  text-[#5A5C5F] mt-4 font-[600] leading-[132%] tracking-[-0.48px] group-hover:text-gray-900 transition-all duration-300">
                {item.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#5A5C5F] text-start leading-[164%] ">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
