import example from "./example";
import solution from "./solution";
import Executor from "../../executor";

export function baseRate(month, year) {
  return new Date(year, month) > new Date(2017, 4) ? 10 : 9;
}

export function taxThreshold(year) {
  return year > 2015 ? 1 : 2;
}

export default [
  new Executor("예제", example, example),
  new Executor("풀이", solution, example),
];
