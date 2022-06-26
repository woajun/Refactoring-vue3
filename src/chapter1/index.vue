<script setup>
import Try1Vue from "./try1";
import Tab from "@/components/Tab.vue";
const subjects = {
  연습1: Try1Vue,
};
</script>
<template>
  <Tab :chapters="subjects" />
  <Try1Vue />
</template>
