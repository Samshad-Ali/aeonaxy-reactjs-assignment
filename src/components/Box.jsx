import React from "react";

const Box = ({title,miniTitle1,miniTitle2,miniTitle3,list}) => {
  return (
    <div className="text-sm min-w-[35%]">
      <p className="border-b py-1 text-textPrimaryClr font-semibold border-blue-200 mb-4">{title}</p>
      <div className="mt-2 flex gap-8 justify-between">
        <ul className="font-semibold flex gap-2 flex-col">
          <li>{miniTitle1}</li>
          <li>{miniTitle2}</li>
        </ul>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{miniTitle3}</p>
          <ul className="flex flex-col gap-1">
        {
            list?.map((item,idx)=><li key={idx} >{item}</li>)
        }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Box;
