<template>
<div class="flex flex-col h-screen w-full" :style="`background-image: linear-gradient(153deg, ${colorSet}, ${colorSet2} 100%);`">
    <div class="flex justify-center items-center flex-1 font-sans space-y-2 flex-col text-white">
       <font-awesome-icon  class="text-3xl" :icon="['fa', 'music']" />
       <label class="text-lg">ngmusic</label>
    </div>
    <li class="flex flex-col p-5 space-y-2">
        <InputField v-model="text" placeholder="Artist / Album / Title" />
        <button @click="find" class="p-3 hover:opacity-70 active:opacity-95 rounded-full bg-white bg-opacity-20 text-white font-sans">Search</button>
    </li>
</div>
</template>
<script setup lang="ts">
import InputField from '../components/InputField.vue'
import Button from '../components/Button.vue'
import {useColor} from '../store/useColor.ts'
import {ref} from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
const main = useColor()
const {colorSet, colorSet2} = storeToRefs(main);
const router = useRouter();
const text = ref("")
const find = () => {
    if(text.value === "")
    {
        alert("Masukan Nama Artis / Album / Title")
        return
    }
    router.push({ path: '/search', query: { s: text.value } })
}
</script>
