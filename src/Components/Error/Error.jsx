import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const Navigate = useNavigate();

  const backNavigate = () => {
    Navigate(-1);
  };

  return (
    <div className="mt-16 bg-white px-16 py-5">
      <h2 className="text-4xl text-center font-extrabold text-[#f06a01] mb-3">
        Whoops! Looks Like We Hit a Snag.
      </h2>
      <div className="flex justify-center">
        <img
          className="w-96 h-80"
          src="../../../public/Lovepik_com-380038672-vector-cartoon-404-error-page-business-people-nordic-walking-mountain.png"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <button
          onClick={backNavigate}
          className="text-xl px-5 rounded-md py-1 text-white font-bold bg-[#22c55e] hover:bg-[#059862] "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
