<template>
  <label class="flex flex-col gap-1">
    <span class="mb-0.5">
      {{ label }}
    </span>
    <input
      v-model="model"
      type="number"
      @keypress="isNumber"
    />
  </label>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  label: String,
  max: Number,
});

const model = defineModel();

const isNumber = (e) => {
  const allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (!allowed.includes(e.key)) {
    e.preventDefault();
  }
};

if (props.max) {
  watch([model], () => (model.value = model.value > props.max ? props.max : model.value));
}
</script>
