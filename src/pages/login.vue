<template>
  <div class="flex text-md justify-center items-center h-screen">
    <CenteredBox>
      <Header2Vue title="Masuk" />
      <InputField v-model="email" placeholder="Email" />
      <InputField v-model="password" isPassword placeholder="password" />
      <label class="text-sm flex justify-end text-primary-pressed">Lupa Password ?
      </label>
      <Button @pressed="login" title="Masuk" />
      <HR />
      <div class="flex space-x-2 justify-center">
        <label class="text-s m">Belum punya akun? </label>
        <ButtonLabel @click="" title="Daftar Sekarang" />
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
import { ref } from "vue";
import HR from "../components/HR.vue";
const email = ref("eka@gmail.com");
const password = ref("password");
let a: any = ref("aaa")
const login = async () => {
  const url = "http://api.lucy.test/login";
  const { data, statusCode } = await useFetch(url, { timeout: 5000 }).post({
    email: email.value,
    password: password.value
  }).json();
  if (statusCode.value === 200) {
    alert("login sukses")
    return
  }
  alert("Gagal Login")
};
</script>
