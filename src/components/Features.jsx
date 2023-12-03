import React from "react";
// @ts-ignore
import bodyLargeImg1 from "../assets/bodyLargeImg1.webp";
// @ts-ignore
import bodyLargeImg2 from "../assets/bodyLargeImg2.webp";
// @ts-ignore
import bodyLargeImg3 from "../assets/bodyLargeImg3.webp";
// @ts-ignore
import bodyLargeImg4 from "../assets/bodyLargeImg4.webp";
// @ts-ignore
import bodySmallImg1 from "../assets/bodySmallImg1.png";
// @ts-ignore
import bodySmallImg2 from "../assets/bodySmallImg2.png";
// @ts-ignore
import bodySmallImg3 from "../assets/bodySmallImg3.png";
// @ts-ignore
import bodySmallImg4 from "../assets/bodySmallImg4.png";
import FeaturesSection from "./FeaturesSection";

const Features = () => {
  const featuresData = [
    {
      index: "1",
      chipText: "Seamless Scheduling",
      chipBgColor: "#FEE9CB",
      heading: "Focus on what matters most for you",
      textContent:
        "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
      bodyImgSmall: bodySmallImg1,
      bodyImgLarge: bodyLargeImg1,
    },
    {
      index: "2",
      chipText: "Smart Reminders & Task",
      chipBgColor: "#CCEAFD",
      heading: "Never miss an important deadline or event again",
      textContent:
        "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
      bodyImgSmall: bodySmallImg2,
      bodyImgLarge: bodyLargeImg2,
    },
    {
      index: "3",
      chipText: "Seamless Scheduling",
      chipBgColor: "#DDF4E4",
      heading: "Focus on what matters most for you",
      textContent:
        "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks",
      bodyImgSmall: bodySmallImg3,
      bodyImgLarge: bodyLargeImg3,
    },
    {
      index: "4",
      chipText: "Smart Reminders & Task",
      chipBgColor: "#FDDED6",
      heading: "Never miss an important deadline or event again",
      textContent:
        "Never miss an important deadline again with our AI-driven  notifications. Our app intelligently analyzes your schedule to prioritize what's most important, keeping you on track and ensuring your day is productive and stress-free.",
      bodyImgSmall: bodySmallImg4,
      bodyImgLarge: bodyLargeImg4,
    },
  ];

  return (
    <div
      className="flex flex-none flex-col items-center justify-center md:px-60 md:max-w-[90rem] mx-auto max-w-[23.43rem] md:py-40 pt-36"
      id="features"
    >
      <div className="flex flex-none flex-col items-center justify-center gap-4">
        <div className="bg-[#F1F2F4] md:py-2 md:px-4 py-2 px-3 rounded-full font-PlusJakartaSansBold text-sm md:text-base ">
          Our main features 🦸🏼
        </div>
        <div className="flex flex-none items-center justify-center text-center md:text-[3.25rem] text-[2rem] font-PlusJakartaSansExtraBold md:leading-[5rem] md:tracking-wider leading-[2.5rem] tracking-wider py-2 mx-6 my-4 ">
          Discover your new superpowers
        </div>
      </div>

      {featuresData.map((data, index) => (
        <FeaturesSection
          key={index}
          index={index}
          chipText={data.chipText}
          chipBgColor={data.chipBgColor}
          heading={data.heading}
          textContent={data.textContent}
          bodyImgSmall={data.bodyImgSmall}
          bodyImgLarge={data.bodyImgLarge}
        />
      ))}
    </div>
  );
};

export default Features;
