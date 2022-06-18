<script setup>
import one from "./1_extract-function";
import Chapter from "@/components/Chapter.vue";

const sections = { "6-1 예제": one };
</script>
<template>
  <chapter :sections="sections" />
</template>
