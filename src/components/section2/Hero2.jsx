import React from "react";
import Box from "../Box";
import Box2 from "../Box2";

const Hero2 = () => {
  const list1 = [
    "Accept Payments",
    "Make Payments",
    "Manage Risk",
    "Accelerate Growth",
    "Accept Payments",
    "Streamline Operations",
  ];

  return (
    <div className="w-full xl:mt-0 mt-10">
      <div className="w-full flex  justify-center items-center p-4 px-4 lg:px-16  bg-white">
        <div className="w-[95%] flex md:flex-row flex-col gap-4 justify-between h-auto md:h-72">
          <Box
            title="Small-to-Medium Business"
            miniTitle1="Introduction"
            miniTitle2="Getting Started"
            miniTitle3="All Solutions"
            list={list1}
          />
          <Box
            title="Enterprise"
            miniTitle1="Introduction"
            miniTitle2="Marketplaces & Partners"
            miniTitle3="Platform & Solutions"
            list={list1}
          />

          <Box2 />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
