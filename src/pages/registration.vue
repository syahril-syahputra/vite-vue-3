<template>
    <div class="flex text-md justify-center items-center h-screen">
        <CenteredBox>
            <Header2Vue title="Daftar Sekarang" />
            <transition name="fade" mode="out-in">
                <div v-if="page === 1" class=" flex flex-col space-y-5">
                    <InputField v-model="data.namaBelakang" placeholder="Nama Depan" />
                    <InputField v-model="data.namaDepan" placeholder="Nama Belakang" />
                    <InputField v-model="data.email" placeholder="Email" />
                </div>
                <div v-else class=" flex flex-col space-y-5">
                    <InputField v-model="data.telepon" placeholder="Nomor Telepon" />
                    <InputField v-model="data.password" placeholder="Password" isPassword />
                    <InputField v-model="data.confirmPassword" placeholder="Konfirmasi Password" isPassword />
                </div>
            </transition>
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
import { reactive, ref } from "vue";
import HR from "../components/HR.vue";
const page = ref(1)
const data = reactive({
    namaDepan: '',
    namaBelakang: '',
    email: '',
    telepon: '',
    password: '',
    confirmPassword: ''
});
const next = async () => {
    if (data.namaDepan.length < 1 || data.namaBelakang.length < 1 || data.email.length < 1) {
        alert("Semua field harus diisi")
        return
    }
    if (page.value === 1) {
        page.value = 2
        return
    }
    if (data.telepon.length < 1 || data.password.length < 1 || data.confirmPassword.length < 1) {
        alert("Semua field harus diisi")
        return
    }
    if(data.password !== data.confirmPassword){
        alert("Password tidak sama")
        return
    }
   
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
