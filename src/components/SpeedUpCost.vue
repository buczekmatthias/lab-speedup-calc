<template>
  <div class="flex flex-col gap-3">
    <p class="page-header">Speed-ups cost</p>
    <table>
      <thead>
        <tr>
          <th
            colspan="2"
            class="text-lg p-3"
          >
            Total cost: {{ getTotalCost(setup).toLocaleString() }} cells
          </th>
        </tr>
        <tr>
          <th>Lab slot</th>
          <th>Cells cost</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="setup.every((s) => s[0] === 1)">
          <tr>
            <td colspan="2">No speed-ups selected</td>
          </tr>
        </template>
        <template v-else>
          <tr
            v-for="(s, i) in setup"
            :key="i"
          >
            <td>#{{ i + 1 }}</td>
            <td>{{ getSpeedUpCost(s).toLocaleString() }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { getSpeedUpCost, getTotalCost } from "@/data/costs";

defineProps({
  setup: Array,
});
</script>

<style scoped lang="postcss">
table {
  table-layout: fixed;
}
th,
td {
  width: 50%;
}
</style>
