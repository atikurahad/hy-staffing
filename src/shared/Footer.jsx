import React from "react";
import phoneIcon from "../assets/images/phone.svg";
import mailIcon from "../assets/images/mail.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div>
            <span className="flex flex-row items-center gap-4">
              <img src={phoneIcon} alt="" srcset="" />

              <p>(123) 245-6789</p>
            </span>
          </div>
          <div>
            <span className="flex flex-row items-center gap-4">
              <img src={mailIcon} alt="" srcset="" />

              <p>hr@hystaffing.com</p>
            </span>
          </div>
          <div></div>

          <p>
            &copy; {new Date().getFullYear()} HY Staffing. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
