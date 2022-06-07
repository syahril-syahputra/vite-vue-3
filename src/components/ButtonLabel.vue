<template>
    <label class="text-primary-pressed font-bold text-sm hover:text-primary-main cursor-pointer">{{props.title}}</label>
</template>
<script setup lang="ts">
const props = defineProps({
    title : {
        type : String,
        default : 'Button',
        required : true
    }
})
</script>