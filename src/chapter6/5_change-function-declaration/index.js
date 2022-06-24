import example from "./example";
import solution from "./solution";
import Executor from "../../executor.js";

const radius = 35;

export default [
  new Executor("예제", example(radius), example(radius)),
  new Executor("풀이", solution(radius), example(radius)),
];
