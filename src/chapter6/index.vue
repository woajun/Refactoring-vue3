<script setup>
import ch6_1 from "./1_extract-function";
import ch6_2_1 from "./2_inline-function";
import ch6_2_2 from "./2_inline-function_2";
import ch6_2_3 from "./2_inline-function_3";
import ch6_3_1 from "./3_extract-variable";
import ch6_3_2 from "./3_extract-variable_2";
import ch6_4 from "./4_inline-variable";
import Chapter from "@/components/Chapter.vue";

const sections = {
  "1 Extract Function": ch6_1,
  "2_1 Inline Function": ch6_2_1,
  "2_2 Inline Function": ch6_2_2,
  "2_3 Inline Function": ch6_2_3,
  "3_1 Extract Variable": ch6_3_1,
  "3_2 Extract Variable": ch6_3_2,
  "4 Inline Variable": ch6_4,
};
</script>
<template>
  <chapter :sections="sections" />
</template>
