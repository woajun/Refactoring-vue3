<!-- 6.1 함수 추출하기 Extract Function -->
<template>
    <div>
        <h1>준2</h1>
        <button @click="printOwing(invoice)">printOwing(invoice)</button>
    </div>
</template>
<script setup>
import invoice from "../invoice.js"

const Clock = {
    today: new Date()
}

function printOwing(invoice) {
    printInvoice(makeInvoice(invoice));

    function printInvoice(invoice) {
        console.log("*********************");
        console.log("***** 고객 채무 *****");
        console.log("*********************");
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${invoice.outstanding}`)
        console.log(`마감일: ${invoice.dueDate}`)
    }
}

function makeInvoice(invoice) {
    const result = Object.assign({}, invoice);
    result.outstanding = outstandingFor(invoice);
    result.dueDate = dueDateFor(invoice);
    return result;

    function outstandingFor(invoice) {
        let result = 0;
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result
    }

    function dueDateFor() {
        const today = Clock.today;
        return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)
            .toLocaleDateString();
    }
}
</script>