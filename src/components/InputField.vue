<template>
    <input :placeholder="props.placeholder" class="border shadow-sm rounded-md border-gray-200 px-3 py-2 outline-none" :type="isPassword ? 'password' : 'text'" />

</template>
<script setup lang="ts">
const props = defineProps({

    placeholder : {
        type : String,
        default : '',
        required : true
    },
    isPassword:{
        type:Boolean,
        default:false
    }
})

</script>