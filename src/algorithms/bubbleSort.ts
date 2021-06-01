import { Anim } from "../components/App";
import { swap } from "../utils/swap";

/**
 * Bubble sort algorithm
 * @param arrayInput array to sort
 * @returns animations that define the steps of the algorithm
 */
export const bubbleSort = (arrayInput: number[]): Anim[] => {
  const array = [...arrayInput];
  const animations: Anim[] = [];
  let to = array.length;
  while (true) {
    let swapped = false;
    for (let i = 1; i < to; i++) {
      animations.push({ first: i - 1, second: i, isSwap: false });
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i);
        animations.push({ first: i - 1, second: i, isSwap: true });
        swapped = true;
      }
    }
    to--;
    if (!swapped) {
      return animations;
    }
  }
};
