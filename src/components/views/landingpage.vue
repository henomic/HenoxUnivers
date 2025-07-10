<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import gsapLandingpage, { checkParams } from "../../gsap/Landingpage";
import card from "../template/Card.vue";

import Header from "../template/header.vue";
import { useRoute } from "vue-router";

let gsap, ScrollSmoother, Typed, SplitText, ScrollTrigger;

let src = ref("");
function handleTech(params) {
  const slug = params.currentTarget.getAttribute("slug");
  console.log(slug);
  document.querySelector(".overlayMoon").classList.add("opacity-80");
  document.querySelector(".overlayMoon").classList.remove("opacity-100");
  if (slug === "vscode") {
    src.value = "/image/vscode.svg";
    console.log("vs code");
  } else {
    src.value = `https://cdn.simpleicons.org/${slug}`;
  }
}

function handleTechClose(d) {
  document.querySelector(".overlayMoon").classList.remove("opacity-80");
  document.querySelector(".overlayMoon").classList.add("opacity-100");
}
onMounted(() => {
  const route = useRoute();
  const { appContext } = getCurrentInstance();
  gsap = appContext.config.globalProperties.$gsap;
  ScrollSmoother = appContext.config.globalProperties.$ScrollSmoother;
  Typed = appContext.config.globalProperties.$Typed;
  SplitText = appContext.config.globalProperties.$SplitText;
  ScrollTrigger = appContext.config.globalProperties.$ScrollTrigger;

  checkParams(route.query.downfall);
  gsapLandingpage(gsap, ScrollSmoother, Typed, SplitText, ScrollTrigger);
});
</script>

<template>
  <div class="wrapw bg-white">
    <div class="contentw relative z-[60]">
      <!-- Hero Section -->
      <div class="h-[100vh] relative flex flex-col items-center justify-center">
        <h1 style="color: #111" class="text-3xl typed-text font-bold"></h1>

        <div
          class="absolute black oneSection justify-center items-center flex flex-col text-white box1 opacity-0"
        >
          <div class="oneSectionText text-center group">
            <a
              class="lg:text-[5rem] md:text-[4rem] text-[1.5rem] block nama-big font-bold text-white name"
            >
              FULLSTACK DEVELOPER
              <span
                class="md:text-xl text-base md:mt-2 mt-4 md:text-start text-center block"
                >Welcome to another side of me
                <span class="typedGretting"></span
              ></span>
              <br />
              <span class="md:text-lg text-sm block"
                >Present by Mochamad Galih Sampoerna
              </span>
            </a>
            <div
              class="w-full flex icons flex-col mt-12 gap-2 justify-center items-center"
            >
              <a class="text-white font-semi-bold">Swipe</a>
              <i
                class="bx bx-chevron-down mt-3 bg-white text-lg text-black font-semibold p-3 rounded-full"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div
        class="min-h-[100vh] z-10 TwoSection hidden relative p-5 items-center flex-col justify-center text-4xl"
      >
        <h1
          style="color: #cfcfcf"
          class="lg:block headingBig text-[3rem] text-start w-full block mt-[2rem] font-semibold"
        >
          My Project
          <div class="w-full bg-[#cfcfcf] h-[0.034rem] mt-2 block"></div>
        </h1>
        <div class="flex justify-center relative h-full items-center w-full">
          <card
            nama="Lihblary"
            pt="SMk TI Pembangunan"
            penjelasan="Lihblary is an online book lending platform with an automatic late return fine of 20,000 per day. It helps admins track borrowers and penalties easily, while making it simple for users to borrow books."
            tech="HP | Javascript | Tailwind | jQuery | DataTable  | MySQL"
            src="/image/aplikasi/perpus.png"
          ></card>
          <card
            nama="BBPAT Toko ikan"
            pt="Pt Pesat Aghni"
            penjelasan="A responsive web application for the online buying and selling of fish and fish feed, developed as a team project during my internship. The focus was on teamwork, data management, and user-friendly transactions."
            tech="HP | Javascript | Tailwind | jQuery | DataTable | Inifinite Scroll | MySQL"
            src="/image/aplikasi/pepes.png"
          ></card>

          <card
            nama="Umrah Tour & Travel"
            pt="Musahefiz"
            penjelasan="This Umrah app simplifies booking with admin confirmation, order tracking, and WhatsApp updates — helping admins and pilgrims stay connected and organized."
            tech="HP | Javascript | Tailwind | jQuery | DataTable | Inifinite Scroll | MySQL"
            src="/image/aplikasi/umrah.png"
          ></card>
        </div>
      </div>
      <!-- section 3 -->
      <div
        class="section-3 bg-black min-h-[370vh] justify-center hidden flex-col items-center relative"
      >
        <div class="garis w-[2px] bg-[#8e8e8e] absolute z-20 top-0"></div>
        <div class="text-white h-[50vh]"></div>

        <svg
          class="w-[40rem] absolute z-20 opacity-0 svg top-0 right-0"
          fill="#919191"
          viewBox="0 0 128 128"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#919191"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title></title>
            <path
              d="M24.33,40.26a1,1,0,0,0,.25,0,1,1,0,0,0,.24,0A39.76,39.76,0,0,0,44.17,29l.48-.51a1,1,0,0,0,.25-.44,16.8,16.8,0,0,0-1.85-12.79A17.06,17.06,0,0,0,20.64,9a16.87,16.87,0,0,0,3.69,31.25ZM14.22,19.89a14.79,14.79,0,0,1,7.35-9.12,14.55,14.55,0,0,1,6.85-1.69,15.06,15.06,0,0,1,12.91,7.23,14.77,14.77,0,0,1,1.69,11l-.3.32A37.79,37.79,0,0,1,24.59,38.26,14.87,14.87,0,0,1,14.22,19.89Z"
            ></path>
            <path
              d="M37.21,24.26a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1c-.26-5.92-6.64-10.9-6.91-11.11a1,1,0,0,0-1.41.19,1,1,0,0,0,.19,1.4C31.13,14.69,37,19.27,37.21,24.26Z"
            ></path>
            <path
              d="M58.5,47.72a6.36,6.36,0,0,0-8.69-2.22L36.66,53.29A6.35,6.35,0,0,0,34.44,62L41,73.08A6.35,6.35,0,0,0,49.7,75.3l13.15-7.79a6.34,6.34,0,0,0,2.23-8.68Zm5.32,15.41a4.3,4.3,0,0,1-2,2.66L48.68,73.58a4.34,4.34,0,0,1-5.94-1.52l-2.46-4.14L48,63.35A1,1,0,0,0,48.35,62,1,1,0,0,0,47,61.63L39.27,66.2l-2.34-3.94,13.15-7.78a1,1,0,0,0,.35-1.37,1,1,0,0,0-1.37-.35L36,60.51A4.32,4.32,0,0,1,37.68,55l13.15-7.79a4.36,4.36,0,0,1,6,1.52l6.57,11.11A4.28,4.28,0,0,1,63.82,63.13Z"
            ></path>
            <path
              d="M46.53,40.38a1,1,0,0,0-1.41-.14c-6.72,5.52-11.95,6.49-12,6.5a1,1,0,0,0,.17,2l.16,0c.24,0,5.78-1,13-6.93A1,1,0,0,0,46.53,40.38Z"
            ></path>
            <path
              d="M55.55,58.89a3.2,3.2,0,0,0-1.12,4.37,3.16,3.16,0,0,0,2,1.47,3.08,3.08,0,0,0,.8.1,3.15,3.15,0,0,0,1.62-.45,3.22,3.22,0,0,0,1.47-1.95A3.15,3.15,0,0,0,59.93,60,3.2,3.2,0,0,0,55.55,58.89Zm2.79,3a1.16,1.16,0,0,1-.55.73,1.19,1.19,0,0,1-.9.13,1.19,1.19,0,0,1-.32-2.18,1.13,1.13,0,0,1,.61-.17,1.2,1.2,0,0,1,1.16,1.49Z"
            ></path>
            <path
              d="M7.3,42.19C5.12,45.84,5,49.55,6.89,52.94L17.36,70.63a52.67,52.67,0,0,0,5.26,18.58,1,1,0,0,0,.23.31L24.43,93a7,7,0,0,0,3.94,3.65,7.2,7.2,0,0,0,2.45.44,7,7,0,0,0,6.56-4.58,7,7,0,0,0,.43-2.06l4.44-2.63,15.63,26.4a6.68,6.68,0,0,0-1.09,8.17l.56,1a6.62,6.62,0,0,0,4.09,3,6.33,6.33,0,0,0,1.67.22,6.67,6.67,0,0,0,3.38-.93L78,118.83A3.57,3.57,0,0,0,79.22,114l-2.14-3.62-.21-.31-12-20.23a2.28,2.28,0,0,1-.25-1.73,2.32,2.32,0,0,1,1.06-1.41,2.3,2.3,0,0,1,3.13.81L80.76,107.6c.08.16.16.32.25.48l2.15,3.62a3.55,3.55,0,0,0,3.07,1.74A3.62,3.62,0,0,0,88,113h0l11.48-6.81A6.69,6.69,0,0,0,101.86,97l-.56-.94a6.68,6.68,0,0,0-7.68-3L78.08,66.86l4-2.39a7.14,7.14,0,0,0,3.43.9,7,7,0,0,0,5.63-11.2l-2.86-3.89h0A52.45,52.45,0,0,0,73.43,36l0,0L69,28.47a12,12,0,0,0,5.09-.78c.62-.21,1.23-.45,1.84-.69a18.24,18.24,0,0,1,4.4-1.32,8.61,8.61,0,0,1,5.58,1.21,18.17,18.17,0,0,1,2.48,1.94,13.59,13.59,0,0,0,4.46,2.94,7.44,7.44,0,0,0,2.31.37c3.79,0,7.46-2.88,9.46-6.27.36-.63.71-1.29,1.06-1.95,1.29-2.43,2.5-4.73,4.72-5.47a9.65,9.65,0,0,1,3.48-.25c.57,0,1.13.05,1.7,0,2.73,0,4.79-1.18,5.51-3a1,1,0,0,0-1.86-.72c-.49,1.26-2.23,1.74-3.69,1.76-.52,0-1,0-1.57,0a11.21,11.21,0,0,0-4.21.34c-3,1-4.5,3.89-5.85,6.44-.33.63-.66,1.26-1,1.86-2,3.39-5.86,6.2-9.4,5a11.69,11.69,0,0,1-3.78-2.55,20.82,20.82,0,0,0-2.75-2.14,10.78,10.78,0,0,0-6.88-1.49,19.75,19.75,0,0,0-4.87,1.45c-.59.23-1.18.46-1.78.66-2.46.86-4.38.94-5.86.26h0l-4-6.69c-4.43-7.47-11.34-5.75-13.83-4.81-.27-.56-.54-1.12-.86-1.66A23.35,23.35,0,0,0,18.22,4,23.13,23.13,0,0,0,9,36.32c.43.71.89,1.4,1.38,2.06A17.74,17.74,0,0,0,7.3,42.19ZM33.08,83,24,87.44A51,51,0,0,1,19.5,72l4.2-.42a1,1,0,0,0,.89-1.07,60.2,60.2,0,0,1,.31-10.4,1,1,0,0,0-.24-.79,1,1,0,0,0-.75-.33H19.75a52.67,52.67,0,0,1,1.59-6.92c1.95,1,7.08,4.26,7.19,13C28.6,70.87,32,80.13,33.08,83ZM19.48,61h3.31a62.37,62.37,0,0,0-.25,8.69L19.31,70A46.92,46.92,0,0,1,19.48,61Zm16,30.77a5,5,0,0,1-2.61,2.82,5,5,0,0,1-6.65-2.46l-1.34-2.91,9-4.39,1.43,3.11A5,5,0,0,1,35.51,91.76Zm2.07-3.55a6.82,6.82,0,0,0-.4-1.12L35.32,83a1,1,0,0,0-.19-.26,87.45,87.45,0,0,1-4.22-14.13L41.23,86.05ZM77,117.11h0l-11.48,6.8a4.69,4.69,0,0,1-6.4-1.64l-.56-1a4.63,4.63,0,0,1,1.14-6l.05,0s.06-.06.09-.09.23-.18.36-.26L69,109.71a4.64,4.64,0,0,1,2.36-.65,4.77,4.77,0,0,1,1.18.15,4.63,4.63,0,0,1,2.74,2l1.21,2a.76.76,0,0,0,.08.11l1,1.63A1.56,1.56,0,0,1,77,117.11Zm-9-32.64a4.29,4.29,0,0,0-4.76,6.34l3.4,5.75-7.92,4.69a1,1,0,0,0-.35,1.37,1,1,0,0,0,.86.49,1,1,0,0,0,.51-.14l7.92-4.69,5.32,9a6.6,6.6,0,0,0-5,.73l-8.44,5L30.61,64.2a1.5,1.5,0,0,0-.11-.13,16.58,16.58,0,0,0-4.62-11.15A13.93,13.93,0,0,0,22,50.16l.23-.65a6.87,6.87,0,0,1,1.71-2.67l6.4-2.09a39.49,39.49,0,0,0,14.22-8.19L50.74,31a28.57,28.57,0,0,1,3.48.23,13.76,13.76,0,0,0,.54,4.61c.82,2.82,2.94,6.82,8.4,9.91l.19.07a.75.75,0,0,0,.08.24L91.8,93.94l-8.45,5a6.59,6.59,0,0,0-3,4l-4-6.67,7.82-4.63a1,1,0,0,0-1-1.73l-7.81,4.63-2.51-4.23,4-2.39a1,1,0,1,0-1-1.72l-4,2.39-1.28-2.15A4.21,4.21,0,0,0,67.93,84.47ZM95.55,94.8a4.67,4.67,0,0,1,4,2.28l.56,1a4.68,4.68,0,0,1-1.64,6.39L87,111.22a1.56,1.56,0,0,1-2.14-.54l-2.11-3.56a.56.56,0,0,0,0-.12l-.11-.18a4.66,4.66,0,0,1,1.75-6.15l8.81-5.22A4.68,4.68,0,0,1,95.55,94.8ZM67.25,48.56a105.4,105.4,0,0,1,9.66,9.9l3,4.08a7.49,7.49,0,0,0,.51.61l-3.36,2ZM90.5,59.08a5,5,0,0,1-9,2.27L79.1,58.07l8.19-5.81,2.28,3.1A4.94,4.94,0,0,1,90.5,59.08Zm-4.39-8.44L77.86,56.5c-2-2.32-8.56-9.64-13.52-12.61a1,1,0,0,0-.56-.12c-7.19-4.24-7.68-10.09-7.58-12.28a44.09,44.09,0,0,1,8.47,2.37l-2,3.65a1,1,0,0,0,1.76,1l2.08-3.84,1.28.6L66.64,37a1,1,0,0,0,.3,1.38,1,1,0,0,0,.54.16,1,1,0,0,0,.84-.46l1.29-2A49.3,49.3,0,0,1,86.11,50.64ZM61.86,20.39,69.93,34a46.36,46.36,0,0,0-6.53-2.79A41.5,41.5,0,0,0,51.57,29a22.9,22.9,0,0,0-1-12.6C52.57,15.6,58.18,14.18,61.86,20.39ZM8.59,18.75A20.94,20.94,0,0,1,19.15,5.8a20.58,20.58,0,0,1,9.59-2.34A21.33,21.33,0,0,1,47.16,13.91a21,21,0,0,1,2.29,15.54l-6.27,5.62a37.69,37.69,0,0,1-13.51,7.78l-6.32,2.06A21.11,21.11,0,0,1,8.59,18.75Zm13,27.69a8.76,8.76,0,0,0-1.29,2.4A54.48,54.48,0,0,0,17.6,60s0,0,0,0h0a48.81,48.81,0,0,0-.43,6.37L8.62,51.94c-3.08-5.46,1.26-10.35,3-12A22.9,22.9,0,0,0,21.59,46.44Z"
            ></path>
            <path
              d="M108.36,81.24a1,1,0,0,0,1-.7,10.6,10.6,0,0,1,7-7,1,1,0,0,0,.7-1,1,1,0,0,0-.7-1,10.64,10.64,0,0,1-7-7,1,1,0,0,0-1-.71,1,1,0,0,0-1,.71,10.66,10.66,0,0,1-7,7,1,1,0,0,0-.71,1,1,1,0,0,0,.71,1,10.62,10.62,0,0,1,7,7A1,1,0,0,0,108.36,81.24Zm-5.11-8.69a12.64,12.64,0,0,0,5.11-5.11,12.66,12.66,0,0,0,5.12,5.11,12.62,12.62,0,0,0-5.12,5.12A12.6,12.6,0,0,0,103.25,72.55Z"
            ></path>
            <path
              d="M117.86,50.2a1,1,0,0,0-1-.71,1,1,0,0,0-1,.71,5.88,5.88,0,0,1-3.88,3.88,1,1,0,0,0-.7,1,1,1,0,0,0,.7,1A5.84,5.84,0,0,1,116,59.87a1,1,0,0,0,1,.71,1,1,0,0,0,1-.71A5.88,5.88,0,0,1,121.75,56a1,1,0,0,0,.7-1,1,1,0,0,0-.7-1A5.9,5.9,0,0,1,117.86,50.2Zm-1,7.06A8,8,0,0,0,114.68,55a7.86,7.86,0,0,0,2.23-2.22A7.82,7.82,0,0,0,119.13,55,8,8,0,0,0,116.91,57.26Z"
            ></path>
            <path
              d="M15.27,117.28a1,1,0,0,0,1.91,0,5.52,5.52,0,0,1,3.64-3.64,1,1,0,0,0,.71-1,1,1,0,0,0-.71-1,5.5,5.5,0,0,1-3.64-3.64,1,1,0,0,0-1.91,0,5.5,5.5,0,0,1-3.64,3.64,1,1,0,0,0-.71,1,1,1,0,0,0,.71,1A5.52,5.52,0,0,1,15.27,117.28Zm1-6.6a7.39,7.39,0,0,0,2,2,7.26,7.26,0,0,0-2,2,7.43,7.43,0,0,0-2-2A7.57,7.57,0,0,0,16.23,110.68Z"
            ></path>
          </g>
        </svg>

        <svg
          class="w-[25rem] md:block hidden left-0 top-[17%] absolute z-20 opacity-0 svg"
          fill="#919191"
          viewBox="0 0 128 128"
          id="Layer_1"
          version="1.1"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          stroke="#919191"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M90.6,26.3c-0.1-0.1-0.1-0.1-0.2-0.2c-8.7-7-19.8-11.2-31.8-11.2c-28.1,0-51,22.9-51,51s22.9,51,51,51s51-22.9,51-51 C109.6,49.9,102.2,35.6,90.6,26.3z M91.5,102.1H66.8c-0.6,0-1,0.4-1,1s0.4,1,1,1h22.4c-2.5,2-5.3,3.8-8.2,5.3 c-0.1,0-0.2-0.1-0.4-0.1h-8.7c-0.6,0-1,0.4-1,1s0.4,1,1,1h4.9c-5.6,2.3-11.8,3.5-18.2,3.5c-26.7,0-48.5-21.4-49-48h12 c0.6,0,1-0.4,1-1s-0.4-1-1-1h-12c0-1.9,0.2-3.8,0.4-5.6h33.9c0.6,0,1-0.4,1-1s-0.4-1-1-1H10.3c4.1-22.9,24.2-40.4,48.2-40.4 c10.5,0,20.3,3.4,28.3,9H55.6c-0.6,0-1,0.4-1,1s0.4,1,1,1h33.8c11,9,18.1,22.7,18.1,38C107.6,80.2,101.4,93.2,91.5,102.1z"
            ></path>
            <path
              d="M82.2,55c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7s6.7,3,6.7,6.7c0,1.3-0.4,2.5-1,3.6c-0.3,0.5-0.2,1.1,0.3,1.4 c0.5,0.3,1.1,0.2,1.4-0.3c0.9-1.4,1.3-3,1.3-4.6c0-4.8-3.9-8.7-8.7-8.7s-8.7,3.9-8.7,8.7s3.9,8.7,8.7,8.7c0.6,0,1-0.4,1-1 S82.7,55,82.2,55z"
            ></path>
            <path
              d="M6.7,105.8c0,1,0.3,1.9,1,2.6s1.5,1.1,2.5,1.1c0,0,0.1,0,0.1,0c0.9,0,1.8-0.3,2.5-1c0.7-0.7,1.1-1.5,1.1-2.5 c0-1-0.3-1.9-1-2.6c-0.7-0.7-1.5-1.1-2.5-1.1C8.4,102.3,6.7,103.8,6.7,105.8z M11.9,106c0,0.9-0.8,1.6-1.7,1.5 c-0.4,0-0.8-0.2-1.1-0.5c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.9,0.7-1.5,1.6-1.5c0,0,0,0,0.1,0C11.2,104.4,11.9,105.1,11.9,106z"
            ></path>
            <path
              d="M88.8,13.7c1.9,0,3.5-1.5,3.6-3.5c0.1-2-1.5-3.7-3.5-3.7c-1,0-1.9,0.3-2.6,1S85.2,9,85.2,10c0,1,0.3,1.9,1,2.6 c0.7,0.7,1.5,1.1,2.5,1.1C88.7,13.7,88.8,13.7,88.8,13.7z M87.2,10.1c0-0.9,0.8-1.6,1.7-1.5c0.9,0,1.6,0.8,1.5,1.7 c0,0.9-0.8,1.6-1.7,1.5C87.9,11.7,87.2,11,87.2,10.1z"
            ></path>
            <path
              d="M35,36.6c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6S38.2,36.6,35,36.6z M35,45.8c-2,0-3.6-1.6-3.6-3.6 s1.6-3.6,3.6-3.6s3.6,1.6,3.6,3.6S37.1,45.8,35,45.8z"
            ></path>
            <path
              d="M55.1,73c-0.5,0.2-0.8,0.8-0.5,1.3c0.6,1.5,0.9,3,0.9,4.6c0,6.6-5.4,12-12,12s-12-5.4-12-12s5.4-12,12-12 c2.2,0,4.4,0.6,6.3,1.8c0.5,0.3,1.1,0.1,1.4-0.3c0.3-0.5,0.1-1.1-0.3-1.4c-2.2-1.4-4.8-2.1-7.4-2.1c-7.7,0-14,6.3-14,14 c0,7.7,6.3,14,14,14s14-6.3,14-14c0-1.9-0.4-3.7-1.1-5.4C56.2,73,55.6,72.8,55.1,73z"
            ></path>
            <path
              d="M91.8,79.1c-3.1,0-5.6,2.5-5.6,5.6s2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6S94.9,79.1,91.8,79.1z M91.8,88.3c-2,0-3.6-1.6-3.6-3.6 c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C95.4,86.7,93.8,88.3,91.8,88.3z"
            ></path>
            <path
              d="M86.8,121.5c0.2,0,0.3,0,0.5-0.1c1.5-0.8,3-1.6,4.5-2.6c0.5-0.3,0.6-0.9,0.3-1.4c-0.3-0.5-0.9-0.6-1.4-0.3 c-1.4,0.9-2.9,1.7-4.3,2.5c-0.5,0.3-0.7,0.9-0.4,1.3C86.1,121.3,86.4,121.5,86.8,121.5z"
            ></path>
            <path
              d="M106.7,105.7c0.4-0.4,0.3-1.1-0.1-1.4c-0.4-0.4-1.1-0.3-1.4,0.1c-2.8,3.4-6,6.5-9.5,9.2c-0.4,0.3-0.5,1-0.2,1.4 c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2C100.5,112.4,103.8,109.2,106.7,105.7z"
            ></path>
            <path
              d="M110.4,99c0.2,0.1,0.3,0.2,0.5,0.2c0.3,0,0.7-0.2,0.8-0.5c5.8-9.4,9.1-20.2,9.5-31.2c0.2-4.6-0.2-9.2-1-13.7 c-0.1-0.5-0.6-0.9-1.2-0.8c-0.5,0.1-0.9,0.6-0.8,1.2c0.8,4.3,1.1,8.8,1,13.2c-0.4,10.7-3.6,21.2-9.2,30.2 C109.8,98.1,109.9,98.7,110.4,99z"
            ></path>
            <path
              d="M117.4,47.5c0.1,0,0.2,0,0.3,0c0.5-0.2,0.8-0.7,0.7-1.3c-2.4-7.7-6.3-14.7-11.4-21c1-1.1,1.7-2.5,1.7-4.1 c0.1-3.4-2.6-6.3-6-6.4c-1.7-0.1-3.2,0.5-4.4,1.7s-1.9,2.7-2,4.3c-0.1,1.7,0.5,3.2,1.7,4.4s2.7,1.9,4.3,2c0.1,0,0.1,0,0.2,0 c1,0,2-0.3,2.9-0.7c5,6.1,8.7,12.9,11.1,20.4C116.6,47.2,117,47.5,117.4,47.5z M102.4,25.2c-2.3-0.1-4.1-2-4-4.3 c0.1-2.3,2-4.1,4.3-4c2.3,0.1,4.1,2,4,4.3S104.7,25.3,102.4,25.2z"
            ></path>
            <title></title>
          </g>
        </svg>

        <svg
          class="absolute md:block hidden z-20 opacity-0 svg right-0 top-[20%] w-[20rem]"
          fill="#919191"
          width="192px"
          height="192px"
          viewBox="0 0 128 128"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#919191"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title></title>
            <path
              d="M34.09,7.17A1,1,0,1,0,34.86,9a60.28,60.28,0,0,1,65.86,13.11,48.19,48.19,0,0,1,0,68.08,38.31,38.31,0,0,1-54.18,0,30.49,30.49,0,0,1,0-43.06,24.15,24.15,0,0,1,34.17,0,19.13,19.13,0,0,1,0,27.05,15.12,15.12,0,0,1-21.36,0,11.9,11.9,0,0,1,0-16.8,1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0,13.88,13.88,0,0,0,0,19.63,17.11,17.11,0,0,0,24.18,0,21.11,21.11,0,0,0,0-29.87,26.13,26.13,0,0,0-37,0,32.47,32.47,0,0,0,0,45.89,40.32,40.32,0,0,0,57,0,50.2,50.2,0,0,0,0-70.91A62.26,62.26,0,0,0,34.09,7.17Z"
            ></path>
            <path
              d="M28,12.25a1,1,0,0,0,.49-.13c.88-.49,1.78-1,2.68-1.42a1,1,0,0,0,.45-1.34,1,1,0,0,0-1.34-.45c-.93.46-1.86,1-2.77,1.46A1,1,0,0,0,28,12.25Z"
            ></path>
            <path
              d="M21.06,14.52a64.27,64.27,0,0,0-7.21,6.2,1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3,60.88,60.88,0,0,1,7-6,1,1,0,1,0-1.18-1.62Z"
            ></path>
            <path
              d="M111.45,113a1,1,0,0,0-1.39-.25,60.31,60.31,0,0,1-77.3-6.84,48.19,48.19,0,0,1,0-68.08,38.31,38.31,0,0,1,54.18,0,30.49,30.49,0,0,1,0,43.06,24.18,24.18,0,0,1-34.16,0,19.14,19.14,0,0,1,0-27,15.11,15.11,0,0,1,21.35,0,11.88,11.88,0,0,1,0,16.8A1,1,0,0,0,75.55,72a13.9,13.9,0,0,0,0-19.63,17.12,17.12,0,0,0-24.19,0,21.14,21.14,0,0,0,0,29.87,26.19,26.19,0,0,0,37,0,32.49,32.49,0,0,0,0-45.89,40.37,40.37,0,0,0-57,0,50.2,50.2,0,0,0,0,70.91,62.29,62.29,0,0,0,79.85,7.07A1,1,0,0,0,111.45,113Z"
            ></path>
            <path
              d="M8.28,58.18A1,1,0,0,0,7.13,59,72.38,72.38,0,0,0,6.4,77.77a1,1,0,0,0,1,.91h.09a1,1,0,0,0,.9-1.09A70.6,70.6,0,0,1,9.1,59.33,1,1,0,0,0,8.28,58.18Z"
            ></path>
            <path
              d="M10.15,92.78a.92.92,0,0,0,.29,0,1,1,0,0,0,.67-1.25,69.55,69.55,0,0,1-1.89-7.85,1,1,0,1,0-2,.35,73.66,73.66,0,0,0,1.94,8.08A1,1,0,0,0,10.15,92.78Z"
            ></path>
            <path
              d="M118.21,105.87c-1.15,1.15-2.35,2.26-3.57,3.3a1,1,0,0,0,1.3,1.52c1.26-1.08,2.5-2.22,3.69-3.41a1,1,0,0,0,0-1.41A1,1,0,0,0,118.21,105.87Z"
            ></path>
            <path
              d="M100.63,39.86a1,1,0,0,0,1,.71,1,1,0,0,0,1-.71,5.33,5.33,0,0,1,3.52-3.51,1,1,0,0,0,.7-1,1,1,0,0,0-.7-1,5.34,5.34,0,0,1-3.52-3.52,1,1,0,0,0-1-.7,1,1,0,0,0-1,.7,5.33,5.33,0,0,1-3.51,3.52,1,1,0,0,0-.71,1,1,1,0,0,0,.71,1A5.31,5.31,0,0,1,100.63,39.86Zm1-6.37a7.15,7.15,0,0,0,1.9,1.9,7.3,7.3,0,0,0-1.9,1.9,7.46,7.46,0,0,0-1.9-1.9A7.3,7.3,0,0,0,101.59,33.49Z"
            ></path>
            <path
              d="M115,21.86a1,1,0,0,0,1,.71,1,1,0,0,0,1-.71A7.31,7.31,0,0,1,121.71,17a1,1,0,0,0,0-1.91,7.29,7.29,0,0,1-4.84-4.84,1,1,0,0,0-1-.7,1,1,0,0,0-1,.7,7.33,7.33,0,0,1-4.84,4.84,1,1,0,0,0,0,1.91A7.35,7.35,0,0,1,115,21.86Zm1-8.88A9.32,9.32,0,0,0,119,16.07a9.29,9.29,0,0,0-3.09,3.08,9.35,9.35,0,0,0-3.08-3.08A9.38,9.38,0,0,0,115.91,13Z"
            ></path>
            <path
              d="M9.88,28.35a1,1,0,0,0-1.92,0,5.29,5.29,0,0,1-3.51,3.51,1,1,0,0,0-.7,1,1,1,0,0,0,.7,1A5.31,5.31,0,0,1,8,37.29a1,1,0,0,0,1.92,0,5.31,5.31,0,0,1,3.51-3.52,1,1,0,0,0,.7-1,1,1,0,0,0-.7-1A5.29,5.29,0,0,1,9.88,28.35Zm-1,6.37A7.15,7.15,0,0,0,7,32.82a7.3,7.3,0,0,0,1.9-1.9,7.46,7.46,0,0,0,1.9,1.9A7.3,7.3,0,0,0,8.92,34.72Z"
            ></path>
            <path
              d="M123.55,89.94a7.81,7.81,0,0,1-5.18-5.18,1,1,0,0,0-1-.7,1,1,0,0,0-1,.7,7.83,7.83,0,0,1-5.18,5.18,1,1,0,0,0-.71,1,1,1,0,0,0,.71.95A7.87,7.87,0,0,1,116.46,97a1,1,0,0,0,1,.71,1,1,0,0,0,1-.71,7.85,7.85,0,0,1,5.18-5.18,1,1,0,0,0,.7-.95A1,1,0,0,0,123.55,89.94Zm-6.14,4.36a9.71,9.71,0,0,0-3.4-3.4,9.79,9.79,0,0,0,3.4-3.4,10,10,0,0,0,3.4,3.4A9.88,9.88,0,0,0,117.41,94.3Z"
            ></path>
            <path
              d="M31.21,81.59a1,1,0,0,0-1-.71,1,1,0,0,0-.95.71,5.31,5.31,0,0,1-3.52,3.51,1,1,0,0,0-.7,1,1,1,0,0,0,.7,1,5.32,5.32,0,0,1,3.52,3.52,1,1,0,0,0,.95.7,1,1,0,0,0,1-.7A5.33,5.33,0,0,1,34.72,87a1,1,0,0,0,.71-1,1,1,0,0,0-.71-1A5.31,5.31,0,0,1,31.21,81.59Zm-1,6.37a7.15,7.15,0,0,0-1.9-1.9,7.3,7.3,0,0,0,1.9-1.9,7.46,7.46,0,0,0,1.9,1.9A7.3,7.3,0,0,0,30.25,88Z"
            ></path>
            <path
              d="M26.36,20.08a1,1,0,0,0-1,.71,8.69,8.69,0,0,1-5.75,5.75,1,1,0,0,0-.71,1,1,1,0,0,0,.71.95,8.68,8.68,0,0,1,5.75,5.76,1,1,0,0,0,1.92,0,8.7,8.7,0,0,1,5.75-5.76,1,1,0,0,0,.71-.95,1,1,0,0,0-.71-1,8.71,8.71,0,0,1-5.75-5.75A1,1,0,0,0,26.36,20.08Zm3.93,7.42a10.71,10.71,0,0,0-3.93,3.92,10.71,10.71,0,0,0-3.93-3.92,10.73,10.73,0,0,0,3.93-3.93A10.73,10.73,0,0,0,30.29,27.5Z"
            ></path>
          </g>
        </svg>

        <svg
          class="w-[20rem] md:block hidden right-[2%] absolute z-20 opacity-0 svg top-[30%]"
          fill="#919191"
          viewBox="0 0 128 128"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#919191"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title></title>
            <path
              d="M119.61,41.59a1,1,0,0,0,1.42,0l2.12-2.12a1,1,0,0,0,0-1.41,1,1,0,0,0-1.41,0l-2.13,2.12A1,1,0,0,0,119.61,41.59Z"
            ></path>
            <path
              d="M112.4,48.81a1,1,0,0,0-1.41,0l-42,42a1,1,0,0,0,1.41,1.42l42-42A1,1,0,0,0,112.4,48.81Z"
            ></path>
            <path
              d="M35.32,60.14a1,1,0,0,0,1.42,0L91.63,5.25a1,1,0,0,0-1.42-1.42L35.32,58.72A1,1,0,0,0,35.32,60.14Z"
            ></path>
            <path
              d="M86,57.91,67.17,76.75a1,1,0,0,0,1.41,1.42L87.42,59.33a1,1,0,0,0,0-1.42A1,1,0,0,0,86,57.91Z"
            ></path>
            <path
              d="M88.57,22.38a1,1,0,0,0-1.41,0L50,59.56A1,1,0,0,0,51.39,61L88.57,23.79A1,1,0,0,0,88.57,22.38Z"
            ></path>
            <path
              d="M109.43,65A1,1,0,0,0,108,65L59.83,113.2a31.61,31.61,0,1,1-44.7-44.7L61.62,22a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L13.72,67.08a33.61,33.61,0,1,0,47.53,47.53l48.18-48.18A1,1,0,0,0,109.43,65Z"
            ></path>
            <path
              d="M71.37,12.26l5.55-5.55a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L70,10.85a1,1,0,1,0,1.42,1.41Z"
            ></path>
            <path
              d="M21.11,107.22a24.25,24.25,0,1,0,0-34.29A24.17,24.17,0,0,0,21.11,107.22ZM38.26,67.84a22.24,22.24,0,1,1-15.73,6.51A22.18,22.18,0,0,1,38.26,67.84Z"
            ></path>
            <path
              d="M106.73,23h0l3.42-3.42a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L103,23.93,63.12,63.8a1,1,0,0,0,1.41,1.42Z"
            ></path>
            <path
              d="M22.29,84.7a2.56,2.56,0,1,1,0,3.62,1,1,0,0,0-1.41,1.41,4.56,4.56,0,1,0,0-6.45,1,1,0,0,0,0,1.42A1,1,0,0,0,22.29,84.7Z"
            ></path>
            <path
              d="M41.24,106a6.16,6.16,0,1,0-.59-12.29,1,1,0,1,0,.19,2,4.16,4.16,0,1,1-2.54,7.08,1,1,0,0,0-1.41,1.41A6.11,6.11,0,0,0,41.24,106Z"
            ></path>
            <path
              d="M46.19,86.59a6.13,6.13,0,0,0,3,.8A6.31,6.31,0,0,0,51.43,87,1,1,0,0,0,52,85.69a1,1,0,0,0-1.29-.58,4.16,4.16,0,1,1,.56-7.5,1,1,0,0,0,1-1.74,6.16,6.16,0,1,0-6.06,10.72Z"
            ></path>
            <path
              d="M20.13,31.19a5,5,0,1,0,5-5A5,5,0,0,0,20.13,31.19Zm8,0a3,3,0,1,1-3-3A3,3,0,0,1,28.13,31.19Z"
            ></path>
            <path
              d="M119.13,79.69a5,5,0,1,0-5-5A5,5,0,0,0,119.13,79.69Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,119.13,71.69Z"
            ></path>
            <path
              d="M97.46,92.86a3,3,0,1,0,3-3A3,3,0,0,0,97.46,92.86Zm4,0a1,1,0,1,1-1-1A1,1,0,0,1,101.46,92.86Z"
            ></path>
            <path
              d="M37.46,5.53a3,3,0,1,0,3,3A3,3,0,0,0,37.46,5.53Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,37.46,9.53Z"
            ></path>
            <path
              d="M36.63,24.69a3,3,0,1,0,3,3A3,3,0,0,0,36.63,24.69Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,36.63,28.69Z"
            ></path>
          </g>
        </svg>

        <div
          class="text-white w-full relative h-[140vh] flex justify-center tech"
        >
          <div class="flex flex-col justify-center w-full items-center">
            <div
              class="w-full relative flex-col flex gap-[1rem] container md:gap-[9rem] items-center mt-[2rem] justify-center"
            >
              <h1
                style="background-color: #111"
                class="md:text-[3rem] text-[2rem] p-1 relative z-20 atasText w-fit overflow-hidden font-bold"
              >
                Tech Stack
                <div class="Garissamping w-full"></div>
              </h1>
              <div class="w-full h-full buled-container absolute">
                <div
                  class="buled mx-auto sticky top-2 w-[60rem] object-cover overflow-hidden h-[60rem] rounded-full border border-white shadow-xl shadow-white"
                >
                  <div
                    class="black absolute z-10 duration-300 ease-in-out w-full h-full overlayMoon opacity-100"
                  ></div>
                  <div class="relative w-full h-full">
                    <img
                      class="absolute w-full h-full"
                      :src="src"
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
              </div>

              <!-- start content -->

              <div
                class="mt-[6rem] w-full flex justify-center flex-col items-center"
              >
                <h1
                  style="color: rgb(188, 188, 188); background-color: #111"
                  class="text-[2rem] p-1 relative z-20 atasText block font-semibold"
                >
                  Frontend Univers
                </h1>

                <div
                  class="grid mt-[4rem] grid-cols-2 gap-6 md:gap-[4rem] w-full md:grid-cols-4"
                >
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="jquery"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Jquery
                      </div>
                      <h3
                        class="tech-label backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Jquery
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 backdrop-blur font-light"
                      >
                        JavaScript library
                      </p>
                    </div>
                  </div>
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="vue.js"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Vue JS
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Vue JS
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        JavaScript Library
                      </p>
                    </div>
                  </div>
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="tailwindCss"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Tailwind
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Tailwind
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 backdrop-blur text-Tech font-light"
                      >
                        CSS Library
                      </p>
                    </div>
                  </div>
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="Bootstrap"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Bootstrap
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Bootstrap
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        CSS Library
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end cntent -->

              <!-- start content -->

              <div
                class="mt-[6rem] w-full flex justify-center flex-col items-center"
              >
                <h1
                  style="color: rgb(188, 188, 188); background-color: #111"
                  class="text-[2rem] atasText p-1 relative z-20 block font-semibold"
                >
                  Backend Univers
                </h1>

                <div
                  class="grid mt-[4rem] grid-cols-1 md:grid-cols-3 gap-6 md:gap-[4rem] w-full"
                >
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="php"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        PHP
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        PHP
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        Programming Language
                      </p>
                    </div>
                  </div>
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="laravel"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Laravel
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Laravel
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        PHP Framework
                      </p>
                    </div>
                  </div>

                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="mysql"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        mysql
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        mysql
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        Database
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end cntent -->
              <!-- start content -->

              <div
                class="mt-[6rem] w-full flex justify-center flex-col items-center"
              >
                <h1
                  style="color: rgb(188, 188, 188); background-color: #111"
                  class="text-[2rem] p-1 relative atasText z-20 block font-semibold"
                >
                  Tools Univers
                </h1>

                <div
                  class="grid mt-[4rem] grid-cols-2 md:grid-cols-4 gap-6 md:gap-[4rem] w-full"
                >
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="figma"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Figma
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Figma
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        Design
                      </p>
                    </div>
                  </div>
                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="git"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Git
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Git
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        Version Control
                      </p>
                    </div>
                  </div>

                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="vscode"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        VSCode
                      </div>
                      <h3
                        class="tech-label text-Tech backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        VSCode
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 text-Tech backdrop-blur font-light"
                      >
                        Code Editor
                      </p>
                    </div>
                  </div>

                  <div
                    class="techStackCard z-[60] relative items-center ease-in-out duration-300 flex flex-col flex-1"
                    @click="handleTech"
                    @mouseover="handleTech"
                    @mouseleave="handleTechClose"
                    slug="gitlab"
                    data-delay="0"
                  >
                    <div
                      class="text-center w-fit hover:scale-[1.4] cursor-pointer duration-300 ease-in-out"
                    >
                      <div
                        class="tech-circle w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-medium tracking-wide"
                      >
                        Gitlab
                      </div>
                      <h3
                        class="tech-label backdrop-blur text-sm font-light opacity-70 transition-colors duration-300"
                      >
                        Gitlab
                      </h3>
                      <p
                        class="text-xs text-gray-500 mt-1 backdrop-blur font-light"
                      >
                        Colaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end cntent -->
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-0 bg-white h-2 bottomSwipe text-white"
        ></div>
        <div class="h-[4rem]"></div>
      </div>

      <div class="w-full flex relative page-4 hidden z-40 h-fit justify-center">
        <div class="section-4 container h-[100vh]">
          <h1
            class="md:text-[6rem] text-[3rem] textProfile w-full flex justify-center"
          >
            <span>See</span>
            <span>My</span>
            <span>Profile</span>
          </h1>

          <div class="card-profile mt-[5rem]">
            <div
              class="flex md:w-[50rem] w-full !text-base shadow-lg flex-col border border-slate-300 rounded-lg bg-white"
            >
              <div class="w-full items-center p-2 flex">
                <div class="flex-1 flex gap-2">
                  <div
                    style="background-color: red"
                    class="bg-slate-600 block w-[1rem] h-[1rem] rounded-full"
                  ></div>
                  <div
                    style="background-color: rgb(230, 230, 93)"
                    class="bg-slate-600 block w-[1rem] h-[1rem] rounded-full"
                  ></div>
                  <div
                    style="background-color: rgb(0, 180, 0)"
                    class="bg-slate-600 block w-[1rem] h-[1rem] rounded-full"
                  ></div>
                </div>
              </div>
              <div class="p-2">
                <div class="flex-1 flex text-base bg-slate-200 text-slate-600">
                  <div class="bg-white flex gap-2 items-center p-2">
                    <span class="text-yellow-500">{}</span
                    ><span class="text-sm">Profile.json </span>
                  </div>
                </div>
                <a class="md:text-base lg:text-lg text-xs textJson">
                  <span> <span class="mr-[2rem]">1</span><span>{</span> </span>
                  <br />
                  <span>
                    <span class="mr-[2rem]">2</span>
                    <span class="text-blue-600"
                      >&nbsp;&nbsp;&nbsp;"Success"</span
                    >
                    <span class="text-bold">: </span>
                    <span class="text-pink-600">True,</span>
                  </span>
                  <br />
                  <span>
                    <span class="mr-[2rem]">3</span>
                    <span class="text-blue-600">&nbsp;&nbsp;&nbsp;"Name"</span>
                    <span class="text-bold">: </span>
                    <span class="text-brown-600 text-[#A52A2A]"
                      >"Mochamad Galih Sampoerna",</span
                    >
                  </span>
                  <br />
                  <span>
                    <span class="mr-[2rem]">4</span>
                    <span class="text-blue-600"
                      >&nbsp;&nbsp;&nbsp;"date_of_birth"</span
                    >
                    <span class="text-bold">: </span>
                    <span class="text-brown-600 text-[#A52A2A]"
                      >"21-02-2007",</span
                    >
                  </span>
                  <br />
                  <span>
                    <span class="mr-[2rem]">5</span>
                    <span class="text-blue-600"
                      >&nbsp;&nbsp;&nbsp;"residence"</span
                    >
                    <span class="text-bold">: </span>
                    <span class="text-brown-600 text-[#A52A2A]"
                      >"Cimahi, Jawabarat, Indonesia",</span
                    >
                  </span>
                  <br />

                  <!-- Kontakkkk -->
                  <span>
                    <span class="mr-[2rem]">6</span>
                    <span class="text-blue-600"
                      >&nbsp;&nbsp;&nbsp;"Contact"</span
                    >
                    <span class="text-bold">: </span>
                    <span class="text-brown-600"
                      >{
                      <!-- konten -->
                      <br />
                      <span>
                        <span class="mr-[2rem]">7</span>
                        <span class="text-blue-600"
                          >&nbsp; &nbsp;&nbsp;&nbsp;"Email"</span
                        >
                        <span class="text-bold">: </span>
                        <span class="text-brown-600 text-[#A52A2A]"
                          >"mohtegqr071@gmail.com",</span
                        >
                      </span>
                      <br />
                      <span>
                        <span class="mr-[2rem]">8</span>
                        <span class="text-blue-600"
                          >&nbsp; &nbsp;&nbsp;&nbsp;"Phone"</span
                        >
                        <span class="text-bold">: </span>
                        <span class="text-brown-600 text-[#A52A2A]"
                          >"+62 85720172658",</span
                        >
                      </span>

                      <br />
                      <span> <span class="mr-[2rem]">9</span></span>
                      &nbsp;},</span
                    >
                  </span>

                  <!-- end contak -->
                  <br />

                  <span>
                    <span class="mr-[2rem]">10</span>
                    <span class="text-blue-600">&nbsp;&nbsp;&nbsp;"hobby"</span>
                    <span class="text-bold">: </span>
                    <span class="text-brown-600 text-[#A52A2A]"
                      ><span class="text-slate-500">[</span>
                      "Games","Code","Footbal"
                      <span class="text-slate-500">]</span>
                      ,</span
                    >
                  </span>
                  <br />
                  <span>
                    <span class="mr-[2rem]">11</span>
                    <span class="text-blue-600"
                      >&nbsp;&nbsp;&nbsp;"Language"</span
                    >
                    <span class="text-bold">: </span>
                    <span class="text-brown-600 text-[#A52A2A]">
                      <span class="text-slate-600"> [ </span>
                      "Indonesia","English","Sundanese"

                      <span class="text-slate-600"> ] </span>
                      ,
                    </span>
                  </span>

                  <br />
                  <span>
                    <span class="mr-[2rem]">12</span>
                    <span class="text-blue-600"
                      >&nbsp;&nbsp;&nbsp;"last_education"</span
                    >
                    <span class="text-bold">: </span>
                    <span class="text-brown-600 text-[#A52A2A]"
                      >SMK TI Pembangunan Cimahi (RPL),</span
                    >
                  </span>
                  <br />
                  <span> <span class="mr-[2rem]">13</span><span>}</span> </span>
                </a>
              </div>
            </div>
          </div>

          <!-- end card profile -->

          <div
            class="flex mt-[5rem] md:justify-end md:flex-row w-full flex-col"
          >
            <!-- card gede -->
            <div class="md:flex hidden flex-col">
              <div
                class="border-2 opacity-0 flex flex-col justify-center bg-white z-10 h-[13rem] relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
              ></div>

              <div
                class="border-2 hidden sm:hidden md:flex mr-[3rem] flex-col justify-center bg-white z-10 h-[13rem] gede pengalaman relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
              >
                <h1 class="text-2xl font-semibold">
                  Game Development with Construct
                  <br />
                  <span class="text-xl text-slate-600 font-semibold"
                    >2023-2024</span
                  >
                </h1>

                <a
                  class="text-slate-600 max-w-[28rem] block mt-6 text-base font-semibold"
                  >Here I started to learn about simple game development.</a
                >
              </div>
              <!-- gap -->
              <div
                class="border-2 opacity-0 flex flex-col justify-center bg-white z-10 h-[13rem] relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
              ></div>

              <div
                class="border-2 hidden sm:hidden md:flex mr-[3rem] flex-col justify-center bg-white z-10 h-[13rem] gede pengalaman relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
              >
                <h1 class="text-2xl font-semibold">
                  PT Pesat aghni
                  <br />
                  <span class="text-xl text-slate-600 font-semibold"
                    >2024-2025</span
                  >
                </h1>

                <a
                  class="text-slate-600 max-w-[28rem] block mt-6 text-base font-semibold"
                  >Here I learned about industry skills, especially website
                  development, such as using APIs and more.</a
                >
              </div>
            </div>

            <!-- card mobile -->
            <div class="flex relatvie h-fit gap-3 p-2">
              <div
                style="background-color: rgb(87, 63, 63)"
                class="w-2 rounded-full garisPengalaman h-[66rem]"
              >
                a
              </div>
              <div class="flex flex-col gap-[3rem]">
                <!-- KONTEN -->
                <div
                  class="border-2 flex flex-col justify-center bg-white z-10 h-[13rem] pengalaman relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
                >
                  <h1 class="text-2xl font-semibold">
                    SMK TI Pembangunan Cimahi (RPL)
                    <br />
                    <span class="text-xl text-slate-600 font-semibold"
                      >2022-2025</span
                    >
                  </h1>

                  <a
                    class="text-slate-600 max-w-[28rem] block mt-6 text-base font-semibold"
                    >This is where I started to hone my programming skills, from
                    basic logic to complex logic.</a
                  >
                </div>
                <div
                  class="border-2 md:hidden flex flex-col justify-center bg-white z-10 h-[13rem] pengalaman relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
                >
                  <h1 class="text-2xl font-semibold">
                    Game Development with Construct
                    <br />
                    <span class="text-xl text-slate-600 font-semibold"
                      >2023-2024</span
                    >
                  </h1>

                  <a
                    class="text-slate-600 max-w-[28rem] block mt-6 text-base font-semibold"
                    >Here I started to learn about simple game development.</a
                  >
                </div>
                <div class="md:flex hidden z-10 h-[13rem]"></div>
                <div
                  class="border-2 flex flex-col justify-center bg-white z-10 h-[13rem] pengalaman relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
                >
                  <h1 class="text-2xl font-semibold">
                    Game Development with javascript
                    <br />
                    <span class="text-xl text-slate-600 font-semibold"
                      >2024-2024</span
                    >
                  </h1>

                  <a
                    class="text-slate-600 max-w-[28rem] block mt-6 text-base font-semibold"
                    >The learning here is a continuation of the previous
                    learning but here it uses javascript (canvas).</a
                  >
                </div>

                <div
                  class="border-2 md:hidden opacity-100 flex flex-col justify-center bg-white z-10 h-[13rem] pengalaman relative border-black rounded-xl border-b-4 p-2 shadow-2xl"
                >
                  <h1 class="text-2xl font-semibold">
                    PT Pesat aghni
                    <br />
                    <span class="text-xl text-slate-600 font-semibold"
                      >2024-2025</span
                    >
                  </h1>

                  <a
                    class="text-slate-600 max-w-[28rem] block mt-6 text-base font-semibold"
                    >Here I learned about industry skills, especially website
                    development, such as using APIs and more.</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="page-5 text-[#dedede] hidden items-center justify-center bg-[#1a1a1a] w-full h-[100vh]"
      >
        <div class="flex flex-col">
          <h1 class="text-[4rem] inline-block text-center">
            <span class="textThere inline-block left">Hei,</span
            ><span class="textThere inline-block right"> there</span>
          </h1>
          <div class="textBawah">
            <a class="text-[1rem] md:text-[3rem] block mt-2 text-center">
              Sometimes in ancient literature, it’s said that humans are meant
              to connect with one another. So if you’d like to chat, share
              ideas, or start a project together — feel free to reach out!</a
            >
            <div class="w-full flex justify-center mt-[6rem]">
              <router-link
                to="emailMe"
                class="border-white border-2 w-fit p-4 hover:bg-[#e3e3e3] hover:border-[#e3e3e3] duration-300 ease-in-out hover:text-black font-semibold"
                >Get In Touch!</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
