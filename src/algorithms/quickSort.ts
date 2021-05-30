import { Anim } from "../components/App/App";
import { swap } from "../utils/swap";

const partition = (
  array: number[],
  low: number,
  high: number,
  animations: Anim[]
) => {
  const pivot = array[low];
  let [i, j] = [low, high];

  while (i < j) {
    while (array[i] <= pivot) {
      animations.push({ first: i, second: j, isSwap: false });
      i++;
    }

    while (array[j] > pivot) {
      animations.push({ first: i, second: j, isSwap: false });
      j--;
    }

    if (i < j) {
      animations.push({ first: i, second: j, isSwap: true });
      swap(array, i, j);
    }
  }
  animations.push({ first: low, second: j, isSwap: true });
  swap(array, low, j);
  return j;
};

const qSort = (
  array: number[],
  low: number,
  high: number,
  animations: Anim[]
) => {
  if (low >= high) {
    return;
  }
  const j = partition(array, low, high, animations);
  qSort(array, low, j - 1, animations);
  qSort(array, j + 1, high, animations);
};

export const quickSort = (arrayInput: number[]): Anim[] => {
  const array = [...arrayInput];
  const animations: Anim[] = [];
  qSort(array, 0, array.length - 1, animations);
  return animations;
};
