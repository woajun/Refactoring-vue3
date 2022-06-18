<script setup>
import one from "./7-1Encapsulate-Record";
import oneSecond from "./7-1Encapsulate-Record-ex2";

const sections = { "7-1 예제1": one, "7-1 예제2": oneSecond };

function executeExample(example) {
  console.log(`====='${example.name}' 실행=====`);
  example.method();
}
</script>
<template>
  <template v-for="(section, key) in sections" :key="key">
    <br /><br />{{ key }} :
    <template v-for="(example, i) in section" :key="i">
      <button @click="executeExample(example)">{{ example.name }}</button>&nbsp;
    </template>
  </template>
</template>
