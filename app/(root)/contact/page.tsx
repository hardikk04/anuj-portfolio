"use client";
import TextSplit from "@/components/shared/animations/TextSplit";
import Showreel from "@/components/shared/Showreel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

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
  useEffect(() => {
      document.title = "Anuj Kelodiya - Contact";
    }, []);
  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full pt-[12vw] px-4 pb-[4vw] max-lg:pt-[20vw] max-md:pt-[24vw] max-sm:pt-[30vw] max-sm:pb-[6vw]">
        <div className="contact-heading text-left">
          <h1 className="text-[22vw] tracking-tighter textt leading-none overflow-hidden">
            <TextSplit text="contact"></TextSplit>
          </h1>
        </div>
      </section>
      <Showreel link="/img/temp.png"></Showreel>
    </div>
  );
}
