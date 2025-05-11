"use client";

import TextSplit from "@/components/shared/animations/TextSplit";
import PortraitWorks from "@/components/work/PortraitWorks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";

const ReelCard = dynamic(() => import("@/components/work/ReelCard"), {
  ssr: true,
});

import React, { useEffect } from "react";

export default function Work() {
  useGSAP(() => {
    gsap.from(".contact-title span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".contact-title",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
      },
    });
  });

  useEffect(() => {
    document.title = "Anuj Kelodiya - Work";
  }, []);

  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full pt-[12vw] px-4 pb-[4vw] max-lg:pt-[20vw] max-md:pt-[24vw] max-sm:pt-[30vw] max-sm:pb-[6vw]">
        <div className="work-heading text-left">
          <h1 className="text-[22vw] tracking-tighter textt  leading-none overflow-hidden">
            <TextSplit text="work"></TextSplit>
          </h1>
        </div>
      </section>
      <section className="page2 w-full relative pt-[0vw]">
        <PortraitWorks link="/video/horizontal/1.mp4" />
        <PortraitWorks link="/video/horizontal/2.mp4" />
        <PortraitWorks link="/video/horizontal/3.mp4" />
      </section>
      <section className="page3 min-h-screen relative px-4">
        <h2 className="textt text-[10vw] max-lg:text-[14vw] max-sm:text-[16vw] leading-none sticky inline-block pl-4 top-1/2 left-1/2 -translate-x-1/2 ">
          reels
        </h2>
        <div className="reels w-full px-4 overflow-hidden relative z-[1]">
          <div className="w-full h-[70vh] overflow-hidden flex">
            <ReelCard index="1" link="/video/vertical/1.mp4" />
          </div>
          <div className="w-full h-[70vh] overflow-hidden flex justify-end relative z-[1]">
            <ReelCard index="2" link="/video/vertical/2.mp4" />
          </div>
          <div className="w-full h-[70vh] overflow-hidden flex relative z-[1]">
            <ReelCard index="3" link="/video/vertical/3.mp4" />
          </div>
          <div className="w-full h-[70vh] overflow-hidden flex justify-end relative z-[1]">
            <ReelCard index="4" link="/video/vertical/4.mp4" />
          </div>
          <div className="w-full h-[70vh] overflow-hidden flex justify-center pb-0 relative z-[1]">
            <ReelCard index="5" link="/video/vertical/5.mp4" />
          </div>
        </div>
      </section>
    </div>
  );
}
