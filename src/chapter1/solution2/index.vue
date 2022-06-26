<script setup>
import Tester from "@/assets/js/testerClass.js";
import TestBoard from "@/components/TestBoard.vue";
import statement from "./statement.js";
import i from "../condition/invoices";
import p from "../condition/plays";
import expectStatement from "../example/statement";

const tester = new Tester(statement(i, p), expectStatement(i, p));
</script>
<template>
  <TestBoard :tester="tester" />
</template>
