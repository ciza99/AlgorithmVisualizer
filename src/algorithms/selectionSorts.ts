import { Anim } from "../components/App";
import { swap } from "../utils/swap";

/**
 * Selection sort algorithm
 * @param arrayInput array to sort
 * @returns animations that define the steps of the algorithm
 */
export const selectionSort = (inputArray: number[]) => {
  const array = [...inputArray];
  const animations: Anim[] = [];
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i; j < array.length; j++) {
      animations.push({ first: i, second: j, isSwap: false });
      if (array[min] > array[j]) {
        min = j;
      }
    }
    animations.push({ first: min, second: i, isSwap: true });
    swap(array, min, i);
  }
  return animations;
};
