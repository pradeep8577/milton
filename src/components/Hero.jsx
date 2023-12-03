import React from "react";
// @ts-ignore
import SuperPageImg from "../assets/superPage.webp";
// @ts-ignore
import Star from "../assets/starYellow.png";
// @ts-ignore
import user1 from "../assets/user1.webp";
// @ts-ignore
import user2 from "../assets/user2.webp";
// @ts-ignore
import user3 from "../assets/user3.webp";
// @ts-ignore
import user4 from "../assets/user4.webp";
// @ts-ignore
import user5 from "../assets/user5.webp";

const Hero = () => {
  return (
    <section className="flex flex-none flex-col">
      <div className="flex flex-none flex-col items-center justify-center md:px-60 md:max-w-[90rem] mx-auto max-w-[23.43rem] md:py-40 pt-36">
        <div className="bg-[#F1F2F4] md:py-2 md:px-4 py-2 px-3 rounded-full font-PlusJakartaSansBold text-sm md:text-base ">
          An other way to manage time
        </div>
        <div className="flex flex-none items-center justify-center text-center md:text-[4.6rem] text-[2.35rem] font-PlusJakartaSansExtraBold md:leading-[5rem] md:tracking-wider leading-[2.5rem] tracking-wider py-2 mx-6 my-4">
          Your new favorite calendar 🗓️ app
        </div>
        <div className="font-PlusJakartaSansMedium text-center md:leading-[2rem] md:text-[1.1rem] text-[1rem] md:py-10 md:px-40 text-slate-500 md:tracking-wider leading-6 px-8 my-4">
          Here you should explain how cool your app is. Remember,focus on the
          benefits for your users, not on the features.{" "}
        </div>
        <div>
          <a href="#contact">
            <button className="bg-black text-[#FEFEFE] rounded-lg md:py-4 md:px-8 font-PlusJakartaSansMedium md:text-lg py-4 px-6">
              <p>Get started, it's free</p>
            </button>
          </a>
        </div>
        <div className="text-[14px] text-slate-500">
          Free 14 days trials,no credit card needed
        </div>

        <div className="flex flex-row md:py-12 gap-0 py-10 px-1 ">
          <div className="flex justify-center items-center relative text-center mr-44">
            <div className="absolute left-0 right-0 h-12 w-12 border-[5px] rounded-full border-white">
              {" "}
              <img src={user1} alt="" className="" />
            </div>
            <div className="absolute left-8 right-0   h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user2} alt="" className="" />
            </div>
            <div className="absolute  left-16 right-0  h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user3} alt="" className=" " />
            </div>
            <div className="absolute -right-36 h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user4} alt="" className=" " />
            </div>
            <div className="absolute  -right-44 h-12 w-12 border-[5px] rounded-full border-white">
              <img src={user5} alt="" className=" " />
            </div>
          </div>
          <div className="flex flex-none flex-col justify-center items-center ">
            <div className="flex justify-center items-center gap-1">
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <img src={Star} alt="" className="h- 5 w-5" />
              <div className=" font-bold text-md"> 5.0</div>
            </div>
            <div className="font-medium leading-[32px] text-center text-[14px] text-slate-500 ml-5 -mt-1">
              From 200+ happy users
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <img
          src={SuperPageImg}
          className="rounded-2xl border border-solid h-auto md:w-[73rem] border-gray-200 w-[20.6rem]"
          alt="sectionImg"
        />
      </div>
    </section>
  );
};

export default Hero;
