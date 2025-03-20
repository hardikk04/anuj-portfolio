import React from "react";

const ProcessCard = ({ number, text }: { number: string; text: string }) => {
  return (
    <>
      <div className="line w-full h-[2px] bg-gray-400"></div>
      <div className="flex gap-[16vw] pt-4 pb-12 bb">
        <span>{number}</span>
        <span>{text}</span>
      </div>
    </>
  );
};

export default ProcessCard;
