<template>
  <div>
    <template v-for="(chapter, key) of chapters" :key="key">
      <button @click="currentView = key">{{ key }}</button>&nbsp;
    </template>
    now : {{ currentView }}

    <template v-for="(chapter, key) of chapters" :key="key">
      <div v-show="currentView === key">
        <component :is="chapter" />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  chapters: Object,
  predefined: String,
});
const currentView = ref("");

function setCurrentView(predefined) {
  const keys = Object.getOwnPropertyNames(props.chapters);
  if (typeof predefined !== "undefined") {
    return (currentView.value = predefined);
  }
  if (keys[0]) {
    return (currentView.value = keys[0]);
  }
}
setCurrentView(props.predefined);
</script>
