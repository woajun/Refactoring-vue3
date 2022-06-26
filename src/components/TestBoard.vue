<script setup>
import { defineProps } from "vue";
import Executor from "../executor";
defineProps({
  executor: Executor,
});
</script>
<template>
  <textarea
    class="board"
    :class="[executor.test ? 'success' : 'fail']"
    :value="executor.result"
    rows="10"
    cols="50"
    disabled
  ></textarea>
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
</style>
