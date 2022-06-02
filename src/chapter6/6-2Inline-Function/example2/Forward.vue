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
  getherCustomerData(lines, aCustomer);
  return lines;
}

function getherCustomerData(out, aCustomer) {
  out.push(["location", aCustomer.location]);
}
</script>
