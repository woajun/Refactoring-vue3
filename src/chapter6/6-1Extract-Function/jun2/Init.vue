<!-- 6.1 함수 추출하기 Extract Function -->
<template>
    <div>
        <h1>jun2</h1>
        <button @click="printOwing(invoice)">printOwing(invoice)</button>
    </div>
</template>
<script setup>
import invoice from "../invoice.js"

const Clock = {
    today: new Date()
}

function printOwing(invoice) {
    printBanner();
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
    return invoice.orders.reduce((total, o) => total += o.amount, 0);
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
    console.log("*********************");
    console.log("***** 고객 채무 *****");
    console.log("*********************");
}
</script>