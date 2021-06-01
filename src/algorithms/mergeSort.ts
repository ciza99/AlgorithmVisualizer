import { Anim } from "../components/App";

/**
 * Merging part of the merge sort alogorithm
 * @param array array that is being sorted
 * @param left lower bound
 * @param mid middle index
 * @param right upper bound
 * @param animations animations that are being constructed
 */
const merge = (
  array: number[],
  left: number,
  mid: number,
  right: number,
  animations: Anim[]
) => {
  let res = [];
  let [i, j] = [left, mid + 1];

  while (i <= mid && j <= right) {
    animations.push({ first: i, second: j, isSwap: false });
    const takeLeft = array[i] <= array[j];
    res.push(takeLeft ? array[i++] : array[j++]);
  }
  while (i <= mid) {
    animations.push({ first: i, second: i, isSwap: false });
    res.push(array[i++]);
  }
  while (j <= right) {
    animations.push({ first: j, second: j, isSwap: false });
    res.push(array[j++]);
  }
  for (let index = left; index <= right; index++) {
    const value = res[index - left];
    animations.push({
      first: index,
      second: index,
      isSwap: false,
      override: { index, value },
    });
    array[index] = value;
  }
};

/**
 * Helper function for merge sort that is called recursively
 * @param array array that is being sorted
 * @param left lower bound
 * @param right upper bound
 * @param animations animations that are being constructed
 * @returns void
 */
const mSort = (
  array: number[],
  left: number,
  right: number,
  animations: Anim[]
) => {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  mSort(array, left, mid, animations);
  mSort(array, mid + 1, right, animations);
  merge(array, left, mid, right, animations);
};

/**
 * Merge sort algorithm
 * @param arrayInput array to sort
 * @returns animations that define the steps of the algorithm
 */
export const mergeSort = (arrayInput: number[]): Anim[] => {
  const array = [...arrayInput];
  const animations: Anim[] = [];

  mSort(array, 0, array.length - 1, animations);

  return animations;
};
