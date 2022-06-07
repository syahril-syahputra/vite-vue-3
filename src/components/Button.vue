<template>
    <button class="bg-primary-main shadow-button py-3 rounded-lg text-white font-bold text-sm hover:bg-primary-hover active:bg-primary-pressed">{{props.title}}</button>
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