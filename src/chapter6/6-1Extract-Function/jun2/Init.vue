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
    const details = makeDetails(invoice);
    printDetails(details, invoice, outstanding);
}

function makeDetails(invoice) {
    const result = Object.assign({}, invoice);
    result.outstanding = calculateOutstanding(invoice);
    result.dueDate = recordDueDate(invoice).toLocaleDateString();
    return result;
}

function calculateOutstanding(invoice) {
    return invoice.orders.reduce((total, o) => total += o.amount, 0);
}

function recordDueDate() {
    const today = Clock.today;
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(details) {
    console.log(`고객명: ${details.customer}`);
    console.log(`채무액: ${details.outstanding}`);
    console.log(`마감일: ${details.dueDate}`);
}

function printBanner() {
    console.log("*********************");
    console.log("***** 고객 채무 *****");
    console.log("*********************");
}
</script>