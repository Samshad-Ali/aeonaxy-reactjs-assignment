import React from "react";
import logo from "../assets/logo.png";

const Phonenavbar = ({setIsBar,isBar}) => {
  return (
    <nav className= {` ${isBar?'translate-x-0':'-translate-x-[100%]'} transition-all bg-white flex md:hidden absolute z-10 top-0 right-0 w-full h-screen   flex-col items-center justify-center p-4 px-8`}>
      <div className="flex flex-col gap-8 items-center">
        <img className="w-10 " src={logo} alt="logo" />
        <ul className="flex  flex-col items-center gap-8 font-semibold text-textPrimaryClr">
          <li>Personal</li>
          <li>Business</li>
          <li>Developer</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="flex gap-4 mt-5">
        <button className="px-6 rounded-full border-2 border-textPrimaryClr p-2 text-textPrimaryClr font-semibold">
          Log In
        </button>
        <button className="px-6 rounded-full border-2 border-textPrimaryClr p-2 bg-textPrimaryClr text-white font-semibold  ">
          Sign Up
        </button>
      </div>
    
    </nav>
  );
};

export default Phonenavbar;
