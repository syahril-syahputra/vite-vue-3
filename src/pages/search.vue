<template>
  <div class="h-screen bg-[#f8fafc] flex flex-col">
    <div
      v-if="searchBox"
      class="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center space-y-3 px-5 bg-opacity-70 bg-black z-50"
    >
      <label class="text-white text-center text-2xl font-bold">Search</label>
      <InputField v-model="search" placeholder="Artist / Album / Title" />

      <button @click="find" class=" rounded-full text-white py-3" :style="`background-image: linear-gradient(98deg, ${colorSet}, ${colorSet2});`">Search</button>
    </div>
    <div class="header text-white pb-4 pt-4 px-4 rounded-b-[40%] flex justify-between" :style="`background-image: linear-gradient(153deg, ${colorSet}, ${colorSet2} 100%);`">
      <font-awesome-icon @click="router.push('/swatcher')" class="text-[14px]" :icon="['fa', 'bars']" />
      <label class="text-[16]">ngmusic</label>
      <font-awesome-icon @click="show" class="text-[14px]" :icon="['fa', 'search']" />
    </div>
    <div class="my-6 justify-center flex">
      <label class="text-[14px] text-[#334155]">Search Result For : </label>
      <label class="text-[14px] font-bold" :style="` color :${colorSet}`">{{ search }}</label>
    </div>
    <div v-show="data.isFetching" class="flex flex-row justify-center items-center space-x-2">
      <div
        style="border-top-color: transparent"
        class="w-4 h-4 border-4  border-solid rounded-full animate-spin"  :style="`border-color:${colorSet}`"
      ></div>
      <label  :style="` color :${colorSet}`">Loading</label>
    </div>
    <ul v-show="!data.isFetching" class="overflow-y-scroll flex-1">
      <label
        class="text-sm text-gray-500 text-center block"
        v-if="data.listdata.resultCount === 0"
        >Data Tidak Di Temukan</label
      >
      <ListCard v-for="item in data.listdata.results" :item="item" />

      <label
        class="m-auto text-slate-700 block bg-gray-300 whitespace-nowrap w-min py-3 px-10 rounded-full"
        v-if="data.listdata.resultCount !== 0"
        >Load More</label
      >
    </ul>

    <!-- <button @click="find">Coba</button> -->
  </div>
</template>
<script setup lang="ts">
import InputField from "../components/InputField.vue";
import useFetch from "../composables/useFetch.ts";
import ListCard from "../components/ListCard.vue";
import {useColor} from '../store/useColor.ts'
import { storeToRefs } from 'pinia'
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const main = useColor()
const {colorSet, colorSet2} = storeToRefs(main);
onMounted(() => {
  search.value = route.query.s;
  find();
});

const search = ref("");
const searchBox = ref(false);
const data = reactive({
  listdata: {},
  isFetching: true,
});

const limit = 10;

const find = async () => {
  const { response, error, isFetching } = useFetch(
    `/search?term=${search.value}&limit=${limit}`,
    {
      method: "POST",
      mode: "cors",
    }
  );
  data.isFetching = isFetching
  searchBox.value = false;

  data.listdata = response;
};

function show() {
  searchBox.value = true;
}
</script>
<style>
.header {
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
}
</style>
