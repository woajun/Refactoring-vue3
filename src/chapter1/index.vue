<script setup>
import Try1Vue from "./try1";
import Example from "./example";
import Tab from "@/components/Tab.vue";
const subjects = {
  예제: Example,
  연습1: Try1Vue,
};
</script>
<template>
  <Tab :chapters="subjects" />
</template>
