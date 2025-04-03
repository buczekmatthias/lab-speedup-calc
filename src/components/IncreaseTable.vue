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
        v-for="speed in increase"
        :key="speed"
      >
        <td>{{ speed[0] }}x</td>
        <td
          v-for="time in speed[1]"
          :key="time"
        >
          {{ timeToString(time) }}
        </td>
      </tr>
    </tbody>
  </table>
  <div class="grid grid-cols-[auto_1fr] gap-x-2 italic">
    <svg
      class="h-4 fill-white/65 mt-[0.2rem]"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
      <path d="M11 11H13V17H11zM11 7H13V9H11z"></path>
    </svg>
    <p class="font-light text-white/65">Additional time you gain on lab towards research thanks to used speed-up</p>
  </div>
</template>

<script setup>
import { increase, timeToString } from "@/data/increase";
</script>
