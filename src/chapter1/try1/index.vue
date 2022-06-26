<script setup>
import Executor from "../../executor";
import TestBoard from "@/components/TestBoard.vue";
import statement from "./statement.js";
import i from "../condition/invoices";
import p from "../condition/plays";
import expectStatement from "../example/statement";

const executor = new Executor("연습1", statement(i, p), expectStatement(i, p));
</script>
<template>
  <TestBoard :executor="executor" />
</template>
