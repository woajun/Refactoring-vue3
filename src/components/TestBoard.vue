<script setup>
import { defineProps } from "vue";
import Tester from "@/assets/js/testerClass";
import Executor from "../executor";
const props = defineProps({
  executor: Executor,
  tester: Tester,
});
const either = props.tester ?? props.executor;
</script>
<template>
  <textarea
    class="board"
    :class="[either.test ? 'success' : 'fail']"
    :value="either.result"
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
