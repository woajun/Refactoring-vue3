<script setup>
import { ref } from "vue";
import plays from "./plays";
import invoices from "./invoices";
import { statement } from "./statement";

const result = ref("");
result.value = statement(invoices, plays);
</script>
<template>
  <h1>chpater 01. 1-1 예제</h1>
  <br />
  <textarea :value="result" rows="10" cols="50"></textarea>
</template>
