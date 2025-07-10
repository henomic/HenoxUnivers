<script setup>
import { useRoute } from "vue-router";
import { onMounted, getCurrentInstance, ref, watch, nextTick } from "vue";
import Header from "../template/header.vue";
import Footer from "../template/footer.vue";
import mailjs from "@emailjs/browser";
import { animateFooter } from "../../gsap/Footer.js";

let name = ref("Seseorang");
let smoother = null;
let email = ref("");
let pesan = ref("");
let isloading = ref(false);
let success = ref(false);
function send() {
  isloading.value = true;

  const params = {
    name: name.value,
    email: email.value,
    message: pesan.value,
    time: new Date().toLocaleString(),
  };
  console.log(params);

  mailjs
    .send("service_itwdjzk", "template_d5lmnhi", params, "y39sBZA_3JrrRzM4r")
    .then((result) => {
      success.value = true;
      setTimeout(() => {
        success.value = false;
      }, 3000);
    })
    .catch((err) => {
      "error", err;
    })
    .finally(() => {
      isloading.value = false;
      email.value = "";
      pesan.value = "";
    });
}

const { appContext } = getCurrentInstance();
const gsap = appContext.config.globalProperties.$gsap;
const ScrollSmoother = appContext.config.globalProperties.$ScrollSmoother;
const Typed = appContext.config.globalProperties.$Typed;
const SplitText = appContext.config.globalProperties.$SplitText;
const ScrollTrigger = appContext.config.globalProperties.$ScrollTrigger;

const Isroute = useRoute();
let isClick = ref(false);

function checkScroll() {
  if (smoother) {
    smoother.kill();
    smoother = null;
  }

  smoother = ScrollSmoother.create({
    wrapper: ".wrap",
    content: ".content",
    smooth: 5, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });
}

onMounted(() => {
  checkScroll();
  animateFooter(gsap, ScrollSmoother, Typed, SplitText, ScrollTrigger);
});
</script>
<template>
  <div class="wrap">
    <div class="content relative">
      <div
        class="bg-[#111] w-full md:h-[100vh] flex-col flex justify-center items-center"
      >
        <form
          @submit.prevent="send"
          class="container flex flex-col p-6 items-center justify-center"
        >
          <h1 class="text-[3rem] text-[#cfcfcf] font-bold">Let's Talk!</h1>
          <div class="flex md:gap-[4rem] md:flex-row w-full mt-[4rem] flex-col">
            <!-- section 1 -->
            <div class="md:max-w-[60%] gap-[4rem] flex flex-col w-full">
              <div class="input flex w-full flex-col">
                <h1 class="md:text-2xl text-xl text-[#cfcfcf]">
                  Whats Your Email?
                </h1>
                <input
                  v-model="email"
                  required
                  type="email"
                  placeholder="Example@gmail.com"
                  class="text-white mt-3 focus:outline-0 border-b border-white pb-4"
                />
              </div>
              <div class="input flex w-full flex-col">
                <h1 class="md:text-2xl text-xl text-[#cfcfcf]">
                  Whats Your Email?
                </h1>
                <textarea
                  v-model="pesan"
                  required
                  type="text"
                  placeholder="Hi Galih, We...."
                  class="text-white mt-3 resize-none focus:outline-0 border-b border-white pb-4"
                  id=""
                ></textarea>

                <button
                  :disabled="isloading"
                  type="submit"
                  :class="[
                    'block mt-[3rem] md:text-lg text-base duration-500 text-[#111]  font-bold   w-fit md:p-3 p-2 rounded-lg',
                    isloading
                      ? 'bg-[#e3e3e3]'
                      : 'bg-[#cfcfcf] cursor-pointer hover:scale-110',
                  ]"
                >
                  {{
                    isloading
                      ? "sending..."
                      : success
                      ? "Terkirim!"
                      : "Send Message!"
                  }}
                </button>
              </div>
            </div>
            <div
              class="flex-col md:mt-0 mt-[6rem] md:text-start flex gap-[1rem]"
            >
              <div class="flex flex-col">
                <h1 class="md:text-2xl text-lg font-bold text-[#ababab]">
                  Contact Details
                </h1>
                <p
                  class="md:text-lg mt-4 block text-base font-bold text-[#cfcfcf]"
                >
                  <router-link target="blank" to="+62 85720172658"
                    >+62 85720172658</router-link
                  >
                  <br />
                  <router-link target="blank" to="+62 85720172658"
                    >mochtegqr071@gmail.com</router-link
                  >
                </p>
              </div>
              <div class="flex flex-col">
                <h1 class="md:text-2xl text-lg font-bold text-[#ababab]">
                  Socials
                </h1>
                <p
                  class="md:text-lg mt-4 block text-base font-bold text-[#cfcfcf]"
                >
                  <a
                    href="https://www.instagram.com/rowjb_?igsh=MTEzdGpxcDU2cWtseQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                  <br />
                  <a
                    href="https://www.linkedin.com/in/mochamad-galih-sampoerna-844b9731b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >LinkedIn</a
                  >
                </p>
              </div>
              <div class="flex flex-col">
                <h1 class="md:text-2xl text-lg font-bold text-[#ababab]">
                  Location
                </h1>
                <p
                  class="md:text-lg mt-4 block text-base font-bold text-[#cfcfcf]"
                >
                  Cimahi, Jawabarat, Indonesia
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>
