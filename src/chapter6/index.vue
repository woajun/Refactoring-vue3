<template>
  <Tab :chapters="chapters"></Tab>
  <template v-for= "(section,key) in sections" :key="key">
    <br/><br/>{{key}} : 
    <template v-for="(example,i) in section" :key="i">
      <button @click="executeExample(example)">{{example.name}}</button>&nbsp;
    </template> 
  </template>
</template>
<script setup>
import Tab from "@/components/Tab.vue";
import one from "./6-1Extract-Function";
import two from "./6-2Inline-Function";
import three from "./6-3Extract-Variable";
import four from "./6-4Inline-Variable";
import five from "./6-5Change-Function-Declaration";
import eight from "./6-8Introduce-Parameter-Object";
import nine from "./6-9Combine-Functions-into-Class";
import ten from "./6-10Combine-Functions-into-Transform";

const chapters = {
  "6-1": one,
  "6-2": two,
  "6-3": three,
  "6-4": four,
  "6-5": five,
  "6-8": eight,
};

const sections = {"6-9":nine, "6-10":ten};

function executeExample(example) {
  console.log(`====='${example.name}' 실행=====`)
  example.method();
}
</script>
