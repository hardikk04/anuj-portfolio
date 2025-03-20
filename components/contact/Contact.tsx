import TextStaggerAnimation from "../shared/animations/TextStaggerAnimation";
import TextSplit from "../shared/animations/TextSplit";

const Contact = () => {
  return (
    <section className="contact-section bg w-full px-4 pt-[10vw]">
      <div className="title text-center">
        <h2 className="contact-title text-[10vw] leading-[.8] bb tracking-tighter font-extrabold">
          <span className="line block overflow-hidden">
            <TextSplit text="contact"></TextSplit>
          </span>
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
        <TextStaggerAnimation
          href="/contact"
          text="contact"
          className="contact"
        />
      </div>
      <div className="projects bb flex justify-center pt-[2vw]">
        <TextStaggerAnimation
          href="https://www.instagram.com/anujkelodiya"
          text="instagram"
          className="instagram"
        />
      </div>
      <div className="projects bb flex justify-center pt-[2vw]">
        <TextStaggerAnimation href="#" text="linkedin" className="linkedin" />
      </div>
      <div className="projects bb flex justify-center pt-[2vw]">
        <TextStaggerAnimation href="#" text="behance" className="behance" />
      </div>
      <div className="projects bb flex justify-center pt-[2vw]">
        <TextStaggerAnimation href="#" text="X" className="x" />
      </div>
    </section>
  );
};

export default Contact;
