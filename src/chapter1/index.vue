<script setup>
import plays from "./condition/plays";
import invoices from "./condition/invoices";
import expect from "./condition/output";
import example from "./example/statement.js";
import { ref } from "vue";
const statements = {
  예제: example,
  // A : A,
  // B : B,
  // ...
};

const result = ref("");
const test = ref(true);
const title = ref("선택 없음");

const execute = function (statement, key) {
  result.value = statement(invoices, plays);
  test.value = result.value === expect ? true : false;
  title.value = key;
};
</script>
<template>
  <br />
  <template v-for="(statement, key) in statements" :key="key">
    <button @click="execute(statement, key)">{{ key }}</button>&nbsp;
  </template>
  <br />
  <br />
  <h3>{{ title }}</h3>
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
