import TextStaggerAnimation from "../shared/animations/TextStaggerAnimation";
import { getIndianTime } from "@/lib/getIndiaTime";

const SocialMedia = () => {
  return (
    <div className="flex justify-center pt-[6vw] bg">
      <div className="w-[75%] flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="text-center">
            <span className="block text-2xl bb">hello@lewiszhang.dev</span>
            <span className="block text-2xl opacity-70 ll mt-2">
              +91 7974374113
            </span>
          </div>
          <div className="text-center">
            <span className="block text-2xl bb">Local Time</span>
            <span className="block text-2xl opacity-70 ll mt-2">
              {getIndianTime()}
            </span>
          </div>
        </div>
        <div className="social-links flex flex-col gap-[2vw] py-[5vw]">
          <div className="projects bb flex justify-center">
            <TextStaggerAnimation
              href="/contact"
              text="contact"
              className="contact"
            />
          </div>
          <div className="projects bb flex justify-center">
            <TextStaggerAnimation
              href="https://www.instagram.com/anujkelodiya"
              text="instagram"
              className="instagram"
            />
          </div>
          <div className="projects bb flex justify-center">
            <TextStaggerAnimation
              href="#"
              text="linkedin"
              className="linkedin"
            />
          </div>
          <div className="projects bb flex justify-center">
            <TextStaggerAnimation href="#" text="behance" className="behance" />
          </div>
          <div className="projects bb flex justify-center">
            <TextStaggerAnimation href="#" text="X" className="x" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-center ">
            <span className="block text-2xl bb">Remote from India</span>
            <span className="block text-2xl opacity-70 ll mt-2">
              24° 30' 13'' N /118° 07' 21'' E
            </span>
          </div>
          <div className="text-center">
            <span className="block text-2xl bb">Current Status</span>
            <span className="relative inline-block text-2xl opacity-70 mt-2">
              <span className="flex justify-center items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                Available
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
