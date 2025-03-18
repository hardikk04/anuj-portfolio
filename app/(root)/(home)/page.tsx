import "remixicon/fonts/remixicon.css";
export default function Home() {
  return (
    <div className="main bg mm text-black">
      <section className="page1 w-full text-center pt-[16vw] py-[12vw]">
        <div className="mb-[-2.5vw] ml-16">
          <span className="text-2xl">portfolio</span>
        </div>
        <div className="headline">
          <h1 className="text-[14vw] tracking-wide scale-y-120 mm font-extrabold leading-none">
            Anuj Kelodiya
          </h1>
        </div>
        <div className="position ml-[32vw]">
          <span className="text-2xl">senior video editor</span>
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
        <div className="role-model w-[32%] h-[150vh] bg-red-200">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.prod.website-files.com/666066030b1447405865fff8/674ef4bbe8fcbec7ae18ca8b_Filip%20Felbar%20-%20Intro%20Image-p-1600.webp"
            alt=""
          />
        </div>
        <div className="text px-4 flex flex-col justify-between">
          <div>
            <h2 className="text-[5vw] bb leading-[1] tracking-tighter">
              <span className="line block">senior digital</span>
              <span className="line block">designer helping</span>
              <span className="line block">brands communicate</span>
              <span className="line block">with their audience in</span>
              <span className="line block">a meaningful way</span>
            </h2>
          </div>
          <div className="about-me bb">
            <span className="text-5xl bg-white p-2">about me</span>
          </div>
          <div className="specialising bb">
            <span className="text-5xl block">specialising in:</span>
            <span className="text-5xl block">digital design</span>
            <span className="text-5xl block">branding</span>
            <span className="text-5xl block">web experiences</span>
            <span className="text-5xl block">webflow development</span>
            <span className="text-5xl block">art direction</span>
          </div>
        </div>
      </section>
      <section className="page4 w-full px-4 pt-[14vw]">
        <div className="title text-center">
          <h2 className="text-[10vw] leading-[.8] bb tracking-tighter font-extrabold">
            <span className="line block">selected</span>
            <span className="line block">works</span>
          </h2>
        </div>
        <div className="para text-center text-4xl bb flex justify-center pt-[6vw]">
          <p className="w-[70%]">
            a selection of projects that represent my approach to design and
            development. Each piece is crafted with a focus on detail,
            innovation, and effectiveness.
          </p>
        </div>
        <div className="projects bb flex justify-center pt-[6vw]">
          <span className="text-5xl bg-white p-2">view all projects</span>
        </div>
      </section>
      <section className="page5 w-full relative pt-[14vw]">
        <div className="video1 h-screen w-full sticky top-0 left-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1742268351423-6d04402e9090?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="project image"
          ></img>
          <div className="overlay absolute top-0 left-0 w-full h-screen bg-black/60 z-[1]"></div>
        </div>
        <div className="video2 h-screen w-full sticky top-0 left-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1741781650657-ce002002a996?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="project image"
          ></img>
          <div className="overlay absolute top-0 left-0 w-full h-screen bg-black/60 z-[1]"></div>
        </div>
        <div className="video3 h-screen w-full sticky top-0 left-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1696216997841-648877790ad4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="project image"
          ></img>
          <div className="overlay absolute top-0 left-0 w-full h-screen bg-black/60 z-[1]"></div>
        </div>
      </section>
      <section className="page6 w-full px-4 pt-[14vw]">
        <div className="title text-center">
          <h2 className="text-[10vw] leading-[.8] bb tracking-tighter font-extrabold">
            contact
          </h2>
        </div>
        <div className="para text-center text-4xl bb flex justify-center pt-[6vw]">
          <p className="w-[70%]">
            interested in starting a project? Or potentially collaborating on
            something exciting? Or just interested in following along for
            inspiration and talking design, music and Futurama?
          </p>
        </div>
        <div className="projects bb flex justify-center pt-[6vw]">
          <span className="text-5xl bg-white p-2">contact me</span>
        </div>
        <div className="projects bb flex justify-center pt-[2vw]">
          <span className="text-5xl bg-white p-2">instagram</span>
        </div>
        <div className="projects bb flex justify-center pt-[2vw]">
          <span className="text-5xl bg-white p-2">linkedin</span>
        </div>
        <div className="projects bb flex justify-center pt-[2vw]">
          <span className="text-5xl bg-white p-2">bahance</span>
        </div>
        <div className="projects bb flex justify-center pt-[2vw]">
          <span className="text-5xl bg-white p-2">X</span>
        </div>
      </section>
      <section className="footer pt-[8vw]">
        <div className="footer-text text-center ">
          <h2 className="text-[14vw] tracking-wide mm font-extrabold leading-none">
            Anuj Kelodiya
          </h2>
        </div>
        <div className="text-center ll">
          <span>
            developed by <span className="underline cursor-pointer">hardik</span>
            <i className="ri-heart-fill"></i> | copyright © 2025
          </span>
        </div>
      </section>
    </div>
  );
}
