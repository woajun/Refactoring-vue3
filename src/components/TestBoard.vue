<script setup>
import { defineProps } from "vue";
defineProps({
  test: Boolean,
  result: String,
});
</script>
<template>
  <textarea
    class="board"
    :class="[test ? 'success' : 'fail']"
    :value="result"
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
