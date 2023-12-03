import React from "react";
// @ts-ignore
import cardImg1 from "../assets/cardImg1.svg";
// @ts-ignore
import cardImg2 from "../assets/cardImg2.svg";
// @ts-ignore
import cardImg3 from "../assets/cardImg3.svg";
// @ts-ignore
import cardImg4 from "../assets/cardImg4.webp";
// @ts-ignore
import cardImg5 from "../assets/cardImg5.webp";
// @ts-ignore
import cardImg6 from "../assets/cardImg6.webp";

// @ts-ignore
const Cards = ({ imageSrc, headingText, textContent, headingColor }) => (
  <div className="flex flex-col md:flex-none md:w-96  items-start justify-start group pt-8">
    <div className="flex items-center justify-center rounded-2xl border border-solid border-gray-200 bg-[#F1F2F4] w-[387px] h-[265px]">
      <img src={imageSrc} alt="" className="w-[270] h-[185px] " />
    </div>

    <div
      className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px] my-8"
      style={{ backgroundColor: `${headingColor}` }}
    >
      <p>{headingText}</p>
    </div>
    <div className="font-PlusJakartaSansMedium  text-slate-500 mr-5">
      <p>{textContent}</p>
    </div>
  </div>
);

const FeaturesCard = () => {
  const featureCardData = [
    {
      imageSrc: cardImg1,
      headingText: "Cross-Device Sync",
      headingColor: "#F1F2F4",
      textContent:
        "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      imageSrc: cardImg2,
      headingText: "Auto Event Import",
      headingColor: "#FEE9CB",
      textContent:
        "Automatically import events from emails, social media, and other sources, so you never miss a beat or have to manually input details.",
    },
    {
      imageSrc: cardImg3,
      headingText: "Task Delegation",
      headingColor: "#CCEAFD",
      textContent:
        " Easily assign tasks to team members, family, or friends, promoting shared responsibility and seamless collaboration.",
    },
    {
      imageSrc: cardImg4,
      headingText: "Voice Command Integration",
      headingColor: "#DDF4E4",
      textContent:
        "Quickly create events, set reminders, or reschedule appointments with voice commands, thanks to compatibility with popular virtual assistants.",
    },
    {
      imageSrc: cardImg5,
      headingText: "Social Media Challenges",
      headingColor: "#FDDED6",
      textContent:
        "Personalize notification types and timings for events, tasks, and goals, ensuring you stay on track and informed without feeling overwhelmed.",
    },
    {
      imageSrc: cardImg6,
      headingText: "Privacy Protection",
      headingColor: "#C39CF6",
      textContent:
        "Safeguard your personal information and event details with our robust security measures, including end-to-end encryption and optional password protection.",
    },
  ];
  return (
    <div className="md:px-[7.5rem] px-4 py-[2.5rem] gap-9 flex flex-col md:py-[5.62rem] md:max-w-[90rem] mx-auto max-w-[375px]">
      <div className="flex flex-none flex-col items-center justify-center  gap-4 ">
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
          And so much more... 💼
        </div>
        <div className="flex flex-none items-center justify-center text-center tracking-wide text-[58px] font-PlusJakartaSansExtraBold px-40 ">
          Our features to make your life easier
        </div>
      </div>

      <div className="md:flex flex-col lg:flex-row gap-4 md:gap-6 flex-wrap md:justify-between items-center">
        {featureCardData.map((card, index) => (
          <Cards
            key={index}
            imageSrc={card.imageSrc}
            headingText={card.headingText}
            headingColor={card.headingColor}
            textContent={card.textContent}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;
