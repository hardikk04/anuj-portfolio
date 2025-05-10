interface Props {
  link: string;
}
const PortraitWorks = ({ link }: Props) => {
  return (
    <div className="h-screen w-full sticky top-0 left-0">
      <video
        className="w-full h-full object-cover"
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

export default PortraitWorks;
