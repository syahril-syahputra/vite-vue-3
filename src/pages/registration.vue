<template>
  <div class="flex text-md justify-center items-center h-screen">
    <CenteredBox>
      <Header2Vue title="Daftar Sekarang" />
      <div class=" flex flex-col space-y-5">
      <InputField v-model="data.namaBelakang" placeholder="Nama Depan" />
      <InputField v-model="data.namaDepan" placeholder="Nama Belakang" />
      <InputField v-model="data.email" placeholder="Email" />
      </div>
      <Button @pressed="next" title="Selanjutnya" />
      <HR />
      <div class="flex space-x-2 justify-center">
        <label class="text-s m">Sudah punya akun? </label>
        <ButtonLabel @click="" title="Masuk" />
      </div>
    </CenteredBox>
  </div>
</template>
<script setup lang="ts">
import CenteredBox from "../components/CenteredBox.vue";
import Button from "../components/Button.vue";
import InputField from "../components/InputField.vue";
import Header2Vue from "../components/Header2.vue";
import ButtonLabel from "../components/ButtonLabel.vue";

import { useFetch } from '@vueuse/core'
import { reactive } from "vue";
import HR from "../components/HR.vue";
const data = reactive({
    namaDepan : '',
    namaBelakang : '',
    email : '',
    password : '',
    confirmPassword : ''
});
const next = async () => {
//   const url = "http://api.lucy.test/login";
//   const { data, statusCode } = await useFetch(url, { timeout: 5000 }).post({
//     email: email.value,
//     password: password.value
//   }).json();
//   if (statusCode.value === 200) {
//     alert("login sukses")
//     return
//   }
//   alert("Gagal Login")
};
</script>
