<template>
  <div>{{ doSomething(order) }}</div>
</template>
<script setup>
const order = {
  quantity: 50,
  itemPrice: 1000,
};
function doSomething(order) {
  const totalAmount = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(totalAmount * 0.1, 100);
  return totalAmount - quantityDiscount + shipping;
}
</script>
