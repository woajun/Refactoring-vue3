<script setup>
import plays from "./condition/plays";
import invoices from "./condition/invoices";
import expect from "./condition/output";
import example from "./example/statement.js";
import { ref } from "vue";
const statements = { 문제: example };

const result = ref("");
const test = ref(true);

const doSomething = function (statement) {
  result.value = statement(invoices, plays);
  test.value = result.value === expect ? true : true;
};
</script>
<template>
  <br />
  <template v-for="(statement, key) in statements" :key="key">
    <button @click="doSomething(statement)">{{ key }}</button>&nbsp;
  </template>
  <br />
  <br />
  <textarea
    :class="[test ? 'success' : 'fail']"
    v-model="result"
    rows="10"
    cols="50"
  ></textarea>
</template>

<style>
.success {
  background-color: green;
}
.fail {
  background-color: red;
}
</style>
