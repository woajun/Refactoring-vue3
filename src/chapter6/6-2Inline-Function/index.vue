<template>
  <div>
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
  </div>
</template>
<script setup>
import { ref } from "vue";
import init from "./init/Init.vue";
import forward from "./forward/Init.vue";
import jun1 from "./jun1/Init.vue";
// import jun2 from "./jun2/Init.vue";

const currentView = ref("챕터1");
const chapters = {
  init: init,
  forward: forward,
  jun1: jun1,
  // "jun2": jun2,
};
</script>
