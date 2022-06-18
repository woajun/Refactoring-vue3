<script setup>
import plays from "./condition/plays";
import invoices from "./condition/invoices";
import output from "./condition/output";
import example from "./example/statement.js";
import { ref } from "vue";
const statements = { 문제: example };

const result = ref("");

const doSomething = function (statement) {
  result.value = statement(invoices, plays);
  console.log(output);
};
</script>
<template>
  <template v-for="(statement, key) in statements" :key="key">
    <button @click="doSomething(statement)">{{ key }}</button>&nbsp;
  </template>
  <textarea v-model="result" rows="10" cols="50"></textarea>
</template>

<style>
.warning {
  background-color: red;
}
.success {
  background-color: green;
}
</style>
