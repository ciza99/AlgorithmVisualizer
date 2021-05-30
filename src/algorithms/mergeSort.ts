import { Anim } from "../components/App/App";
import { swap } from "../utils/swap";

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

export const mergeSort = (arrayInput: number[]): Anim[] => {
  const array = [...arrayInput];
  const animations: Anim[] = [];

  mSort(array, 0, array.length - 1, animations);

  return animations;
};
