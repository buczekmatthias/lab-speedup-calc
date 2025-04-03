<template>
  <div class="w-full flex flex-col gap-3">
    <p class="page-header">Calculate end of lab</p>
    <div class="flex flex-col gap-4 w-full self-center border border-solid border-slate-300/30 rounded-lg p-2">
      <div class="grid grid-cols-2 app:grid-cols-4 gap-4">
        <Input
          label="Days"
          v-model="days"
        />
        <Input
          label="Hours"
          v-model="hours"
          :max="23"
        />
        <Input
          label="Minutes"
          v-model="minutes"
          :max="59"
        />
        <Select
          label="Speed-up"
          :options="getSpeedUpOptions()"
          v-model="speedup"
        />
      </div>
      <p>Lab end: {{ eta ? `${eta} (${etaInDiff})` : "NaN" }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { months } from "@/data/months";

import Input from "@/components/Input.vue";
import Select from "@/components/Select.vue";

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const speedup = ref(1);
const eta = ref("");
const etaInDiff = ref("");

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

const calculateDate = () => {
  etaInDiff.value = "";
  if (days.value === 0 && hours.value === 0 && minutes.value === 0) {
    eta.value = "";
    return;
  }

  const diff = (0 + days.value * 24 * 60 + hours.value * 60 + minutes.value) / speedup.value;

  const d = new Date(new Date(Date.now()).getTime() + diff * 60000);

  eta.value = `${months[d.getMonth()]} ${twoDigits(d.getDate())}, ${d.getFullYear()} - ${twoDigits(d.getHours())}:${twoDigits(d.getMinutes())}`;

  const now = new Date(Date.now());
  const diffTime = Math.abs(d - now);
  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diffTime / (1000 * 60 * 60)) - diffDay * 24;
  const diffMin = Math.floor(diffTime / (1000 * 60)) - diffDay * 1440 - diffHour * 60;

  const t = [];
  if (diffDay > 0) t.push(`${diffDay}d`);
  if (diffHour > 0) t.push(`${diffHour}h`);
  if (diffMin > 0) t.push(`${diffMin}m`);

  etaInDiff.value = t.join(" ");
};

const twoDigits = (s) => ("0" + s).slice(-2);

watch([days, hours, minutes, speedup], calculateDate);

watch([days], () => (days.value = days.value < 0 || days.value === "" ? 0 : days.value));
watch([hours], () => (hours.value = hours.value < 0 || hours.value === "" ? 0 : hours.value));
watch([minutes], () => (minutes.value = minutes.value < 0 || minutes.value === "" ? 0 : minutes.value));
</script>
