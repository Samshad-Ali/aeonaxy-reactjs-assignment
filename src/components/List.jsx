import React from "react";

const List = ({ title, desc, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      <div className="text-bgPrimaryClr  font-semibold  flex gap-4 items-center">
        <p >{desc}</p>
        {icon && (
          <div className="bg-blue-100 w-6 h-6 flex justify-center items-center rounded-full">

            <span className=" -translate-x-2">{icon}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
