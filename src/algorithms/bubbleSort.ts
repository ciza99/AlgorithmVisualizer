import { IAnim } from "../components/App/App";
import { swap } from "../utils/swap";

export const bubbleSort = (arrayInput: number[]): IAnim[] => {
  const array = [...arrayInput];
  const animations: IAnim[] = [];
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
