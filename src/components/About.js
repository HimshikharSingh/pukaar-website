import React from "react";

function About() {
  return (
    <div className=" h-[100vh] bg-gradient-to-t from-slate-50 to-lime-50">
      <div className=" flex flex-col justify-center items-center">
        <div className="text-center max-w-2xl m-6 text-7xl font-[600]">
          Some Header content Some Header content
        </div>
        <div className="m-2 max-w-lg text-xl text-center">
          some descriptive content some descriptive content some descriptive
          some descriptive some descriptive some descriptive
        </div>
      </div>
      <div className=" mt-5  flex gap-x-3 justify-center">
        <div className="gap-2 h-96  w-64 bg-none  flex flex-col justify-center items-center ">
          <div className="w-full h-[70%] text-white bg-green-900 rounded-[35px]">
            leftc
          </div>
          <div className="flex justify-center items-center w-full h-[30%]  text-white bg-[#222222] rounded-[35px]">
            <div>
              <img
                className="flex h-[65px]"
                src="smiley.jpg"
                alt="smiley"
              ></img>
            </div>
            <div className="text-3xl"></div>
          </div>
        </div>
        <div className="h-60 mt-auto bg-child1 w-64 bg-cover bg-center z-0 rounded-[35px]">
          <div className="bg-black h-full w-full bg-cover bg-center bg-opacity-50 z-10 rounded-[35px]">
            <div className="p-4 text-3xl font-bold flex justify-center items-end text-white h-full w-full bg-cover bg-center z-20 rounded-[35px] ">
              Lifeskills for 2000 children in South Africa
            </div>
          </div>
        </div>
        <div className="gap-2 h-96  w-64 bg-none flex flex-col justify-center items-center">
          <div className="flex items-end h-[50%] w-full bg-gray-500 mt-auto rounded-[35px]">
            bottomc
          </div>
        </div>
        <div className="h-60 mt-auto bg-child1 w-64 bg-cover bg-center z-0 rounded-[35px]">
          <div className="bg-black h-full w-full bg-cover bg-center bg-opacity-50 z-10 rounded-[35px]">
            <div className="p-4 text-3xl font-bold flex justify-center items-end text-white h-full w-full bg-cover bg-center z-20 rounded-[35px]">
              Lifeskills for 2000 children in South Africa
            </div>
          </div>
        </div>
        <div className="gap-2 h-96  w-64 bg-none  flex flex-col justify-center items-center">
          <div className="w-full h-[70%] text-white bg-green-900 rounded-[35px]">
            leftc
          </div>
          <div className="w-full h-[30%]  text-white bg-gray-950 rounded-[35px]">
            bottomc
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
