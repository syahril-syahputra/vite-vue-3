<template>
  <h2 class="text-center p-2 text-gray-700">Ubah Warna</h2>
  <dic class="grid grid-cols-4 gap-3 p-2">
    <div @click="change('#7c2d12')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#7c2d12]"></div>
    <div @click="change('#84cc16')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#84cc16]"></div>
    <div @click="change('#22c55e')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#22c55e]"></div>
    <div @click="change('#0ea5e9')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#0ea5e9]"></div>
    <div @click="change('#3b82f6')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#3b82f6]"></div>
    <div @click="change('#4f46e5')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#4f46e5]"></div>
    <div @click="change('#6d28d9')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#6d28d9]"></div>
    <div @click="change('#f472b6')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#f472b6]"></div>
    <div @click="change('#be185d')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#be185d]"></div>
    <div @click="change('#164e63')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#164e63]"></div>
    <div @click="change('#f87171')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#f87171]"></div>
    <div @click="change('#fed7aa')" class="h-30 hover:opacity-50 cursor-pointer aspect-square bg-[#fed7aa]"></div>
  </dic>
  <div class="p-5 rounded-full m-2 text-white text-center" :style="`background-image: linear-gradient(153deg, ${colorSet}, ${colorSet2} 100%);`">
    Current Color
  </div>
  <div class="flex px-2 mt-5 flex-row items-center justify-between">
    <label @click="router.go(-1)" class="text-red-700 font-bold">Back</label>
  <button class="bg-gray-400 rounded-lg text-white cursor-pointer px-5 py-2" @click="main.reset()">Reset Color</button>
  </div>
</template>
<script setup lang="ts">

import {useColor} from '../store/useColor.ts'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
const router = useRouter();

const main = useColor()
const {colorSet, colorSet2} = storeToRefs(main);

const change = (color : string) => {
    main.change(color, color)
};
</script>
