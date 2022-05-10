<script setup>
import { ref, computed } from "vue";
import plays from "./plays";
import invoices from "./invoices";
import { statement } from "./statement";

const result = ref("");
result.value = statement(invoices, plays);

const test = computed(() =>
  result.value ==
  `청구 내역 (고객명: BigCo)
 Hamlet: $650.00(55석)
 As You Like It: $580.00(35석)
 Othello: $500.00(40석)
총액: $1,730.00
적립 포인트: 10점
`
    ? true
    : false
);
</script>
<template>
  <div :class="{ warning: !test, success: test }">
    <h1>챕터1. 극단 예제 - 책대로</h1>
    <br />
    <textarea v-model="result" rows="10" cols="50"></textarea>
  </div>
</template>
<style>
.warning {
  background-color: red;
}
.success {
  background-color: green;
}
</style>
