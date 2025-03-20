"use client";

import { slideInOut } from "@/utils/slideInOut";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [flag, setFlag] = useState(false);
  const pathname = usePathname();
  const router = useTransitionRouter();

  return (
    <nav className="w-full fixed top-5 z-10 flex justify-center">
      <div className="w-[98%] bg-white px-4 py-3 rounded-xl ">
        <div className="w-full flex justify-between items-center">
          <div className="nav-left flex gap-2 items-center mm">
            <div className="nav-logo">
              <Link
                onClick={() => {
                  router.push("/", {
                    onTransitionReady: slideInOut,
                  });
                }}
                href="/"
              >
                <Image
                  src={
                    "https://cdn.prod.website-files.com/637853f6f3d6aacb22fa97db/638c61879bf1380112df5835_Group%2076.svg"
                  }
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-cover"
                ></Image>
              </Link>
            </div>
            <span className="uppercase">
              CREATIVE nomad, designing digital products & brands.
            </span>
          </div>
          <div
            onClick={() => {
              if (!flag) {
                gsap.to(".links", {
                  height: "auto",
                  ease: "power2.in",
                  duration: 0.5,
                  onComplete: () => {
                    gsap.to(".links", {
                      opacity: 1,
                    });
                  },
                });
                setFlag(true);
              } else {
                gsap.to(".links", {
                  overflow: "hidden",
                  height: "0",
                  ease: "power2.in",
                  duration: 0.5,
                  onComplete: () => {
                    gsap.to(".links", {
                      opacity: 0,
                    });
                  },
                });
                setFlag(false);
              }
            }}
            className="nav-right cursor-pointer"
          >
            <i
              className={`${
                !flag ? "ri-menu-3-line" : "ri-close-large-fill"
              } text-3xl`}
            ></i>
          </div>
        </div>
        <div className="links overflow-hidden opacity-0 h-0">
          <div className="flex justify-between gap-4 mt-4 overflow-hidden">
            <Link
              onClick={() => {
                router.push("/", {
                  onTransitionReady: slideInOut,
                });
              }}
              href="/"
              className="w-[20%]"
            >
              <div
                className={`${
                  pathname === "/" ? "bg-black rounded-[.5vw] text-white" : ""
                } nav-link overflow-hidden hover:text-white hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Home</h2>
                <span className="mm relative">↗</span>
              </div>
            </Link>
            <Link
              onClick={() => {
                router.push("/about", {
                  onTransitionReady: slideInOut,
                });
              }}
              href="/about"
              className="w-[20%]"
            >
              <div
                className={`${
                  pathname === "/about"
                    ? "bg-black rounded-[.5vw] text-white"
                    : ""
                }
                 nav-link overflow-hidden hover:text-white hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">About</h2>
                <span className="mm relative">↗</span>
              </div>
            </Link>
            <Link
              onClick={() => {
                router.push("/work", {
                  onTransitionReady: slideInOut,
                });
              }}
              href="/work"
              className="w-[20%]"
            >
              <div
                className={`${
                  pathname === "/project"
                    ? "bg-black rounded-[.5vw] text-white"
                    : ""
                } nav-link overflow-hidden hover:text-white hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Work</h2>
                <span className="mm relative">↗</span>
              </div>
            </Link>
            <Link
              onClick={() => {
                router.push("/services", {
                  onTransitionReady: slideInOut,
                });
              }}
              href="/services"
              className="w-[20%]"
            >
              <div
                className={`${
                  pathname === "/services"
                    ? "bg-black rounded-[.5vw] text-white"
                    : ""
                } nav-link overflow-hidden hover:text-white hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Services</h2>
                <span className="mm relative">↗</span>
              </div>
            </Link>
            <Link
              onClick={() => {
                router.push("/contact", {
                  onTransitionReady: slideInOut,
                });
              }}
              href="/contact"
              className="w-[20%]"
            >
              <div
                className={`${
                  pathname === "/contact"
                    ? "bg-black rounded-[.5vw] text-white"
                    : ""
                } nav-link overflow-hidden hover:text-white hover:px-[1.5vw] z-[1] relative w-full border p-3 flex justify-between items-center`}
              >
                <h2 className="mm text-2xl relative">Contact</h2>
                <span className="mm relative">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
