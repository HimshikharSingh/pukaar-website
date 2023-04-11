import React from "react";

export default function NavigationBar() {
  return (
    <div className=" flex justify-center items-center grow">
      <nav className=" gap-x-1 flex justify-center  space-x-4 ">
        <a
          name="home"
          href="/dashboard"
          className="w-100 font-medium px-5 pt-5 text-slate-700  hover:px-[20px] hover:font-semibold group "
        >
          Home
          <div className="bg-white rounded-t-md h-[5px] w-full mt-4 pb-0  group-hover:bg-black"></div>
        </a>
        <a
          name="team"
          href="/team"
          className=" font-medium px-5 pt-5 text-slate-700 hover:px-[20px] hover:font-semibold group"
        >
          Team
          <div className=" bg-white rounded-t-md h-[5px] w-full mt-4 pb-0  group-hover:bg-black"></div>
        </a>
        <a
          name="projects"
          href="/projects"
          className=" font-medium px-5 pt-5 text-slate-700 hover:px-[20px] hover:font-semibold group"
        >
          Projects
          <div className="bg-white rounded-t-md h-[5px] w-full mt-4 pb-0  group-hover:bg-black"></div>
        </a>
        <a
          name="reports"
          href="/reports"
          className=" font-medium px-5 pt-5 text-slate-700 hover:px-[20px] hover:font-semibold group"
        >
          Reports
          <div className="bg-white rounded-t-md h-[5px] w-full mt-4 pb-0  group-hover:bg-black "></div>
        </a>
      </nav>
    </div>
  );
}
