<template>
  <div class="flex flex-col gap-3">
    <p class="page-header">Speed-up slots</p>
    <div
      class="border border-solid border-slate-300/30 rounded-lg grid grid-cols-2 gap-2 p-2"
      v-for="(lab, i) in speedUpSetup"
      :key="i"
    >
      <Select
        label="Speed-up"
        :options="getSpeedUpOptions()"
        v-model="speedUpSetup[i][0]"
      />
      <Select
        label="Speed-up"
        :options="getDurationOptions()"
        v-model="speedUpSetup[i][1]"
        :disabled="speedUpSetup[i][0] === 1"
      />
    </div>
  </div>
</template>

<script setup>
import Select from "@/components/Select.vue";

const speedUpSetup = defineModel();

const getSpeedUpOptions = () =>
  new Map([
    [1, 1],
    [1.5, 1.5],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
  ]);

const getDurationOptions = () =>
  new Map([
    [0, "1h"],
    [1, "8h"],
    [2, "24h"],
  ]);
</script>
