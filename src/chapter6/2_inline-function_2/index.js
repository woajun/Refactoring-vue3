import example from "./example";
import solution from "./solution";
import Executor from "../executor.js";

const aDriver = {};
aDriver.numberOfLateDeliveries = 10;

export default [
  new Executor("예제", example(aDriver), example(aDriver)),
  new Executor("풀이", solution(aDriver), example(aDriver)),
];
