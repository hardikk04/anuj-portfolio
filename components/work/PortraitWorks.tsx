interface Props {
  link: string;
  alt: string;
}
const PortraitWorks = ({ link, alt }: Props) => {
  return (
    <div className="h-screen w-full sticky top-0 left-0">
      <img className="w-full h-full object-cover" src={link} alt={alt}></img>
      <div className="overlay absolute top-0 left-0 w-full h-screen bg-black/60 z-[1]"></div>
    </div>
  );
};

export default PortraitWorks;
