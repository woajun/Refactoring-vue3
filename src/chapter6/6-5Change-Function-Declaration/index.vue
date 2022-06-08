<template>
  <Tab :chapters="chapters"></Tab>
</template>
<script setup>
import Tab from "@/components/Tab.vue";
import Init from "./Init.vue";
import Forward from "./Forward.vue";

const chapters = {
  Init,
  Forward,
};
</script>
