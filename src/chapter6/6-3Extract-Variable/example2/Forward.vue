<template>
  <div>{{ doSomething(order) }}</div>
</template>
<script setup>
const order = {
  quantity: 50,
  itemPrice: 1000,
};
function doSomething(order) {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}
</script>
