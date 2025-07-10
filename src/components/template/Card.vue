<script setup>
defineProps({
  nama: {
    type: String,
    required: true,
  },
  penjelasan: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  pt: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="flex konten md:flex-row flex-col-reverse absolute insei-0 opacity-0 items-center md:gap-1 lg:gap-6 p-2 gap-[2rem] mt-[2rem]"
  >
    <div class="flex flex-col gap-[1.2rem]">
      <h1
        class="md:text-4xl text-2xl block text-start w-full font-bold text-[#cfcfcf]"
      >
        {{ nama }}
        <div
          class="w-[50%] bg-[#bcbcbc] garisBawahJudulApk h-[0.1rem] block mt-2"
        ></div>
      </h1>

      <div class="flex md:flex-col p-2 gap-2">
        <a
          class="md:text-lg text-sm block md:border-b md:pb-4 border-r md:border-r-0 md:pt-0 pr-2 border-white lg:max-w-[30rem] md:max-w-[26rem] max-w-[50%] text-[#cfcfcf] font-semibold"
          >{{ penjelasan }}</a
        >
        <a
          class="md:text-lg text-base block lg:max-w-[30rem] md:max-w-[26rem] max-w-[50%] text-[#cfcfcf] font-semibold"
        >
          Tech: <span class="text-xl">Laravel</span> <br />
          <span>{{ tech }}</span>
        </a>
      </div>
    </div>

    <div
      class="bg-white md:block hidden lg:h-[25rem] md:h-[25rem] w-1 mr-4 block garisSamping text-white"
    ></div>
    <div
      class="image lg:w-[42rem] md:w-[30rem] overflow-hidden w-[100%] bg-black relative aspect-video"
    >
      <img :src="src" class="w-full h-full object-cover absolute z-10" alt="" />
      <div class="bg-black/55 absolute w-full h-full block z-20"></div>
      <a
        class="lg:text-[4.7rem] p-4 md:text-[3rem] text-[2.5rem] absolute bottom-0 z-30 left-0 text-white"
        >{{ pt }}
      </a>
    </div>
  </div>
</template>
