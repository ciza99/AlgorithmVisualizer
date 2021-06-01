/**
 * Swaps two values in an array
 * @param array array to swap the values in
 * @param i index of the value to swap with value on index j
 * @param j index of the value to swap with value on index i
 */
export const swap = <T>(array: T[], i: number, j: number) => {
  [array[i], array[j]] = [array[j], array[i]];
};
