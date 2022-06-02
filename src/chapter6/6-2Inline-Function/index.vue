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
import ex1Init from "./example1/Init.vue";
import ex1Jun1 from "./example1/Jun1.vue";
import ex1Forward1 from "./example1/Forward.vue";
import ex2Init from "./example2/Init.vue";
import ex2Forward1 from "./example2/Forward.vue";
import ex2Jun1 from "./example2/Jun1.vue";

const currentView = ref("챕터1");
const chapters = {
  ex1Init: ex1Init,
  ex1Forward1: ex1Forward1,
  ex1Jun1: ex1Jun1,
  ex2Init: ex2Init,
  ex2Forward1: ex2Forward1,
  ex2Jun1: ex2Jun1,
};
</script>
