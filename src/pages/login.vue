<template>
  <div class="flex text-md justify-center items-center h-screen">
    <div
      class="flex text-gray-500 shadow-login rounded-lg p-5 space-y-5 mx-5 flex-col w-full md:w-2/4 md:max-w-xl"
    >
      <h2 class="font-bold text-primary-pressed">Masuk</h2>
      <InputField v-model="email" placeholder="Email" />
      <InputField v-model="password" isPassword placeholder="password" />
      <label class="text-sm flex justify-end text-primary-pressed"
        >Lupa Password ?
      </label>
      <Button @pressed="login" title="Masuk" />
      <hr class="bg-gray-200 h-0.5 mx-10" />
      <div class="flex space-x-2 justify-center">
        <label class="text-s m">Belum punya akun? </label>
        <ButtonLabel title="Daftar Sekarang" />
      </div>
      <a>{{a}}</a>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "../components/Button.vue";
import InputField from "../components/InputField.vue";
import ButtonLabel from "../components/ButtonLabel.vue";
import { useFetch } from '@vueuse/core'
import { ref } from "vue";

const email = ref("");
const password = ref("");
let a : any = ref("aaa")
const login = async () => {
  // if(email.value.length < 1)
  // {
  //   return
  // }
  // if(password.value.length < 1)
  // {
  //   return
  // }
  
  // console.log('start')
  
  const { data } = await useFetch(url, { timeout: 1000 }).post({
    email: email.value,
    password: password.value
  }).json();
  
  console.log(data.value)



};
</script>
