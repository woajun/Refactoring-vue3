<script setup>
import one from "./1_extract-function";
import two_1 from "./2_inline-function";
import two_2 from "./2_inline-function_2";
import Chapter from "@/components/Chapter.vue";

const sections = {
  "6-1 예제": one,
  "6.2 Inline Function_1": two_1,
  "6.2 Inline Function_2": two_2,
};
</script>
<template>
  <chapter :sections="sections" />
</template>
