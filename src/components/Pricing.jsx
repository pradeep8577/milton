import React, { useState } from "react";
// @ts-ignore
import tickImg from "../assets/tick.png";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const pricingCards = [
    {
      index: "1",
      tag: "Free",
      bgColor: "#F1F2F4",
      tagPara: "So you can see how incredible our tool is.",
      dollar: "$0",
      dollarMonth: "/mo",
      dollarTag: "Free forever",
      button: "Get started",
      btnTag: "No credit card needed",
      contentHead: "What's included:",
      contentText: [
        "A cool feature",
        "A basic feature",
        "A top feature with limitations",
        "An incredible feature so useful",
        "A top feature",
      ],
    },
    {
      index: "2",
      tag: "Starter",
      bgColor: "#FEE9CB",
      tagPara: "So you can see how incredible our tool is.",
      dollar: billingPeriod === "annually" ? "$19" : "$15",
      dollarMonth: billingPeriod === "annually" ? "/year" : "/mo",
      dollarTag: billingPeriod === "annually" ? "$180" : "Billed monthly",
      button: "Get started",
      btnTag: "7 days free trial no credit card needed",
      contentHead: "All Free features, plus:",
      contentText: [
        "A cool feature",
        "A basic feature",
        "A top feature with limitations",
        "An incredible feature so useful",
        "A top feature",
      ],
    },
    {
      index: "3",
      tag: "Pro",
      bgColor: "#FDDED6",
      tagPara: "So you can see how incredible our tool is.",
      dollar: billingPeriod === "annually" ? "$45" : "$49",
      dollarMonth: billingPeriod === "annually" ? "/year" : "/mo",
      dollarTag: billingPeriod === "annually" ? "$540" : "Billed monthly",
      button: "Get started",
      btnTag: " days free trial no credit card needed",
      contentHead: "All Starter features, plus:",
      contentText: [
        "A cool feature",
        "A basic feature",
        "A top feature with limitations",
        "An incredible feature so useful",
        "A top feature",
        "You need this feature",
      ],
    },
  ];

  const toggleBillingPeriod = () => {
    setBillingPeriod((prevPeriod) =>
      prevPeriod === "monthly" ? "annually" : "monthly"
    );
  };

  const updatedPricingCards = pricingCards.map((card) => {
    let updatedCard = { ...card };

    if (card.index !== "1" && billingPeriod === "annually") {
      updatedCard.dollar = "$" + parseFloat(card.dollar.slice(1));
      updatedCard.dollarTag = "Billed $" + card.dollarTag.slice(1) + " yearly";
    } else {
      updatedCard.dollar = card.dollar;
      updatedCard.dollarTag = card.dollarTag;
    }
    return updatedCard;
  });

  return (
    <div
      className="flex flex-none flex-col max-w-[1200px] mx-auto  py-16 drop-shadow-xl"
      id="pricing"
    >
      <div className="flex flex-none flex-col items-center justify-center  gap-4">
        <div className="bg-[#F1F2F4] py-2 px-5 rounded-full font-PlusJakartaSansBold text-base text-[#2E2E2E] ">
          Pricing and plans 💰
        </div>
        <div className="flex flex-none items-center justify-center text-center tracking-wide text-6xl font-PlusJakartaSansExtraBold ">
          Find the best plan for your needs
        </div>
      </div>

      <div className="flex flex-row justify-center items-center py-12 mt-16">
        <div className="flex flex-row justify-evenly bg-[#F1F2F4] text-gray-400 rounded-xl font-PlusJakartaSansBold gap-5 text-sm py-1 w-72">
          <button
            className={
              billingPeriod === "monthly"
                ? "text-black bg-white py-2 px-8 rounded-xl "
                : ""
            }
            onClick={() => toggleBillingPeriod()}
          >
            Monthly
          </button>
          <button
            className={
              billingPeriod === "annually"
                ? "text-black bg-white py-2 px-8 rounded-xl"
                : ""
            }
            onClick={() => toggleBillingPeriod()}
          >
            Annually
          </button>
        </div>
        <div className="font-PlusJakartaSansBold mx-6 ">
          <p>✨ save 30%</p>
        </div>
      </div>

      <div className="md:flex flex-col lg:flex-row gap-4 md:gap-6 flex-wrap md:justify-between justify-center ">
        {updatedPricingCards.map((card, index) => (
          <>
            <div className="flex flex-col md:flex-none md:w-96 items-start justify-start group pt-8 bg-white rounded-2xl w-[384px] px-8 relative py-4">
              {index === 1 ? (
                <button className="bg-black text-[#eeeeee]  rounded-full py-[7px] px-4 font-PlusJakartaSansBold text-sm absolute left-56 -top-3 ">
                  <p> Best deal 🔥</p>
                </button>
              ) : (
                ""
              )}
              <button
                className="bg-slate-100 text-gray-700 rounded-full py-2 px-8 font-PlusJakartaSansBold text-base"
                style={{ backgroundColor: `${card.bgColor}` }}
              >
                <p> {card.tag}</p>
              </button>
              <div className="font-PlusJakartaSansMedium  text-slate-500 my-5">
                {card.tagPara}
              </div>

              <div className="flex flex-row justify-end items-baseline py-2">
                <div className=" tracking-wide text-6xl font-PlusJakartaSansExtraBold ">
                  {card.dollar}
                </div>
                <div className="font-PlusJakartaSansMedium text-slate-400">
                  {card.dollarMonth}
                </div>
              </div>

              <div className=" font-PlusJakartaSansMedium text-base mb-6">
                {card.dollarTag}
              </div>

              <div className="flex flex-col justify-center items-center">
                <div>
                  <a href="#contact">
                    <button className="bg-black text-[#eeeeee] rounded-lg py-3 px-[6.8rem] font-PlusJakartaSansBold text-lg">
                      <p>{card.button}</p>
                    </button>
                  </a>
                </div>
                <div className="text-xs text-slate-800 font-PlusJakartaSansMedium p-2 mb-7">
                  {card.btnTag}
                </div>
              </div>

              <div className=" text-gray-800 py-2 font-PlusJakartaSansBold text-base">
                {card.contentHead}
              </div>

              {card.contentText?.map((data, index) => (
                <div className="flex my-1" key={index}>
                  <div className="h-9">
                    <img src={tickImg} alt="" />
                  </div>
                  <div className="text-gray-500 font-PlusJakartaSansMedium text-base px-1">
                    {data}
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
