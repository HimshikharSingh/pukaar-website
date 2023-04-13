import React from "react";
import DescCards from "./DescCards";

function Description() {
  return (
    <div className="text-white rounded-3xl flex justify-center m-24 h-[640px] w-auto bg-[#F7BF2C]">
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
