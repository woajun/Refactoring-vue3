<template>
  <div>{{ apple() }}</div>
</template>
<script setup>
const anOrder = { basePrice: 1200 };
function apple() {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}
</script>
