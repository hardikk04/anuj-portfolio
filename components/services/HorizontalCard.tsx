import React from "react";

const HorizontalCard = ({
  number,
  title,
  para,
}: {
  number: string;
  title: string;
  para: string;
}) => {
  return (
    <div className="card w-[50%] shrink-0">
      <span>{number}</span>
      <div>
        <h2 className="text-[6vw] pt-4 tracking-tighter mm">{title}</h2>
      </div>
      <p className="w-[65%] ll text-xl">{para}</p>
    </div>
  );
};

export default HorizontalCard;
