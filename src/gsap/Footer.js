export function animateFooter(
  gsap,
  ScrollSmoother,
  Typed,
  SplitText,
  ScrollTrigger
) {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.utils.toArray(".foothead").forEach((element) => {
    if (element.classList.contains("kanan")) {
      gsap.set(element, { yPercent: -120, xPercent: 10, opacity: 0 });
    }
    if (element.classList.contains("kiri")) {
      gsap.set(element, { yPercent: -120, xPercent: -10, opacity: 0 });
    }

    gsap.to(element, {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },

      xPercent: 0,
      yPercent: 0,
      opacity: 1,
    });
  });

  ScrollTrigger.refresh();
}
