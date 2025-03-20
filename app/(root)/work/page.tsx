import PortraitWorks from "@/components/work/PortraitWorks";
import ReelCard from "@/components/work/ReelCard";
import React from "react";

const page = () => {
  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full  pt-[12vw]  px-4 pb-[4vw]">
        <div className="headline text-left">
          <h1 className="text-[22vw] tracking-tighter scale-y-120 bb  leading-none">
            work
          </h1>
        </div>
      </section>
      <section className="page2 w-full relative pt-[0vw]">
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
      <section className="page3 relative px-4">
        <h2 className="bb text-[10vw] leading-none sticky inline-block pl-4 top-1/2 left-1/2 -translate-x-1/2 ">
          reels
        </h2>
        <div className="reels w-full px-4 overflow-hidden ">
          <div className="w-full flex py-[4vw]">
            <ReelCard index="1" link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="w-full flex justify-end py-[8vw]">
            <ReelCard index="2" link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="w-full flex py-[4vw]">
            <ReelCard index="3" link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="w-full flex justify-end py-[8vw]">
            <ReelCard index="4" link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="w-full flex justify-center py-[8vw] pb-0 relative z-[1]">
            <ReelCard index="5" link="https://images.unsplash.com/photo-1741627872533-52df24885303?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
