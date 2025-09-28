<template>
  <EndOfService /
  <StandardSetups />
  <div class="lg:grid lg:grid-cols-2 max-lg:flex max-lg:flex-col gap-4 w-full self-center">
    <SpeedUpSelectors v-model="speedUpSetup" />
    <SpeedUpCost :setup="speedUpSetup" />
  </div>
  <TillEndCalc />
  <div class="flex flex-col gap-4 max-w-4xl w-full self-center">
    <p class="page-header">Boost cost</p>
    <BoostCostTable />
  </div>
  <div class="flex flex-col gap-4 max-w-4xl w-full self-center">
    <p class="page-header">Extra time towards research</p>
    <IncreaseTable />
  </div>
  <Footer />
</template>

<script setup>
import { onBeforeMount, ref, watch } from "vue";
import { defaultSetup } from "@/data/setup";

import Footer from "@/components/Footer.vue";
import SpeedUpCost from "@/components/SpeedUpCost.vue";
import SpeedUpSelectors from "@/components/SpeedUpSelectors.vue";
import TillEndCalc from "@/components/TillEndCalc.vue";
import StandardSetups from "@/components/StandardSetups.vue";
import IncreaseTable from "@/components/IncreaseTable.vue";
import BoostCostTable from "@/components/BoostCostTable.vue";
import EndOfService from "@/components/EndOfService.vue";

const speedUpSetup = ref(JSON.parse(localStorage.getItem("setup")));

onBeforeMount(() => {
  if (!localStorage.getItem("setup")) {
    localStorage.setItem("setup", JSON.stringify(defaultSetup));
    speedUpSetup.value = defaultSetup;
  }
});

watch(
  () => speedUpSetup.value,
  () => localStorage.setItem("setup", JSON.stringify(speedUpSetup.value)),
  { deep: true }
);
</script>
