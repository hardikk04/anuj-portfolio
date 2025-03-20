import gsap from "gsap";

export const slideInOut = () => {
  gsap.to(".links", {
    height: "0",
  });
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.4,
        transform: "translateY(-35%)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.87,0,0.13,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
      },
    ],
    {
      duration: 2000,
      easing: "cubic-bezier(0.87,0,0.13,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
