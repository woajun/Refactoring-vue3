<script setup>
import plays from "./condition/plays";
import invoices from "./condition/invoices";
import expect from "./condition/output";
import example from "./example/statement.js";
import solution1 from "./solution1/statement.js";
import solution2 from "./solution2/statement.js";
import Chapter from "../components/Chapter.vue";

class Executor {
  constructor(name, statement) {
    this.name = name;
    this.statement = statement;
  }
  get result() {
    return this.statement ? this.statement(invoices, plays) : undefined;
  }
  get expect() {
    return expect;
  }
}

const executors = [
  new Executor("예제", example),
  new Executor("중간풀이", solution1),
  new Executor("풀이", solution2),
];
const junExecutors = [new Executor("연습1")];

const sections = { "마틴 파울러": executors, 강준희: junExecutors };
</script>
<template>
  <chapter :sections="sections"></chapter>
</template>
