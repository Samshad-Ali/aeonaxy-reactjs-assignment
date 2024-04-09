import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Phonenavbar from "../Phonenavbar";

const Navbar = () => {
  const [isBar,setIsBar] = useState(false);
  const handleToggleBar=()=>{
    setIsBar(!isBar);
  }
  return (
    <>
    <nav className="w-full flex items-center justify-between  p-4 px-8">
      <div className="flex gap-8 items-center">
        <img className="w-8 md:w-10  " src={logo} alt="logo" />
        <ul className="hidden md:flex items-center gap-8 font-semibold text-textPrimaryClr">
          <li>Personal</li>
          <li>Business</li>
          <li>Developer</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="hidden gap-4 md:flex">
        <button className="px-6 rounded-full border-2 border-textPrimaryClr p-2 text-textPrimaryClr font-semibold">
          Log In
        </button>
        <button className="px-6 rounded-full border-2 border-textPrimaryClr p-2 bg-textPrimaryClr text-white font-semibold  ">
          Sign Up
        </button>
      </div>
      <span onClick={handleToggleBar} className="z-40 cursor-pointer md:hidden block text-textPrimaryClr"><GiHamburgerMenu size={25} /></span>
    </nav>
    <Phonenavbar setIsBar={setIsBar} isBar={isBar} />
    </>
  );
};

export default Navbar;
