<script setup>
import example from "./example/statement.js";
import solution1 from "./solution1/statement.js";
import solution2 from "./solution2/statement.js";
import try1 from "./try1/statement.js";
import Try1Vue from "./try1";
import Chapter from "../components/Chapter.vue";
import Executor from "../executor";
import i from "./condition/invoices";
import p from "./condition/plays.js";

const sections = {
  "마틴 파울러": [
    new Executor("예제", example(i, p), example(i, p)),
    new Executor("중간풀이", solution1(i, p), example(i, p)),
    new Executor("풀이", solution2(i, p), example(i, p)),
  ],
};
</script>
<template>
  <chapter :sections="sections"></chapter>
  <Try1Vue
    :executor="new Executor('연습1', try1(i, p), example(i, p))"
  ></Try1Vue>
</template>
