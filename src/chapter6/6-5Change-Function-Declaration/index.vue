<template>
  <Tab :chapters="chapters"></Tab>
</template>
<script setup>
import Tab from "@/components/Tab.vue";
import init from "./init";
// import forward from "./forward";
// import jun from "./jun";

const chapters = {
    init,
    // forward,
    // jun
};
</script>
