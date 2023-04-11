import About from "./components/About";
import DonateButton from "./components/DonateButton";
import Logo from "./components/Logo";
import NavigationBar from "./components/NavigationBar";
import React from "react";
function App() {
  return (
    <div className="">
      <div className="bg-white flex justify-evenly sticky top-0 z-50 border-b-2">
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
    </div>
  );
}

export default App;
