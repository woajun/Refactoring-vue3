import example from "./example";
import solution from "./solution";
import Executor from "../executor.js";

const record = { quantity: 3, itemPrice: 700 };

export default [
  new Executor("예제", new example(record).price, new example(record).price),
  new Executor("풀이", new solution(record).price, new example(record).price),
];
