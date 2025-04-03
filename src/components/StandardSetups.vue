<template>
  <div class="w-full flex flex-col gap-4">
    <p class="page-header">Standard setups</p>
    <div class="overflow-x-auto border border-solid border-slate-300/30">
      <table class="table-fixed min-w-full">
        <thead>
          <tr>
            <th colspan="5">Lab slot</th>
            <th colspan="3">Cell costs</th>
          </tr>
          <tr>
            <th
              v-for="(entry, i) in [1, 2, 3, 4, 5]"
              :key="i"
            >
              {{ entry }}
            </th>
            <th>1h</th>
            <th>8h</th>
            <th>24h</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(setup, i) in setups"
            :key="i"
          >
            <td
              :class="{
                'bg-rose-600/30': entry === 1.5,
                'bg-purple-800/30': entry === 2,
                'bg-emerald-700/30': entry === 3,
                'bg-yellow-500/30': entry === 4,
                'bg-violet-600/30': entry === 5,
                'bg-cyan-400/30': entry === 6,
              }"
              v-for="(entry, j) in setup.setup"
              :key="j"
            >
              {{ entry }}
            </td>
            <td>{{ (setup.dayCost / 24).toLocaleString() }}</td>
            <td>{{ (setup.dayCost / 3).toLocaleString() }}</td>
            <td>{{ setup.dayCost.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { efficientSetups } from "@/data/efficientSetups";
import { getDayCost } from "@/data/costs";
import { onBeforeMount, ref } from "vue";

const setups = ref(efficientSetups);

onBeforeMount(() => {
  setups.value.forEach((s) => {
    s["dayCost"] = getDayCost(s.setup);
  });
});
</script>
