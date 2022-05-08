<script setup>
import { ref } from "vue";
import plays from "./plays";
import invoices from "./invoices";
import { statement } from "./statement";

const result = ref("");
result.value = statement(invoices, plays);
</script>
<template>
  <h1>챕터1. 극단 예제 - 책대로</h1>
  <br />
  <textarea :value="result" rows="10" cols="50"></textarea>
</template>
