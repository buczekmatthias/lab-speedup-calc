<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th
          v-for="header in [1, 8, 24]"
          :key="header"
        >
          {{ header }}h
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="cost in costs"
        :key="cost"
      >
        <template v-if="cost[0] !== 1">
          <td>{{ cost[0] }}x</td>
          <td
            v-for="n in [0, 1, 2]"
            :key="n"
          >
            {{ getSpeedUpCost([cost[0], n]).toLocaleString() }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { costs, getSpeedUpCost } from "@/data/costs";
</script>
