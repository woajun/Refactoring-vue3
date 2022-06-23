import example from "./example";
import solution from "./solution";
import Executor from "../executor.js";

const martin = { name: "martin" };

const exampleBook = new example();
exampleBook.addReservation(martin);

const solutionBook = new solution();
solutionBook.addReservation(martin);
export default [
  new Executor("예제", exampleBook, exampleBook),
  new Executor("풀이", solutionBook, exampleBook),
];
