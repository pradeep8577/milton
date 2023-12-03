import React from "react";
// @ts-ignore
import Image from "../assets/Image.png";

const ReadyToStart = () => {
  return (
    <div>
      <div className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto py-[70px]">
        <div className="flex flex-none flex-col items-center justify-center">
          <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
            Last call Baby! 🚀
          </div>
          <div className="flex flex-none items-center justify-center text-center tracking-wide text-[60px] font-PlusJakartaSansExtraBold ">
            Ready to start?
          </div>
          <div className="font-PlusJakartaSansMedium leading-[32px] text-center text-[20px] py-8 px-12 text-slate-500 tracking-wider">
            Here you should explain how cool your app is. Remember, focus{" "}
            <br></br>on the benefits for your users, not on the features.{" "}
          </div>
          <div>
            <a href="#contact">
              <button className="bg-black text-[#FEFEFE] rounded-lg py-4 px-8 font-bold text-[18px]">
                <p>Get started, it's free</p>
              </button>
            </a>
          </div>
          <div className="overflow-visible mr-24">
            <img
              src={Image}
              alt=""
              className="object-center h-auto w-[500px] object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
