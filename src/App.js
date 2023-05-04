import About from "./components/About";
import Description from "./components/Description";
import DonateButton from "./components/DonateButton";
import Logo from "./components/Logo";
import NavigationBar from "./components/NavigationBar";
import React from "react";
import ProfileCard from "./components/ProfileCard";
function App() {
  return (
    <div
      className=""
      style={{
        backgroundImage: 'url("backimg.jpg")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-opacity-90 bg-[#E2F7D4] flex justify-evenly sticky top-0 z-50 shadow-md">
        <div>
          <Logo />
        </div>
        <div>
          <NavigationBar />
        </div>

        <DonateButton />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Description />
      </div>
      <div className="h-20 my-5 flex justify-center items-center w-[100%] bg-opacity-90 bg-[#E2F7D4] shadow-md text-5xl">
        Our Team
      </div>
      <div>
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;
