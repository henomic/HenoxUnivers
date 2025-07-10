import { ref, triggerRef } from "vue";

let dataParams = ref(false);

export function checkParams(params) {
  return (dataParams.value = params == "true" ? true : false);
}

export default function gsapLandingpage(
  gsap,
  ScrollSmoother,
  Typed,
  SplitText,
  ScrollTrigger
) {
  console.log(dataParams.value);

  ScrollSmoother.create({
    wrapper: ".wrapw",
    content: ".contentw",
    smooth: 5, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });

  const tl1 = gsap.timeline({
    defaults: { duration: 3, ease: "power4.out" },
  });

  function section1() {
    tl1.to(".typed-text", {
      scale: 600,
      x: 3000,
      y: 1000,
      duration: dataParams.value === true ? 0 : 1,
      delay: dataParams.value === true ? 0 : 1,
      ease: "power1.inOut",
    });

    tl1.fromTo(
      ".box1",
      {
        borderRadius: "100%",
        width: "0%",
        height: "0%",
        opacity: 0,
      },
      {
        borderRadius: "0%",
        width: "100%",
        zIndex: 50,
        height: "100%",
        opacity: 1,
        duration: dataParams.value === true ? 0 : 1,
        delay: 0,
        ease: "power4.out",
      }
    );

    let split = new SplitText(".nama-big", { type: "words" });

    tl1.from(split.words, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      deelay: 1,

      onComplete: () => {
        new Typed(".typedGretting", {
          strings: [" — as a Backend Developer", " — as a Frontend Developer"],
          typeSpeed: 60,
          backSpeed: 100,
          backDelay: 5000,
          startDelay: 100,
          showCursor: false,
          loop: true,
        });
      },
    });

    tl1.from(".icons", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.7,
      onComplete: function (d) {
        // document.querySelector("").classList.add("hidden");
        gsap.to(
          ".headerall",

          {
            y: 0,
            opacity: 1,
            duration: 1,

            onComplete: () => {
              gsap.to(".headerall", {
                y: -100,
                opacity: 0,
                ease: "power2.out",

                scrollTrigger: {
                  trigger: ".box1",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                },
              });
            },
          }
        );
        document
          .querySelectorAll(".TwoSection, .section-3, .page-4, .page-5")
          .forEach((el) => {
            el.classList.add("flex");
            el.classList.remove("hidden");
          });

        ScrollTrigger.refresh();
        tl1.to(".typed-text", {
          opacity: 0,
          display: "none",
        });

        gsap.to(".oneSectionText", {
          scrollTrigger: {
            trigger: ".TwoSection",
            start: "top 80%",
            end: "top top",
            scrub: true,
          },
          yPercent: 100,
          opacity: 0,
          duration: 2,
          ease: "sine.out",
        });
        gsap.from(".headingBig", {
          scrollTrigger: {
            trigger: ".TwoSection",
            start: "top 80%",
            end: "top top",
            scrub: true,
          },
          x: -100,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
        });
      },
    });
  }

  if (dataParams.value === true) {
    section1();
  } else {
    gsap.set(".headerall", {
      y: -100,
      opacity: 0,
    });
    var typed = new Typed(".typed-text", {
      strings: dataParams.value ? [""] : ["hi!", "  MY NAME IS GALIH"],
      typeSpeed: dataParams.value ? 0 : 60,
      backSpeed: dataParams.value ? 0 : 100,
      backDelay: dataParams.value ? 0 : 100,
      showCursor: false,
      startDelay: dataParams.value ? 0 : 200,
      loop: false,
      onComplete: function (d) {
        section1();
      },
    });
  }

  // end from typed

  tl1.fromTo(
    ".TwoSection",
    {
      backgroundColor: "#111",
    },

    {
      backgroundColor: "#1a1a1a",
      duration: 4,
      ease: "sine.out",
      scrollTrigger: {
        scrub: true,
        trigger: ".TwoSection",
        start: "top 66%",
        end: "top top",
      },
    }
  );

  const slides = gsap.utils.toArray(".konten");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".TwoSection",
      start: "top top",
      end: "+=" + slides.length * window.innerHeight * 1.1,
      pin: true,
      scrub: true,
      snap: {
        snapTo: 1 / slides.length, // snap setiap slide
        duration: { min: 0.2, max: 0.5 }, // durasi snap
        delay: 0.1, // tunggu dulu sebelum snap
        ease: "power1.inOut",
      },
      // hapus markers kalau sudah fix
    },
  });

  slides.forEach(function (p, i) {
    tl.fromTo(
      p,
      { opacity: 0, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5 }
    );
    const teks = p.querySelectorAll("h1, a");
    tl.from(teks, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    });
    const garis = p.querySelectorAll(".garisSamping, .garisBawahJudulApk");
    tl.from(
      garis,

      {
        height: "0rem",
        width: "0rem",
        duration: 1,
        ease: "power4.out",
      }
    );
    if (i !== slides.length - 1) {
      tl.to(p, { opacity: 0, scale: 0.9, y: -50, duration: 0.5 }, "+=0.5");
    }
  });

  tl1.fromTo(
    ".section-3",
    {
      backgroundColor: "#1a1a1a",
    },
    {
      backgroundColor: "#111",
      scrollTrigger: {
        trigger: ".section-3",
        start: "top 66%",
        end: "top",

        scrub: true,
      },
    }
  );

  var garisAll = gsap.fromTo(
    ".garis",
    {
      height: 0,
    },
    {
      height: "370vh",
      duration: 0.3,
      scrollTrigger: {
        scrub: true,
        trigger: ".section-3",
        start: "top top",
        end: "+=370%",
        onComplete: () => {
          gsap.to(".bottomSwipe", {
            width: "100%",
            duration: 1,
            scrollTrigger: {
              scrub: true,

              start: "top top",
              trigger: ".bottomSwipe",
            },
          });
        },
      },
    }
  );

  document.querySelectorAll(".svg").forEach(function (svg) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        scrub: true,
        start: "top center",
        duration: 0.3,
      },
    });

    const paths = svg.querySelectorAll("path");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0,
      });
    });
    tl.fromTo(
      svg,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        x: 50,
        ease: "sine.inOut",
      }
    );
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1,
      opacity: 1,

      ease: "power1.inOut",
      stagger: 0.3,
    });

    gsap.to(paths, {
      y: "+=7",
      x: "+=4",
      rotation: "+=3",
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "sine.inOut",
    });
  });

  gsap.to(".buled", {
    scrollTrigger: {
      trigger: ".buled-container",
      start: "top top",
      end: "bottom top",
      pin: true, // atau pinSpacing: false kalau mau custom
      scrub: true,
    },
  });

  var garis = gsap.utils.toArray(".Garissamping, .Garisatas");
  var contentTech = gsap.utils.toArray(".atasText");
  var garisTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".tech",
      scrub: "true",
      start: "top 20%",
      end: "bottom +=100%",
    },
  });
  garis.forEach(function (a) {
    if (a.classList.contains("Garisatas")) {
      garisTl.from(a, {
        height: 0,
        duration: 1.3,
      });
    } else if (a.classList.contains("Garissamping")) {
      garisTl.fromTo(
        a,
        {
          width: 0,
        },
        {
          duration: 1.3,
          delay: 1,
          width: "200%",
        }
      );
    }
  });

  var textAtas = gsap.utils.toArray(".atasText");

  textAtas.forEach(function (g) {
    var contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: g,
        scrub: true,
        start: "bottom 70%",
        duration: 0.6,
        end: "+=40%",
      },
    });
    contentTl.fromTo(
      g,
      {
        y: 70,
        opacity: 0,
      },
      { y: 0, opacity: 1 }
    );
  });

  var techCard = gsap.utils.toArray(".techStackCard");
  techCard.forEach((card) => {
    var cardTech = gsap.timeline({
      scrollTrigger: {
        start: "top 90%",
        end: "bottom 80%",

        trigger: card,
        scrub: true,
      },
    });
    gsap.set(card, {
      y: 70,
      opacity: 0,
    });
    cardTech.to(
      card,

      {
        y: 0,
        opacity: 1,
      }
    );
  });

  gsap.fromTo(
    ".textProfile",
    {
      yPercent: -50,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".textProfile",
        scrub: true,
        start: "top center",
      },
      yPercent: 50,
      yPercent: 20,
      opacity: 1,
      duration: 2,
    }
  );

  gsap.set(".card-profile", { x: -70, opacity: 0 });
  gsap.to(".card-profile", {
    scrollTrigger: {
      start: "top 80%",
      scrub: true,
      end: "top 50%",
      trigger: ".card-profile",
    },
    x: 0,
    opacity: 1,
  });

  gsap.set(".textJson span", { opacity: 0, xPercent: -30 });
  gsap.to(".textJson span", {
    xPercent: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 0.3,
    scrollTrigger: {
      scrub: true,
      trigger: ".textJson span",
      start: "bottom 95%%",
      end: "bottom +=15%",
    },
  });

  gsap.utils.toArray(".pengalaman").forEach((element) => {
    if (element.classList.contains("gede")) {
      gsap.set(element, { xPercent: 5, opacity: 0 });
    } else {
      gsap.set(element, { xPercent: -5, opacity: 0 });
    }
    var pengalaman = gsap.timeline({
      scrollTrigger: {
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,

        trigger: element,
      },
    });

    pengalaman.to(element, {
      xPercent: 0,
      opacity: 1,
    });
  });

  gsap.from(".garisPengalaman", {
    height: 0,
    scrollTrigger: {
      scrub: true,
      start: "top 80%",
      end: "bottom 10%",
      trigger: ".garisPengalaman",
    },
  });

  gsap.utils.toArray(".textThere").forEach((tx) => {
    if (tx.classList.contains("left")) {
      gsap.set(tx, { xPercent: -60, opacity: 0 });
    } else {
      gsap.set(tx, { xPercent: 60, opacity: 0 });
    }

    gsap.to(tx, {
      xPercent: 0,
      yPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: tx,
        start: "top 70%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  });
  gsap.set(".textBawah", { yPercent: 80, opacity: 0 });

  gsap.to(".textBawah", {
    xPercent: 0,
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".textThere",
      start: "top 70%",
      end: "bottom",
      scrub: true,
    },
  });
}
