const ReelCard = ({ link, index }: { link: string; index: string }) => {
  return (
    <div
      className={`reel${index} max-xl:w-[38vw] max-lg:w-[44vw] max-md:w-full h-[70vh]  overflow-hidden`}
    >
      <video
        className="w-full h-full object-contain"
        src={link}
        loop
        muted
        autoPlay
        controls
        playsInline
      ></video>
    </div>
  );
};

export default ReelCard;
