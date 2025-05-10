"use client";

import gsap from "gsap";
import { useRef, useState } from "react";

interface Props {
  link: string;
}
const PortraitWorks = ({ link }: Props) => {
  const [showControls, setShowControls] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    setShowControls(true);

    videoRef.current?.play();
  };
  return (
    <div
      onClick={handleVideoClick}
      onMouseEnter={() => {
        gsap.to(".mouse-follower", {
          width: "10vh",
          height: "10vh",
        });
        gsap.to(".mouse-follower>span", {
          opacity: 1,
        });
      }}
      onMouseLeave={() => {
        gsap.to(".mouse-follower", {
          width: "2.5vh",
          height: "2.5vh",
        });
        gsap.to(".mouse-follower>span", {
          opacity: 0,
        });
      }}
      className="h-screen w-full sticky top-0 left-0"
    >
      <video
        className="w-full h-full object-cover"
        src={link}
        loop
        muted
        autoPlay
        controls={showControls}
        playsInline
      ></video>
    </div>
  );
};

export default PortraitWorks;
