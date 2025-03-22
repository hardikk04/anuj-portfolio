const Footer = () => {
  return (
    <>
      <section className="footer fixed z-[-1] bg-black text-white bottom-0 leading-0 w-full pb-4 pt-[8vw]">
        <div className="footer-text text-center ">
          <h2 className="text-[14vw] tracking-wide mm font-extrabold leading-none">
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
      </section>

      <section className="relative h-[40vh] w-full"></section>
    </>
  );
};

export default Footer;
