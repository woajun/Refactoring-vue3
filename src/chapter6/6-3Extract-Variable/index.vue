<template>
  <Tab :chapters="chapters"></Tab>
</template>
<script setup>
import Tab from "@/components/Tab.vue";
import ex1Init from "./example1/Init.vue";
import ex1Jun1 from "./example1/Jun1.vue";
import ex1Forward from "./example1/Forward.vue";
import ex2Init from "./example2/Init.vue";
import ex2Forward from "./example2/Forward.vue";
import ex2Jun1 from "./example2/Jun1.vue";

const chapters = {
  ex1Init: ex1Init,
  ex1Forward: ex1Forward,
  ex1Jun1: ex1Jun1,
  ex2Init: ex2Init,
  ex2Forward: ex2Forward,
  ex2Jun1: ex2Jun1,
};
</script>
