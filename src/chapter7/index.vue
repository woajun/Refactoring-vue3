<script setup>
import one from "./7-1Encapsulate-Record";
import oneSecond from "./7-1Encapsulate-Record-ex2";
import { ref } from "vue";

const result = ref("");
const test = ref(true);
const title = ref("선택 없음");

const sections = { "7-1 예제1": one, "7-1 예제2": oneSecond };

function executeExample(example) {
  result.value = example.result;
  test.value = example.expect;
  title.value = example.name;
}
</script>
<template>
  <br />
  <h3>{{ title }}</h3>
  <br />
  <textarea
    :class="[test ? 'success' : 'fail']"
    v-model="result"
    rows="10"
    cols="50"
  ></textarea>
  <template v-for="(section, key) in sections" :key="key">
    <br />
    <br />
    <label>{{ key }} : </label>
    <template v-for="(example, i) in section" :key="i">
      <button @click="executeExample(example)">{{ example.name }}</button>
      &nbsp;
    </template>
  </template>
</template>

<style>
.success {
  background-color: green;
}
.fail {
  background-color: red;
}
</style>
