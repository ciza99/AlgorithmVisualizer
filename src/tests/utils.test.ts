import { randomArray } from "../utils/generate";
import { swap } from "../utils/swap";

test("swap function should swap two values of an array", () => {
  const array = [1, 5];
  swap(array, 0, 1);

  expect(array).toEqual([5, 1]);
});

test("randomArray function should generate array with given length", () => {
  const array = randomArray(25);

  expect(array).toBeTruthy();
  expect(array.length).toBe(25);
});
