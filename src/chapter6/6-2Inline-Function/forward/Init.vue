<template>
  <div>
    <h1>6.2함수 인라인하기 - forward</h1>
    <button @click="randomValue">랜덤</button>
    <br />
    {{ driver.numberOfLateDeliveries }}
    <br />
    {{ rating(driver) }}
  </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";

const driver = reactive({
  numberOfLateDeliveries: 0,
});

function randomValue() {
  driver.numberOfLateDeliveries = Math.round(Math.random() * 10);
}

function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}
</script>
