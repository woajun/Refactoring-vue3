import example from "./example";
import solution from "./solution";
import Executor from "../executor";
export default [
  new Executor("예제", example, example),
  new Executor("풀이", solution, example),
];
