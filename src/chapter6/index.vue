<template>
  <Tab :chapters="chapters"></Tab>
</template>
<script setup>
import Tab from "@/components/Tab.vue";
import one from "./6-1Extract-Function";
import two from "./6-2Inline-Function";
import three from "./6-3Extract-Variable";

const chapters = {
  "6-1": one,
  "6-2": two,
  "6-3": three,
};
</script>
