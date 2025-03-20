"use client";


const ReelCard = ({ link, index }: { link: string; index: string }) => {
  return (
    <div
      className={`reel${index} w-[26vw] h-[70vh] bg-red-100  overflow-hidden`}
    >
      <img src={link} className="w-full h-full object-cover" alt="reel"></img>
    </div>
  );
};

export default ReelCard;
