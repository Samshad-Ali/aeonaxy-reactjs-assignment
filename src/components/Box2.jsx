import React from "react";

const Box2 = () => {
  return (
    <div className="text-sm">
      <p className="border-b py-1 text-textPrimaryClr font-semibold border-blue-200">
        More
      </p>
      <div className="mt-2 flex  gap-8">
        <ul className="font-semibold flex gap-2 flex-col">
          <li>Nonprofits</li>
          <li>Pricing</li>
          <li>Resource Center</li>
        </ul>
      </div>
    </div>
  );
};

export default Box2;
