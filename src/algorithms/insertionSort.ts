import { Anim } from "../components/App/App";
import { swap } from "../utils/swap";

export const insertionSort = (arrayInput: number[]): Anim[] => {
  const array = [...arrayInput];
  const animations: Anim[] = [];
  let i, key, j;
  for (i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    animations.push({ first: j, second: i, isSwap: false });
    while (j >= 0 && array[j] > key) {
      animations.push({ first: j, second: j + 1, isSwap: false });
      animations.push({ first: j, second: j + 1, isSwap: true });
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return animations;
};
