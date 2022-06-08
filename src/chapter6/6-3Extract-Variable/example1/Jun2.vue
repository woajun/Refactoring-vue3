<template>
  <div>{{ doSomething(order) }}</div>
</template>
<script setup>
const order = {
  quantity: 50,
  itemPrice: 1000,
};
function doSomething(order) {
  const basePrice = order.quantity * order.itemPrice
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
  const tax = Math.min(basePrice * 0.1, 100);
  
  return (
    basePrice -
    discount +
    tax
  );
}
</script>
