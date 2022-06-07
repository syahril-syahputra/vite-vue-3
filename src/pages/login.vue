<template>
  <div class="flex text-md justify-center items-center h-screen">
    <div
      class="flex text-gray-500 shadow-login rounded-lg p-5 space-y-5 mx-5 flex-col w-full md:w-2/4 md:max-w-xl"
    >
      <h2 class="font-bold text-primary-pressed">Masuk</h2>
      <InputField placeholder="Email" />
      <InputField isPassword placeholder="password" />
      <label class="text-sm flex justify-end text-primary-pressed"
        >Lupa Password ?
      </label>
      <Button title="Masuk" />
      <hr class="bg-gray-200 h-0.5 mx-10" />
      <div class="flex space-x-2  justify-center">
        <label class="text-sm "
          >Belum punya akun?
        </label>
        <ButtonLabel title="Daftar Sekarang" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from "../components/Button.vue";
import InputField from "../components/InputField.vue";
import ButtonLabel from "../components/ButtonLabel.vue";
</script>
