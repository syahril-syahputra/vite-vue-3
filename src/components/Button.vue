<template>
    <button @click="$emit('pressed')" class="bg-primary-main shadow-button py-3 rounded-lg text-white font-bold text-sm hover:bg-primary-hover active:bg-primary-pressed">{{title}}</button>
</template>
<script setup lang="ts">
defineEmits({
    pressed: () => {
       return true
    }
});
defineProps({
    title : {
        type : String,
        default : 'Button',
        required : true
    }
})
</script>

