import { Anim } from "../components/App";
import { swap } from "../utils/swap";

/**
 * Partitioning part of the quick sort algorithm
 * @param array array that is being sorted
 * @param low lower bound
 * @param high upper bound
 * @param animations animations that are being constucted
 * @returns index where the partitioning ended
 */
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

/**
 * Helper function for quick sort to call recursively
 * @param array array that is being sorted
 * @param low lower bound
 * @param high upper bound
 * @param animations animations that are being constructed
 * @returns void
 */
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

/**
 * Quick sort algorithm
 * @param arrayInput array to sort
 * @returns animations that define the steps of the algorithm
 */
export const quickSort = (arrayInput: number[]): Anim[] => {
  const array = [...arrayInput];
  const animations: Anim[] = [];
  qSort(array, 0, array.length - 1, animations);
  return animations;
};
