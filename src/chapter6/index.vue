<script setup>
import one from "./1_extract-function";
import two from "./2_inline-function";
import Chapter from "@/components/Chapter.vue";

const sections = {
  "6-1 예제": one,
  "6.2 함수 인라인하기 Inline Function": two,
};
</script>
<template>
  <chapter :sections="sections" />
</template>
