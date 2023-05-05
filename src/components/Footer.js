import React from "react";

function Footer() {
  return (
    <div className="h-[240px] bg-[#033c2b] w-[100%] text-white flex-col items-center">
      <div className="h-[65%]  flex justify-between items-center px-40">
        <div className="flex-col items-start">
          <img
            src="./logo-footer.jpg"
            className="w-[160px] h-[40px]"
            alt="footer logo"
          />
          <div>Some footer content here</div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-2 grid-flow-row">
            <div>Our Work</div>
            <div>Our Story</div>
            <div>Partner with Us</div>
            <div>Donate</div>
            <div>Careers</div>
            <div>Internships</div>
            <div>Instagram</div>
            <div>Facebook</div>
            <div>Linkedin</div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center w-[100%]">
        <div className=" w-[80%] border-t-[0.1px] border-r-2 border-[#118160]"></div>
      </div>
      <div className="h-[34%] w-[100%] items-center flex justify-between px-36">
        <div className="flex text-sm text-[#b2fde6] font-medium">
          © 2023 Copyright, Pukaar Foundation
        </div>
        <div className="flex">
          <button className="bg-[#118160] px-5 py-3 rounded-full">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
