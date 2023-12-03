import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FeaturesCard from "./components/FeaturesCard";
import ReadyToStart from "./components/ReadyToStart";
import FAQs from "./components/FAQs";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="bg-[#FEF9F6] bg-no-repeat bg-cover bg-center ">
        <div className="border-b-[1px] bg-[#FEF9F6] w-full fixed z-20">
          <Navbar />
        </div>
        <Hero />
        <Features />
        <FeaturesCard />
        <Pricing />
        <FAQs />
        <ReadyToStart />
        <Footer />
      </div>
    </div>
  );
};

export default App;
