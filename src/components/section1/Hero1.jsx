import React from "react";
import List from "../List";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Form from "../Form";

const Hero1 = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center p-4  px-4 lg:px-16 text-white bg-bgSndryClr">
        <div className=" w-full sm:w-[95%] flex flex-col items-center lg:items-start gap-4 justify-center h-96">
          <h2 className="sm:text-5xl text-3xl  w-full lg:w-[40%]">Connect with our sales team</h2>
          <p className=" w-full lg:w-[40%]">
            Let's talk about how our payment solutions can help grow your
            business
          </p>
        </div>
      </div>
      <div className="w-full flex-col gap-8 flex justify-center items-center  p-4  px-4 lg:px-16 bg-white relative">
        <div className=" w-full sm:w-[95%] flex flex-col  justify-center h-auto sm:py-0 py-8   md:h-screen">
          <div className=" w-full items-center lg:items-start lg:w-[50%] flex gap-6   flex-col">
            <p className=" text-2xl sm:text-3xl">Some other ways to connect with us</p>
            <div className="flex gap-8 justify-between flex-col">
              <List
                title="Want to speak with Sales right away ?"
                desc="call 877-794-7639"
              />
              <List
                title="Need help with your existing account ?"
                desc="Visit our Help Center"
                icon={<HiMiniArrowLongRight size={30  } />}
              />{" "}
              <List
                title="Want to speak with Sales right away ?"
                desc="Visit our Business Resource Center"
                icon={<HiMiniArrowLongRight size={30  } />}
              />
            </div>
          </div>
        </div>
        <Form/>
      </div>
    </div>
  );
};

export default Hero1;
