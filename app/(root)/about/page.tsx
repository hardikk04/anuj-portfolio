"use client";

import TextSplit from "@/components/shared/animations/TextSplit";
import TextStaggerAnimation from "@/components/shared/animations/TextStaggerAnimation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.to(".main", {
      backgroundColor: "#17191B",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page4",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".page4 , .page5", {
      backgroundColor: "#f7f3ef",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page5",
        start: "top 80%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".creating span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: ".creating",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".building span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: ".building",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(".music span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: ".music",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true,
      },
    });
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
  }, []);

  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full  pt-[12vw]  px-4 pb-[4vw]">
        <div className="about-heading text-left">
          <h1 className="text-[22vw] tracking-tighter scale-y-120 bb  leading-none overflow-hidden">
            <TextSplit text="about"></TextSplit>
          </h1>
        </div>
      </section>
      <section className="page2 w-full h-screen relative px-4">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          src="https://cdn.prod.website-files.com/666066030b1447405865fff8%2F677e96fde9e05c3a1f266504_Filip%20Felbar%20Showreel%20Background-transcode.mp4"
        ></video>
      </section>
      <section className="page3 relative">
        <span className="mm sticky inline-block pl-4 top-1/2 -translate-y-1/2">
          Introduction
        </span>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <h2 className="namaste text-[22vw] tracking-tighter bb leading-none">
            <span className="block overflow-hidden">
              <TextSplit text="namaste"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-lg bb">I’m Anuj and I've been</span>
        </div>

        <div className="creating h-screen w-full text-center px-4">
          <h2 className=" text-[12vw] leading-[1] tracking-tighter bb">
            <span className="block overflow-hidden">
              <TextSplit text="creating"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="standout digital"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="design since"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="2016"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-5xl bb text-center w-[75%]">
            With eight years of experience in digital design, I've crafted
            extraordinary experiences that stand out. My journey has taken me
            through in-house roles, agency projects, and freelance ventures,
            working with industries such as luxury, audio, fintech, healthtech,
            marketing, architecture, interior design, and video production.
          </span>
        </div>
      </section>
      <section className="page4 custom-gradient text-white  relative">
        <span className="mm sticky inline-block pl-4 top-1/2 -translate-y-1/2">
          Experience
        </span>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <h2 className="text-[22vw] tracking-tighter bb">also</h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-lg bb">I’m a designer specialising in</span>
        </div>

        <div className="building h-screen w-full text-center px-4">
          <h2 className="text-[12vw] leading-[1] tracking-tighter bb">
            <span className="block overflow-hidden">
              <TextSplit text="building visual"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="narratives that"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="captivate"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-5xl bb text-center w-[75%]">
            Recognized by Awwwards, CSSDA, and Mindsparkle Mag, I excel at
            transforming brand values into compelling visual narratives. Each
            project I undertake is driven by passion and precision, ensuring it
            makes a lasting impression.
          </span>
        </div>
      </section>
      <section className="page5 relative">
        <span className="mm sticky inline-block pl-4 top-1/2 -translate-y-1/2">
          Self promotion
        </span>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <h2 className="text-[22vw] tracking-tighter bb">oh</h2>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-lg bb">
            since you've been scrolling so long, interested in listen to my
            music?
          </span>
        </div>

        <div className="h-screen w-full text-center px-4">
          <h2 className="music text-[12vw] leading-[1] tracking-tighter bb">
            <span className="block overflow-hidden">
              <TextSplit text="music is art"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="jesse and the shit"></TextSplit>
            </span>
            <span className="block overflow-hidden">
              <TextSplit text="I cook is boom"></TextSplit>
            </span>
          </h2>
          <div className="overflow-hidden bg-white w-fit m-auto mt-12">
            <TextStaggerAnimation
              href="/#"
              text="youtube"
              className="contact"
            />
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center px-4">
          <span className="text-5xl bb text-center w-[75%]">
            With eight years of experience in digital design, I've crafted
            extraordinary experiences that stand out. My journey has taken me
            through in-house roles, agency projects, and freelance ventures,
            working with industries such as luxury, audio, fintech, healthtech,
            marketing, architecture, interior design, and video production.
          </span>
        </div>
      </section>
      <section className="page6 relative p-4 h-screen w-full">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/666066030b1447405865fff8/674ef6cc80b693672fdac03c_Filip-Felbar-Domestika-Course.webp"
          alt=""
        />
      </section>
    </div>
  );
}
