import React from "react";
import phoneIcon from "../assets/images/phone.svg";
import mailIcon from "../assets/images/mail.svg";

const Footer = () => {
  return (
    <footer className="footer bg-[#5A5C5F]">
      <div className="footer-content pt-[106.993px] pr-[200px] pb-[37.447px] pl-[200px]">
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                <img className="w-5 h-5" src={phoneIcon} alt="Phone Icon" />
              </div>
              <p className="text-[#EFEFEF] font-sans">(123) 245-6789</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                <img className="w-5 h-5" src={mailIcon} alt="Mail Icon" />
              </div>
              <p className="text-[#EFEFEF] font-sans">hr@hystaffing.com</p>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <span className="text-[#EFEFEF] font-sans">
              <p>Job Seekers</p>
              <p>Employer Services</p>
              <p>Contact Us</p>
            </span>
          </div>

          <div className="flex flex-row items-center">
            <span className="text-[#EFEFEF] font-sans">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Mandatory Notices</p>
            </span>
          </div>
        </div>
      </div>
      <div class="w-full h-[2px] bg-gray-400 shadow-lg shadow-gray-500/50"></div>
      <div className="mt-[50px] pb-[38px]">
        <p className="text-[#EFEFEF] font-sans text-center ">
          &copy; {new Date().getFullYear()} HY Staffing. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
