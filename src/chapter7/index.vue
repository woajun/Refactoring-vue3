<script setup>
import one from "./1_encapsulate-record";
import oneSecond from "./1_encapsulate-record_ex2";
import Chapter from "@/components/Chapter.vue";

const sections = { "7-1 예제1": one, "7-1 예제2": oneSecond };
</script>
<template>
  <chapter :sections="sections" />
</template>
