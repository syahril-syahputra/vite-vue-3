<template>
<div class="flex flex-col bg h-screen w-full">
    <div class="flex justify-center items-center flex-1 font-sans text-lg flex-col text-white">
       <font-awesome-icon  size="2xl" :icon="['fa', 'music']" />
       <label>ngmusic</label>
    </div>
    <di class="flex flex-col p-5 space-y-2">
        <InputField placeholder="Artist / Album / Title" />
        <button class="p-3 rounded-full bg-white bg-opacity-20 text-white font-sans">Search</button>
    </di>
</div>
</template>
<script setup lang="ts">
import InputField from '../components/InputField.vue'
import Button from '../components/Button.vue'
</script>
<style scope>
.bg{
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
}
</style>