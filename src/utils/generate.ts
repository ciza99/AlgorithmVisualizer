/**
 * Generates a random array with given length
 * @param length length of the generated array
 * @returns random array with given length
 */
export const randomArray = (length: number) =>
  Array.from({ length })
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5);
