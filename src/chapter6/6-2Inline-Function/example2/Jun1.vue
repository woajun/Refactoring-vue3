<template>
  <div>
    <h1>6.2함수 인라인하기 - 예제2</h1>
    <br />
    {{ reportLines(customer) }}
  </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";

const customer = reactive({
  name: "홍길동",
  location: "잠실",
});

function reportLines(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}
</script>
