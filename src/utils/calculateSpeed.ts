import { SPEED_SCALE } from "../constants";

/**
 * Calculates the speed based on the input value
 * @param value the value from the input slider
 * @returns actual speed in miliseconds
 */
export const calculateSpeed = (value: number) => (101 - value) * SPEED_SCALE;
