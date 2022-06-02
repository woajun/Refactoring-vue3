<template>
  <Tab :chapters="chapters"></Tab>
</template>

<script setup>
import Tab from "@/components/Tab.vue";
import chapter1 from "./chapter1/theater/jun2";
import chapter6 from "./chapter6";

const chapters = {
  챕터1: chapter1,
  챕터6: chapter6,
};
</script>
