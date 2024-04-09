import React from "react";
import Inputfield from "./Inputfield";

const Form = () => {
  return (
    <div className=" lg:absolute static xl:right-20 lg:right-8 flex flex-col justify-center gap-2 p-4 py-8 w-full  sm:w-[70%] lg:w-[500px] -translate-y-0 md:-translate-y-32 shadow-gray-300 shadow-md bg-white rounded-md">
      <p className="text-2xl">Get Started</p>
      <span>
        Tell us a little about your business so that we can connect you with the
        right people.
      </span>
      <form className="mt-4 w-full flex flex-col gap-3">
        <Inputfield type="text" placeholder="First name*" />
        <Inputfield type="text" placeholder="Last name*" />
        <Inputfield type="email" placeholder="Work email*" />
        <Inputfield type="number" placeholder="Phone number*" />
        <Inputfield type="text" placeholder="Company name*" />{" "}
        <Inputfield type="text" placeholder="Company website*" />
        <div className="w-full border border-gray-400 rounded-md p-1 px-3 flex flex-col">
          <label className="text-xs text-gray-600">Country*</label>
          <select className="bg-transparent outline-none text-sm" >
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="Russia">Russia</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="w-full border border-gray-400 rounded-md p-1 px-3 flex flex-col">
          <label  className="text-xs text-gray-600">Estimated annual sales*</label>
          <select className="bg-transparent outline-none text-sm">
            <option value="Select Annual Sales">Select Annual Sales</option>
            <option value="Select Monthly Sales">Select Monthly Sales</option>
            <option value="Select Weekly Sales">Select Weekly Sales</option>
          </select>
        </div>    
        <div className="w-full border border-gray-400 rounded-md p-1 px-3 flex flex-col">
          <label className="text-xs text-gray-600">Do you have already have a PayPal Business account?*</label>
          <select className="bg-transparent outline-none text-sm">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>  
        <div className="flex items-center gap-2">
            <input className="w-5 h-5 rounded-md" type="checkbox" />
            <span className="text-xs">I have read and accepted the <strong className="text-bgPrimaryClr">PayPal Privacy Policy.</strong></span>
        </div>
        <span className="text-[10px] text-center">I consent to PayPal contacting me by phone or by email, and to selling me product or industry information relevant to my query. I know I can unsubscribe at any time.</span>
        <button className="px-8 p-2 rounded-full bg-bgPrimaryClr text-white w-52 mt-2 self-center">Submit</button>
      </form>
    </div>
  );
};

export default Form;
