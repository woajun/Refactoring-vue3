<template>
<div :class="{fail: !test}">
    <textarea rows="15" cols="40" :value="docs">
    </textarea>
</div>
</template>
<script setup>
import plays from "./plays";
import invoices from "./invoices"
import {statement} from "./statement"

const docs = statement(invoices[0],plays);

const testDocs = 
`청구 내역 (고객명: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`
const test = docs===testDocs
</script>
<style>
.fail{
    background-color:red
}
</style>