import React from "react";
import hyIcon from "../assets/images/HY.svg";
import staffIcon from "../assets/images/Staffing.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className=" px-[100px] py-[40px]">
        <div className="container mx-auto flex justify-around items-center">
          <div className="text-white text-lg font-bold">
            <div className="flex items-center">
              <img
                className='"w-[78.693px] h-[44px]'
                src={hyIcon}
                alt=""
                srcset=""
              />
              <img
                className="w-[228.468px] h-[59.28px]"
                src={staffIcon}
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className=" flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#E5383B] font-bold"
                  : "text-black hover:text-[#b05556]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-[#E5383B] font-bold"
                  : "text-black hover:text-[#b05556]"
              }
            >
              Job Seekers
            </NavLink>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                isActive
                  ? "text-[#E5383B] font-bold"
                  : "text-black hover:text-[#b05556]"
              }
            >
              Employer Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#E5383B] font-bold"
                  : "text-black hover:text-[#b05556]"
              }
            >
              Contact Us
            </NavLink>
          </div>

          <div className="flex items-center justify-center   gap-4">
            <button className=" flex  self-stretch text-white font-sans px-6 py-4 rounded-lg bg-[#E5383B] ">
              {" "}
              Client Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
