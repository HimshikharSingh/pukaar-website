import React from "react";

function Causes() {
  return (
    <div className="flex justify-center mb-5">
      <div className="h-[150px] w-[85%] flex flex-col items-center shadow-md rounded-lg md:flex-row bg-[#21c0ba]">
        <img
          className="object-contain rounded-t-lg h-[150px]  md:rounded-none md:rounded-l-lg"
          src="./image-4.jpg"
          alt=""
        ></img>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-white dark:text-white">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="bg-[#107dab] flex justify-center w-20 text-white rounded-md">
            Donate{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Causes;
