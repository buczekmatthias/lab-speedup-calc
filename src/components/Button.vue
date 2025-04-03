<template>
  <button
    class="w-full bg-transparent border border-solid rounded-md p-3 duration-150"
    :class="disabled ? 'text-slate-50/30 border-slate-300/10 cursor-not-allowed' : 'cursor-pointer border-slate-300/30 hover:bg-slate-400/5 text-slate-50'"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  disabled: { type: Boolean, default: false },
});
</script>
