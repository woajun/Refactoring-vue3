<script setup>
import ch6_1 from "./1_extract-function";
import ch6_2_1 from "./2_inline-function";
import ch6_2_2 from "./2_inline-function_2";
import ch6_2_3 from "./2_inline-function_3";
import ch6_3_1 from "./3_extract-variable";
import ch6_3_2 from "./3_extract-variable_2";
import ch6_4 from "./4_inline-variable";
import ch6_5 from "./5_change-function-declaration";
import ch6_5_2 from "./5_change-function-declaration_2";
import ch6_5_3 from "./5_change-function-declaration_3";
import ch6_6 from "./6_encapsulate_variable";
import ch6_7 from "./7_rename-variable";
import ch6_8 from "./8_introduce-parameter-object";
import ch6_9 from "./9_combine-functions-into-class";
import ch6_10 from "./10_combine-functions-into-transform";
import ch6_11 from "./11_split-phase";
import Chapter from "@/components/Chapter.vue";

const sections = {
  "1 Extract Function": ch6_1,
  "2_1 Inline Function": ch6_2_1,
  "2_2 Inline Function": ch6_2_2,
  "2_3 Inline Function": ch6_2_3,
  "3_1 Extract Variable": ch6_3_1,
  "3_2 Extract Variable": ch6_3_2,
  "4 Inline Variable": ch6_4,
  "5_1 Change Funciton Declaration": ch6_5,
  "5_2 Change Funciton Declaration": ch6_5_2,
  "5_3 Change Funciton Declaration": ch6_5_3,
  "6 Encapsulate Variable": ch6_6,
  "7 Rename Variable": ch6_7,
  "8 Introduce Parameter Object": ch6_8,
  "9 Comibne Functions into Class": ch6_9,
  "10 Comibne Functions into Transform": ch6_10,
  "11 Split Phase": ch6_11,
};
</script>
<template>
  <chapter :sections="sections" />
</template>
