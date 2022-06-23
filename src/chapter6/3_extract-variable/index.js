import example from "./example";
import solution from "./solution";
import Executor from "../executor.js";

const order = {
  quantity: 50,
  itemPrice: 1000,
};

export default [
  new Executor("예제", example(order), example(order)),
  new Executor("풀이", solution(order), example(order)),
];
