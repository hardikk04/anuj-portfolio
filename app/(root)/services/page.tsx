"use client";

import HorizontalCard from "@/components/services/HorizontalCard";
import ProcessCard from "@/components/services/ProcessCard";
import TextSplit from "@/components/shared/animations/TextSplit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Services = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page6",
        start: "top 0%",
        end: "top -150%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
    tl.to(
      ".horizontal-scroller",
      {
        transform: "translateX(-50%)",
        left: "-100%",
      },
      "same"
    ).to(
      ".inner-line",
      {
        width: "100%",
      },
      "same"
    );
  }, []);
  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full  pt-[12vw]  px-4 pb-[4vw]">
        <div className="headline text-left">
          <h1 className="text-[22vw] tracking-tighter scale-y-120 bb  leading-none">
            services
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
      <section className="page3 relative p-4">
        <span className="bb sticky inline-block pl-4 top-20 left-0 text-[18vw] tracking-tighter leading-none">
          01
        </span>
        <div className="flex justify-end relative">
          <div className="w-[70%]">
            <div className="line w-full h-[2px] bg-black"></div>
            <span className="bb inline-block py-4">THE MAIN PART</span>
            <div>
              <h2 className="text-[6vw] bb tracking-tighter">Product Design</h2>
              <p className="ll w-[80%] text-lg">
                Most of my designs are not just about aesthetics, but about
                developing logical, scalable design systems that are precisely
                tailored to the web and app application. With a strong focus on
                UI design and systemic design, I aim to create elements and
                modules that are responsive, flexible and above all functional
                and performant.
              </p>
            </div>
            <div className="process pt-[6vw]">
              <ProcessCard number="01" text="UX/UI Design" />
              <ProcessCard number="02" text="UX/UI Design" />
              <ProcessCard number="03" text="UX/UI Design" />
              <ProcessCard number="04" text="UX/UI Design" />
              <ProcessCard number="05" text="UX/UI Design" />
              <ProcessCard number="06" text="UX/UI Design" />
            </div>
          </div>
        </div>
      </section>
      <section className="page4 relative p-4">
        <span className="bb sticky inline-block pl-4 top-20 left-0 text-[18vw] tracking-tighter leading-none">
          02
        </span>
        <div className="flex justify-end relative">
          <div className="w-[70%]">
            <div className="line w-full h-[2px] bg-black"></div>
            <span className="bb inline-block py-4">The Technical part</span>
            <div>
              <h2 className="text-[6vw] bb tracking-tighter">
                Webflow Development
              </h2>
              <p className="ll w-[80%] text-lg">
                Translating design into dynamic, functional web experiences is
                where I thrive. I’m passionate about transforming design systems
                into responsive, web-based environments, leveraging Webflow’s
                flexibility to create sustainable websites with flexibel and
                responsive components.
              </p>
            </div>
            <div className="process pt-[6vw]">
              <ProcessCard number="01" text="Landingpages" />
              <ProcessCard
                number="02"
                text="Designsystems (Figma <> Webflow)"
              />
              <ProcessCard number="03" text="Animated web solutions" />
            </div>
          </div>
        </div>
      </section>
      <section className="page5 relative p-4">
        <span className="bb sticky inline-block pl-4 top-20 left-0 text-[18vw] tracking-tighter leading-none">
          03
        </span>
        <div className="flex justify-end relative">
          <div className="w-[70%]">
            <div className="line w-full h-[2px] bg-black"></div>
            <span className="bb inline-block py-4">The Visionary part</span>
            <div>
              <h2 className="text-[6vw] bb tracking-tighter">
                Branding & Vision
              </h2>
              <p className="ll w-[80%] text-lg">
                UI design isn’t just about buttons and components — It is about
                reflecting the essence of a brand on digital functional
                platforms and strengthening brand authenticity at every user
                touchpoint. I love pushing beyond the conventional, transforming
                UI into a tool that elevates the brand to a new level.
              </p>
            </div>
            <div className="process pt-[6vw]">
              <ProcessCard number="01" text="Brand Design" />
              <ProcessCard number="02" text="Moodboards" />
              <ProcessCard number="03" text="Vision Concepts" />
              <ProcessCard number="04" text="Styleguides" />
            </div>
          </div>
        </div>
      </section>
      <section className="page6 h-screen w-full relative p-4 pt-[2vw]">
        <div className="title text-center pb-[4vw]">
          <h2 className="work-section text-[10vw] bb tracking-tighter font-extrabold">
            <span className="line block overflow-hidden">
              <TextSplit text="our process"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="outer-line w-full h-[2px] bg-black/20 overflow-hidden">
          <div className="inner-line w-0 h-full bg-black"></div>
        </div>
        <div className="horizontal w-full relative overflow-hidden">
          <div className="horizontal-scroller w-full relative flex pt-[8vw]">
            <HorizontalCard
              number="(1)"
              title="Discovery"
              para="Establishing a data-driven foundation through in-depth user research and competitive analysis."
            />
            <HorizontalCard
              number="(2)"
              title="Structure"
              para="Establishing a data-driven foundation through in-depth user research and competitive analysis."
            />
            <HorizontalCard
              number="(3)"
              title="Design"
              para="Establishing a data-driven foundation through in-depth user research and competitive analysis."
            />
            <HorizontalCard
              number="(4)"
              title="Build"
              para="Establishing a data-driven foundation through in-depth user research and competitive analysis."
            />
            <HorizontalCard
              number="(5)"
              title="Scale"
              para="Establishing a data-driven foundation through in-depth user research and competitive analysis."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
