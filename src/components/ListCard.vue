<template>
  <li class="flex flex-row m-4 rounded-md shadow-card p-4 bg0">
    <div class="relative">

        <font-awesome-icon class="absolute mx-auto my-auto left-0 top-0 bottom-0 right-0 text-white text-2xl"  :icon="['fa', 'play']" />
      <img class="w-[100px] h-[100px] mr-3 rounded-md" :src="item.artworkUrl100" alt="" />
    </div>
    <div class="flex flex-1 flex-col">
      <div class="flex flex-1 flex-col">
        <label class="text-[10px]">{{ item.artistName }}</label>
        <label class="text-[14px] font-bold">{{ item.trackName }}</label>
      </div>
      <div class="flex flex-row justify-between items-center">
        <label class="text-[10px] bg-[#10b981] rounded-full px-3 py-1 text-white">{{ item.primaryGenreName }}</label>
        <label class="text-[#f5b014] text-[12px]">
        <font-awesome-icon  :icon="['fa', 'dollar-sign']" />
        {{ item.trackPrice }}</label>
      </div>
    </div>
  </li>
</template>
<script setup lang="ts">
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
