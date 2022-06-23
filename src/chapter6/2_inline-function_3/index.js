import example from "./example";
import solution from "./solution";
import Executor from "../executor.js";

const aCustomer = {
  name: "martine",
  location: "US",
};

export default [
  new Executor("예제", example(aCustomer), example(aCustomer)),
  new Executor("풀이", solution(aCustomer), example(aCustomer)),
];
