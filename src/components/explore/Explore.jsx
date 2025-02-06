import React from "react";

import Truck from "../../assets/images/truck.svg";
import Laptop from "../../assets/images/laptop.svg";
import Menu from "../../assets/images/menu.svg";
import User from "../../assets/images/user.svg";
import Business from "../../assets/images/business.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Explore() {
  const allData = [
    {
      titlle: "Logistics and Warehousing",
      img: { Truck },
    },
    {
      titlle: "Software Engineer",
      img: { Laptop },
    },
    {
      titlle: "Administrative Support",
      img: { User },
    },
    {
      titlle: "Skilled Trades",
      img: { Business },
    },
    {
      titlle: "View All",
      img: { Menu },
    },
  ];

  return (
    <div className="bg-[#FAFBFC] py-[120px] px-[300px]">
      <div className="w-[1110px]">
        <h1 className="text-[56px] font-serif leading-[132%] font-[800] text-[#5A5C5F] text-center">
          Explore Job Opportunities Across Various Industries
        </h1>

        <p className="text-[#5A5C5F] text-center  leading-[164%] mt-6">
          Unlock Your Potential with Jobs Tailored to Your Skills and
          Experience. Whether you're looking to grow in logistics,
          manufacturing, administrative support, or skilled trades, our
          comprehensive job listings offer a wide range of opportunities to help
          you achieve your career goals.
        </p>

        <div className="flex pt-[80px] gap-6">
          {allData.map((item, index) => (
            <Link
              key={index}
              className="flex items-center  flex-col   w-[244px]  p-6  rounded-[20px] border border-[#EBECF0] bg-white group   transition-all duration-300 hover:bg-[#E5383B]"
            >
            
            <img
                src={item.img[Object.keys(item.img)[0]]}
                alt={item.titlle}
                className="p-6 rounded-full bg-[#F4F5F7] hover:bg-white"
              />
              <h2 className="text-[24px] text-center font-serif leading-[132%] font-[600] text-[#5A5C5F] tracking-[-0.48px] pt-6 group-hover:text-white">
                {item.titlle}
              </h2>
              <span className="flex items-center gap-1 group-hover:text-white">
                <p>View Job</p>
                <FaArrowRight />
              </span>
        
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
