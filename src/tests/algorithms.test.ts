import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSorts";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { quickSort } from "../algorithms/quickSort";

import { randomArray } from "../utils/generate";
import { simulateAnimations } from "./helpers";

const TESTED_LENGTH = 100;

describe("Sorting algorithms are correct", () => {
  test.each([bubbleSort, selectionSort, insertionSort, mergeSort, quickSort])(
    "%p should sort the array",
    (algorithm) => {
      Array.from({ length: 10 }).forEach(() => {
        const array = randomArray(TESTED_LENGTH);
        const expectedResult = array.sort((a, b) => a - b);

        const animations = algorithm(array);
        expect(animations).toBeTruthy();

        const sorted = simulateAnimations([...array], animations, 0);
        expect(sorted).toEqual(expectedResult);
      });
    }
  );
});
