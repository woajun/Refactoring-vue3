import example from "./example";
import solution from "./solution";
import Executor from "../executor";

const p = {
  basePrice: 1000,
  discountThreshold: 50,
  discountRate: 0.1,
};

const q = 100;

const s = {
  discountThreshold: 800,
  discountedFee: 100,
  feePerCase: 120,
};

export default [
  new Executor("예제", example(p, q, s), example(p, q, s)),
  new Executor("풀이", solution(p, q, s), example(p, q, s)),
];
