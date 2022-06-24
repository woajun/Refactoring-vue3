<script setup>
import { ref, defineProps } from "vue";

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
  <textarea
    class="board"
    :class="[test ? 'success' : 'fail']"
    v-model="result"
    rows="10"
    cols="50"
    disabled
  ></textarea>
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
.board {
  background-color: black;
  color: white;
  font-size: 18px;
}
.success {
  background-color: green;
}
.fail {
  background-color: red;
}
.row {
  margin-top: 3px;
}
</style>
