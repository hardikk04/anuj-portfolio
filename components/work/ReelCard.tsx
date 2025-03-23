"use client";

import Image from "next/image";

const ReelCard = ({ link, index }: { link: string; index: string }) => {
  return (
    <div
      className={`reel${index} w-[26vw] h-[70vh] bg-red-100  overflow-hidden`}
    >
      <Image
        src={link}
        className="w-full h-full object-cover"
        alt="reel"
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
};

export default ReelCard;
