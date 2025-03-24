import React from "react";

const ProcessCard = ({ number, text }: { number: string; text: string }) => {
  return (
    <>
      <div className="line w-full h-[2px] bg-white/20"></div>
      <div className="flex gap-[16vw] pt-4 pb-12 bb">
        <span className="textt">{number}</span>
        <span className="bb">{text}</span>
      </div>
    </>
  );
};

export default ProcessCard;
