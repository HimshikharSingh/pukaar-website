import React from "react";
import DescCards from "./DescCards";

function Description() {
  return (
    <div className="text-white rounded-3xl flex justify-center mt-24 ml-24 mr-24 mb-10 h-[640px] w-auto bg-[#F7BF2C]">
      <div className="flex flex-col justify-evenly items-center">
        <div className="text-5xl ">
          Fundraising at Pukaar takes only few seconds
        </div>
        <div className="gap-x-24 flex justify-evenly items-center">
          <DescCards imageUrl="smiledesc.jpg" />
          <DescCards imageUrl="heartdesc.jpg" />
          <DescCards
            imageUrl="valleydesc.jpg
          "
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
