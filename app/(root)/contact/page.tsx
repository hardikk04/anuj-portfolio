"use client";
import TextSplit from "@/components/shared/animations/TextSplit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Contact() {
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
  }, []);
  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full  pt-[12vw]  px-4 pb-[4vw]">
        <div className="contact-heading text-left">
          <h1 className="text-[22vw] tracking-tighter textt leading-none overflow-hidden">
            <TextSplit text="contact"></TextSplit>
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
    </div>
  );
}
