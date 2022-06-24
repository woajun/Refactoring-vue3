import example from "./example";
import solution from "./solution";
import Executor from "../../executor.js";
import invoice from "./condition/invoice.js";

export default [
  new Executor("예제", example(invoice), example(invoice)),
  new Executor("풀이", solution(invoice), example(invoice)),
];
