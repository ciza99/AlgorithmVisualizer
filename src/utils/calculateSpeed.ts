import { SPEED_SCALE } from "../constants";

export const calculateSpeed = (value: number) => (101 - value) * SPEED_SCALE;
