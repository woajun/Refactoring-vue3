<!-- 6.1 함수 추출하기 Extract Function -->
<template>
    <div>
        <h1>Forward</h1>
        <button @click="printOwing(invoice)">printOwing(invoice)</button>
        <br />
        {{ invoice }}
        <br />*********************
        <br />***** 고객 채무 *****
        <br />*********************
        <br />고객명: 신동민
        <br />채무액: 14500
        <br />마감일: 2022. 6. 30.
    </div>
</template>
<script setup>
const invoice = {
    customer: "신동민",
    orders: [
        { amount: 1000 },
        { amount: 3000 },
        { amount: 500 },
        { amount: 10000 },
    ],
}

const Clock = {
    today: new Date()
}

function printOwing(invoice) {

    printBanner();

    const outstanding = caclulateOutstanding(invoice);

    recordDueDate(invoice);
    printDetails(invoice, outstanding);
}

function caclulateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}

function printBanner() {
    console.log("*********************");
    console.log("***** 고객 채무 *****");
    console.log("*********************");
}
</script>