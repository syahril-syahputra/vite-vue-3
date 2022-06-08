<template>
  <div class="h-screen bg-[#f8fafc]">
    <div class="tv text-white pb-5 pt-4 px-4 rounded-b-[40%] flex  justify-between">
      <font-awesome-icon size="md" :icon="['fa', 'bars']" />
      <label class="text-2xl">ngmusic</label>
      <font-awesome-icon size="md" :icon="['fa', 'search']" />
    </div>
    <div class="my-6 justify-center flex">
        <label class="text-[14px] text-[#334155]">Search Result For : </label>
        <label class="text-[14px] font-bold text-[#7b34dd]">Json Mraz</label>
    </div>
    <ul>
        <li>
        </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
.tv {
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
}
</style>
