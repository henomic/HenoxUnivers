<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const Isroute = useRoute();
let isClick = ref(false);

function click() {
  console.log("wkkwkwk");

  if (!isClick.value) {
    isClick.value = true;
    console.log("buka");
    console.log(isClick.value);
  } else {
    isClick.value = false;
    console.log("tutup");
  }
}
</script>

<template>
  <header
    class="bg-[#111] flex items-center fixed top-0 justify-between z-[99] shadow-xl border-b-[0.1px] border-[#545454] w-full text-[#cfcfcf] font-semibold text-[1.5rem] p-5"
  >
    <a>Henox|Univers</a>
    <a
      @click="click"
      class="text-white md:hidden flex flex-col gap-1 relative z-[81]"
    >
      <div class="w-[1rem] h-[0.1rem] bg-white"></div>
      <div class="w-[1rem] h-[0.1rem] bg-white"></div>
      <div class="w-[1rem] h-[0.1rem] bg-white"></div>
    </a>
    <div class="text-base md:flex hidden gap-3">
      <router-link
        :class="[
          'hover:text-white hover:border-b hover:border-white transition-all duration-500 ease-in-out pb-2',
          Isroute.path === '/'
            ? '!text-white !border-b !pb-2 !border-white'
            : '',
        ]"
        :to="{ path: '/', query: { downfall: true } }"
        >Home</router-link
      >
      <router-link
        :class="[
          'hover:text-white hover:border-b hover:border-white transition-all duration-500 ease-in-out pb-2',
          Isroute.path === '/emailMe'
            ? '!text-white !border-b !pb-2 !border-white'
            : '',
        ]"
        :to="{ path: '/emailMe', query: { downfall: true } }"
        >Contact</router-link
      >
    </div>
    <div
      :class="[
        'top-5 right-5 md:hidden bulat bg-[#111] fixed z-[80]  rounded-full  w-5 aspect-square duration-[1.3s] ease-in-out transition-all',
        isClick ? 'origin-center scale-[200]' : 'scale-100',
      ]"
    ></div>

    <div
      style="transform-origin: top right"
      :class="[
        `fixed buledMenu md:hidden  inset-1 duration-1000 top-[25%] left-1/2 -translate-x-1/2   z-[81] h-[100vh] overflow-hidden transition-all ease-in-out    flex flex-col gap-3 justify-center items-center`,
        isClick ? `cursor-auto  scale-100 ` : `cursor-none opacity-0 scale-0 `,
      ]"
    >
      <router-link
        :to="{ path: '/', query: { downfall: true } }"
        :class="[
          Isroute.path === '/'
            ? `text-white scale-105   border-b border-white `
            : `hover:text-white hover:scale-105 cursor-pointer text-[#7a7a7a] hover:border-b transition-all duration-300 hover:border-white`,
        ]"
        >Home</router-link
      >
      <router-link
        to="emailMe"
        :class="[
          Isroute.path === '/emailMe'
            ? `text-white scale-105   border-b border-white `
            : `hover:text-white hover:scale-105 cursor-pointer text-[#7a7a7a] hover:border-b transition-all duration-300 hover:border-white`,
        ]"
        >Contact</router-link
      >
    </div>
  </header>
</template>
