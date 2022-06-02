<template>
  <div>{{ apple() }}</div>
</template>
<script setup>
const anOrder = { basePrice: 1200 };
function apple() {
  return anOrder.basePrice > 1000;
}
</script>
