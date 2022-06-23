<script setup>
import ch6_1 from "./1_extract-function";
import ch6_2_1 from "./2_inline-function";
import ch6_2_2 from "./2_inline-function_2";
import ch6_2_3 from "./2_inline-function_3";
import ch6_3_1 from "./3_extract-variable";
import Chapter from "@/components/Chapter.vue";

const sections = {
  "6-1 예제": ch6_1,
  "6.2 Inline Function_1": ch6_2_1,
  "6.2 Inline Function_2": ch6_2_2,
  "6.2 Inline Function_3": ch6_2_3,
  "6.2 Extract Variable_3": ch6_3_1,
};
</script>
<template>
  <chapter :sections="sections" />
</template>
