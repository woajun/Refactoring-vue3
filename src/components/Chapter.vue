<script setup>
import { ref, defineProps } from "vue";
import TestBoard from "./TestBoard.vue";

const result = ref("");
const test = ref(true);
const title = ref("선택 없음");

defineProps({ sections: Object });

function execute(example) {
  result.value = example.result;
  test.value = example.expect === example.result;
  title.value = example.name;
}
</script>
<template>
  <br />
  <h3>{{ title }}</h3>
  <br />
  <TestBoard :test="test" :result="result" />
  <template v-for="(section, key) in sections" :key="key">
    <div class="row">
      <label>{{ key }} : </label>
      <template v-for="(example, i) in section" :key="i">
        <button @click="execute(example)">{{ example.name }}</button>
        &nbsp;
      </template>
    </div>
  </template>
</template>
<style>
.row {
  margin-top: 3px;
}
</style>
