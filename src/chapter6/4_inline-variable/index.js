import example from "./example";
import solution from "./solution";
import Executor from "../../executor.js";

const anOrder = { basePrice: 800 };

export default [
  new Executor("예제", example(anOrder), example(anOrder)),
  new Executor("풀이", solution(anOrder), example(anOrder)),
];
