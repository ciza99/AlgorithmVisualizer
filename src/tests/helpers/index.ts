import { Anim } from "../../components/App";
import { swap } from "../../utils/swap";

export const simulateAnimations = (
  array: number[],
  animations: Anim[],
  index: number
): number[] => {
  if (index >= animations.length) {
    return array;
  }

  const { isSwap, first, second, override } = animations[index];

  if (isSwap) {
    swap(array, first, second);
  }

  if (override) {
    const { index, value } = override;
    array[index] = value;
  }

  return simulateAnimations(array, animations, index + 1);
};
