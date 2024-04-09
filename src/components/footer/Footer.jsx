import React from "react";
import icon from "../../assets/icon.png";
import flag from "../../assets/Flag-United-States-of-America.webp";
import { footer1Data, footer2Data } from "../../utils/footerData";
const Footer = () => {
  return (
    <footer className="w-full lg:mt-0 mt-8 flex flex-col gap-4 p-4 px-8 bg-white">
      <img className="w-44" src={icon} alt="paypal-icon" />
      <div className="flex items-center md:flex-row flex-col-reverse gap-4  justify-between border-b border-blue-200  py-4">
        <div className="flex items-center md:flex-nowrap flex-wrap gap-4 text-textPrimaryClr capitalize font-semibold text-sm cursor-pointer">
          {footer1Data.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
        <div>
          <img className="w-6" src={flag} alt="flag" />
        </div>
      </div>
      <div className="flex justify-between items-center xl:flex-row gap-4 flex-col  mb-8">
        <div className="flex md:flex-nowrap flex-wrap items-center gap-4 text-textPrimaryClr font-semibold text-sm cursor-pointer">
          {footer2Data.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
        <div className="flex sm:flex-row flex-col items-center gap-4">
          <span className="text-gray-700 text-xs">© 1999-2022</span>
          <ul className="flex items-center gap-2 md:gap-4 text-textPrimaryClr font-semibold text-sm cursor-pointer">
            <li>Accessibility</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
