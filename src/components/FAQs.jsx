import React, { useState } from "react";
// @ts-ignore
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqCards = [
    {
      heading: "Can I cancel my subscription?",
      text: "You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.",
    },
    {
      heading: "What happens when my trial ends?",
      text: " When your trial period ends, your account will automatically be downgraded to our free plan, with limited features and functionality. To continue enjoying the full benefits of our service, you can upgrade to one of our paid plans at any time during or after the trial. Your data and settings will be preserved, ensuring a seamless transition as you move forward with our SaaS platform.",
    },
    {
      heading: "What payment methods do you offer?",
      text: "We aim to provide a seamless experience for our customers. We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express, and Discover), PayPal, and bank transfers.",
    },
    {
      heading: "What is your refund policy?",
      text: "Our refund policy is designed with customer satisfaction in mind. If you are not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To initiate the refund process, please contact our support team through the 'Help' section in your account or email us at support@Milton.com, and we'll be happy to assist you.",
    },
    {
      heading: "Do you offer discounts to educational institutions ?",
      text: "Yes, we are happy to support educational institutions by offering special discounts on our SaaS platform. Please reach out to our sales team at sales@Milton.com with your institution's details, and we will provide you with more information on our exclusive educational pricing options.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Toggle the selected FAQ card
  };

  return (
    <div
      className="flex flex-none flex-col h-[100hv] max-w-[1200px] mx-auto  py-[70px]"
      id="faqs"
    >
      <div className="flex flex-none flex-col items-center justify-center  gap-4">
        <div className="bg-[#F1F2F4] py-[8px] px-[18px] rounded-full font-PlusJakartaSansBold text-[16px]">
          Relevant stuff, bla bla 📣
        </div>
        <div className="flex flex-none items-center justify-center text-center tracking-wide text-[58px] font-PlusJakartaSansExtraBold ">
          Frequently asked questions
        </div>
      </div>

      <div className="flex flex-col lg:flex-col items-center justify-center gap-4 p-8">
        {faqCards.map((data, index) => (
          <div className="flex flex-col items-start justify-start  bg-[#F1F2F4] p-6 w-4/5 rounded-2xl mt-8">
            <div
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="font-PlusJakartaSansBold text-[20px]">
                {data.heading}
              </div>
              <div>{openFAQ === index ? <FaMinus /> : <FaPlus />}</div>
            </div>
            {openFAQ === index && (
              <div className="font-PlusJakartaSansMedium text-[16px] text-slate-500 leading-[1.50rem] pt-4">
                {data.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
