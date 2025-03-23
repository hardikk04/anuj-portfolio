import { getIndianTime } from "@/lib/getIndiaTime";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="footer fixed custom-gradient z-[-1] bg-black text-white bottom-0 w-full  pt-[8vw]">
        <div className="flex justify-between px-12 text-lg">
          <div className="flex flex-col gap-1">
            <h3 className="bb text-white/55">Contact Me</h3>
            <Link
              href={"tel:+917974374113"}
              className="ll block hover:opacity-85 transition-all"
            >
              +91 7974374113
            </Link>
            <Link
              href={"mailto:anujkelodiya.work@gmail.com"}
              className="ll block hover:opacity-85 transition-all"
            >
              anujkelodiya.work@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="bb text-white/65">Follow Me</h3>
            <Link
              target="_blank"
              href={"https://www.instagram.com/anujkelodiya"}
              className="ll group flex items-center gap-1"
            >
              <i className="ri-instagram-line text-2xl  transition-all group-hover:text-red-500 opacity-50 mr-1"></i>{" "}
              <span>instagram</span>
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/anujkelodiya"}
              className="ll group flex items-center gap-1"
            >
              <i className="ri-linkedin-box-fill text-2xl  transition-all group-hover:text-blue-500 opacity-50 mr-1"></i>{" "}
              <span>linkedin</span>
            </Link>
            <Link
              target="_blank"
              href={"https://x.com/AnujKelodiya?t=sMs3xKik6FlByvAHkE8CHQ&s=09"}
              className="ll flex items-center gap-1"
            >
              <i className="ri-twitter-x-fill text-2xl  transition-all opacity-50 mr-1"></i>{" "}
              <span>X</span>
            </Link>
          </div>
          <div className="flex flex-col gap-1 w-[16%]">
            <span className="ll block">
              dental care the way it should be focused on you and only you
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="bb text-white/65">Remote from India</h3>
              <span className="ll block">23° 1' 38.39" N / 77° 1' 5.89" E</span>
            </div>
            <div>
              <h3 className="bb text-white/65">Local Time</h3>
              <span className="ll block">{getIndianTime()}</span>
            </div>
            <div>
              <h3 className="bb text-white/65">Current Status</h3>
              <span className="relative inline-block">
                <span className="flex justify-center items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                  Available
                </span>
              </span>
            </div>
            <div className="mt-8">
              <h3
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bb text-white/65 cursor-default w-fit"
              >
                Scroll To Top <i className="ri-arrow-up-line"></i>
              </h3>
            </div>
          </div>
        </div>
        <div className="pb-8  leading-0 pt-[2vw]">
          <div className="footer-text text-center">
            <h2 className="text-[15.5vw] whitespace-nowrap tracking-wide mm font-extrabold leading-none">
              Anuj Kelodiya
            </h2>
          </div>
          <div className="text-center ll">
            <span>
              design & developed by{" "}
              <span className="underline cursor-pointer">hardik</span>
              <i className="ri-heart-fill"></i> | copyright © 2025
            </span>
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] w-full pointer-events-none"></section>
    </>
  );
};

export default Footer;
