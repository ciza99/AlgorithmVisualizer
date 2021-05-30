export const randomArray = (length: number) =>
  Array.from({ length })
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5);
