
import TextSplit from "../shared/animations/TextSplit";
import ContactForm from "./ContactForm";

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
      <div className="contact-para text-center text-4xl bb flex justify-center pt-[6vw]">
        <p className="w-[70%]">
          interested in starting a project? Or potentially collaborating on
          something exciting? Or just interested in following along for
          inspiration and talking design, music and Futurama?
        </p>
      </div>
      <div className="pt-[4vw] flex justify-center">
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default Contact;
