const ReelCard = ({ link, index }: { link: string; index: string }) => {
  return (
    <div
      className={`reel${index} h-full overflow-hidden`}
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
