<template>
  <div class="flex text-md justify-center items-center h-screen">
    <CenteredBox>
      <Header2Vue title="Masuk" />
      <InputField v-model="email" placeholder="Email" />
      <InputField v-model="password" isPassword placeholder="password" />
      <label class="text-sm flex justify-end text-primary-pressed">Lupa Password ?
      </label>
      <Button :isLoading="loginProgress.isLoading" @pressed="login" title="Masuk" />
      <HR />
      <div class="flex space-x-2 justify-center">
        <label class="text-s m">Belum punya akun?  {{loginProgress.error}}</label>
        <ButtonLabel  @click="" title="Daftar Sekarang" />
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
import useFetch from "../composables/useFetch";
import { ref, reactive, toRef } from "vue";
import HR from "../components/HR.vue";
import useBaseUrl from "../composables/useBaseUrl";
const email = ref("syahril.dev@gmail.com");
const password = ref("12345678");

const loading = ref(false)
const loginProgress = reactive({
  isLoading : false,
  error : '',
  response : {},
})





const login = async () => {
  const option = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email : email.value, password : password.value})
  }
  const {response, error, isFetching} = useFetch('/logsin', option)
  loading.value = isFetching.value
  // loginProgress.isLoading = isFetching
  // loginProgress.error = error
  loginProgress.response = response
  console.log(response)
  // if (statusCode.value === 200) {
  //   alert("login sukses")
  //   return
  // }
  // alert("Gagal Login")
};
</script>
