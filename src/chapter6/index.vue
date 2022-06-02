<template>
  <Tab :chapters="chapters"></Tab>
</template>
<script setup>
import Tab from "@/components/Tab.vue";
import one from "./6-1Extract-Function";
import two from "./6-2Inline-Function";
import three from "./6-3Extract-Variable";
import four from "./6-4Inline-Variable";

const chapters = {
  "6-1": one,
  "6-2": two,
  "6-3": three,
  "6-4": four,
};
</script>
