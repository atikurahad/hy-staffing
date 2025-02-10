

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
      title: "Logistics and Warehousing",
      img: { Truck },
    },
    {
      title: "Software Engineer",
      img: { Laptop },
    },
    {
      title: "Administrative Support",
      img: { User },
    },
    {
      title: "Skilled Trades",
      img: { Business },
    },
    {
      title: "View All",
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
          Experience. Whether you&#39;re looking to grow in logistics,
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
                alt={item.title}
                className="p-6 rounded-full bg-[#F4F5F7]"
              />
              <h2 className="text-[24px] text-center leading-[31.68px] font-[600] text-[#5A5C5F] tracking-[-0.48px] mt-6 group-hover:text-white">
                {item.title}
              </h2>
              <div className="flex items-center gap-1 group-hover:text-white">
                  <p className="text-base leading-[132%] text-[#5A5C5F]">View Job</p>
                <FaArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
