<template>
  <div>
    <template v-for="(chapter, key) of chapters" :key="key">
      <button @click="currentView = key">{{ key }}</button>
    </template>
    <template v-for="(chapter, key) of chapters" :key="key">
      <div v-show="currentView === key">
        <component :is="chapter" />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import chapter1 from "./chapter1/theater/jun2";
import chapter6 from "./chapter6";

const currentView = ref("챕터1");
const chapters = {
  챕터1: chapter1,
  챕터6: chapter6
}
</script>
