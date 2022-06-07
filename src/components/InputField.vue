<template>
  <input
    :value="props.modelValue"
    v-model="data"
    :placeholder="props.placeholder"
    class="border shadow-sm rounded-md border-gray-200 px-3 py-2 outline-none"
    :type="isPassword ? 'password' : 'text'"
  />
</template>
<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["update:modelValue"]);
const data = computed({
  get() {
    return props.modelValue;
  },

  set(newValue) {
    emit("update:modelValue", newValue);
  },
});

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
    required: true,
  },
  isPassword: {
    type: Boolean,
    default: false,
  },
});
</script>
