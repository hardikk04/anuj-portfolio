"use client";

import TextSplit from "@/components/shared/animations/TextSplit";
import TextStaggerAnimation from "@/components/shared/animations/TextStaggerAnimation";
import PortraitWorks from "@/components/work/PortraitWorks";
import { slideInOut } from "@/utils/slideInOut";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useTransitionRouter();

  useGSAP(() => {
    gsap.from(".position-title span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".line1",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    gsap.from(".specialising span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".specialising",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
    gsap.from(".work-section span", {
      transform: "translateY(100%)",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
        end: "top 40%",
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
    <div className="main bg bb text-black">
      <section className="page1 w-full  pt-[10vw] py-[6vw] px-4">
        <div>
          <div className="mb-[-2vw] ml-[12vw]">
            <span className="text-2xl">portfolio</span>
          </div>
          <div className="headline text-left">
            <h1 className="text-[14vw] tracking-wide textt font-extrabold leading-none textt">
              AK Studio
            </h1>
          </div>
          <div className="position ml-[40vw]">
            <span className="text-2xl">senior video editor</span>
          </div>
        </div>
        <div className="flex justify-end w-full pt-[4vw]">
          <div className="w-[30%]">
            <p className="ll text-2xl">
              Enhance your GSAP skills with a range of 50 unique and
              well-crafted effects.
            </p>
            <div className="mt-6">
              <Link
                scroll={false}
                onClick={() => {
                  router.push("/contact", {
                    onTransitionReady: () => slideInOut("contact"),
                  });
                }}
                href="/contact"
                className="text-white bg-black px-6 py-3 "
              >
                Book a Call
              </Link>
            </div>
          </div>
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
      <section className="page3 w-full px-4 flex pt-[14vw]">
        <div className="role-model w-[32%] h-[150vh] overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src="https://cdn.prod.website-files.com/666066030b1447405865fff8/674ef4bbe8fcbec7ae18ca8b_Filip%20Felbar%20-%20Intro%20Image-p-1600.webp"
            alt=""
            height={1000}
            width={1000}
          />
        </div>
        <div className="text px-4 flex flex-col justify-between">
          <div>
            <h2 className="position-title text-[5vw] bb leading-none tracking-tighter">
              <span className="line line1 block overflow-hidden">
                <TextSplit text="senior digital"></TextSplit>
              </span>

              <span className="line block line2 overflow-hidden">
                <TextSplit text="designer helping"></TextSplit>
              </span>

              <span className="line block line3 overflow-hidden">
                <TextSplit text="brands communicate"></TextSplit>
              </span>

              <span className="line block line4 overflow-hidden">
                <TextSplit text="with their audience in"></TextSplit>
              </span>

              <span className="line line5 block overflow-hidden">
                <TextSplit text="a meaningful way"></TextSplit>
              </span>
            </h2>
          </div>
          <div className="w-fit overflow-hidden bg-white">
            <TextStaggerAnimation
              href="/about"
              text="about me"
              className="about-me"
            />
          </div>

          <div className="specialising bb">
            <span className="text-5xl block overflow-hidden">
              <TextSplit text="specialising in:"></TextSplit>
            </span>
            <span className="text-5xl block overflow-hidden">
              <TextSplit text="digital design"></TextSplit>
            </span>
            <span className="text-5xl block overflow-hidden">
              <TextSplit text="branding"></TextSplit>
            </span>
            <span className="text-5xl block overflow-hidden">
              <TextSplit text="web experiences"></TextSplit>
            </span>
            <span className="text-5xl block overflow-hidden">
              <TextSplit text="webflow development"></TextSplit>
            </span>
            <span className="text-5xl block overflow-hidden">
              <TextSplit text="art direction"></TextSplit>
            </span>
          </div>
        </div>
      </section>
      <section className="page4 w-full px-4 pt-[10vw]">
        <div className="title text-center">
          <h2 className="work-section text-[10vw] leading-[.9] textt tracking-tighter font-extrabold">
            <span className="line block overflow-hidden">
              <TextSplit text="selected"></TextSplit>
            </span>
            <span className="line block overflow-hidden">
              <TextSplit text="works"></TextSplit>
            </span>
          </h2>
        </div>
        <div className="para text-center text-4xl ll flex justify-center pt-[6vw]">
          <p className="w-[70%]">
            a selection of projects that represent my approach to design and
            development. Each piece is crafted with a focus on detail,
            innovation, and effectiveness.
          </p>
        </div>
        <div className="projects bb flex justify-center pt-[6vw]">
          <TextStaggerAnimation
            href="/work"
            text="view all projects"
            className="projects"
          />
        </div>
      </section>
      <section className="page5 w-full relative pt-[10vw]">
        <PortraitWorks
          alt="project video"
          link="https://images.unsplash.com/photo-1742268351423-6d04402e9090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <PortraitWorks
          alt="project video"
          link="https://images.unsplash.com/photo-1741781650657-ce002002a996?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <PortraitWorks
          alt="project video"
          link="https://images.unsplash.com/photo-1696216997841-648877790ad4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </section>
    </div>
  );
}
