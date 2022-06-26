<script setup>
import Try1Vue from "./try1";
import Example from "./example";
import Solution1 from "./solution1";
import Solution2 from "./solution2";
import Tab from "@/components/Tab.vue";
const subjects = {
  예제: Example,
  중간풀이: Solution1,
  풀이: Solution2,
  연습1: Try1Vue,
};
</script>
<template>
  <Tab :chapters="subjects" />
</template>
