import React from "react";

const SubHeader = ({ subTitle }) => {
  return (
    <div>
      <h1  className="text-center md:text-2xl lg:text-3xl  mb-4 mt-8 text-[#f06a01] font-semibold">
        {subTitle}
      </h1>
      <div className="flex justify-center">
        <div className="w-[70%] h-[1px] mt-[-8px] bg-slate-400"></div>
      </div>
    </div>
  );
};

export default SubHeader;
