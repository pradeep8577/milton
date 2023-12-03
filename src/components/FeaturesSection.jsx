import React from "react";

const FeaturesSection = ({
  index,
  chipText,
  chipBgColor,
  heading,
  textContent,
  bodyImgSmall,
  bodyImgLarge,
}) => {
  return (
    <div
      className={`md:flex items-center justify-center md:my-20 md:gap-28 ${
        index % 2 === 1 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="flex flex-col items-start justify-start h-auto md:w-[65.25rem] px-8 py-6 ">
        <div
          className={`py-2 px-[1.1rem] rounded-full font-PlusJakartaSansBold md:text-base text-[#2E2E2E] text-sm mb-6`}
          style={{ backgroundColor: `${chipBgColor}` }}
        >
          {chipText}
        </div>
        <div className=" md:tracking-wide md:text-[2.5rem] font-PlusJakartaSansExtraBold md:pt-3 text-[1.7rem]">
          {heading}
        </div>
        <div className="font-PlusJakartaSansMedium md:leading-[2rem] md:text-lg py-10 text-slate-500 tracking-wide text-start text-[0.95rem]">
          {textContent}
        </div>
        <div className="overflow-visible">
          <img
            src={bodyImgSmall}
            alt=""
            className="object-center h-auto w-[62rem] object-fill"
          />
        </div>
      </div>
      <div className="overflow-visible ">
        <img
          src={bodyImgLarge}
          className="object-center h-auto w-[37.5rem]] object-fill"
          alt="Img"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
