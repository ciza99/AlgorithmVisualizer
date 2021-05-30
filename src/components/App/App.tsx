import React, { FC, useEffect, useState } from "react";
import "./App.css";

/** COMPONENTS */
import Header from "../Header";
import ArrayContainer from "../ArrayContainer";

/** UTILITIES */
import { swap } from "../../utils/swap";
import { randomArray } from "../../utils/generate";

/** ALGORITHMS */
import { bubbleSort } from "../../algorithms/bubbleSort";
import { selectionSort } from "../../algorithms/selectionSorts";
import { insertionSort } from "../../algorithms/insertionSort";
import { mergeSort } from "../../algorithms/mergeSort";
import { quickSort } from "../../algorithms/quickSort";

export interface Anim {
  first: number;
  second: number;
  isSwap: boolean;
  override?: { index: number; value: number };
}

export type Algorithm =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick";

const App: FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [arraySize, setArraySize] = useState(25);
  const [array, setArray] = useState(randomArray(arraySize));
  const [selected, setSelected] = useState<number[]>([]);
  const [speed, setSpeed] = useState(50);
  const [algorithm, setAlgorithm] = useState<Algorithm>("bubble");

  useEffect(() => {
    setArray(randomArray(arraySize));
  }, [arraySize]);

  const loop = (animations: Anim[], index: number) => {
    if (index >= animations.length) {
      setSelected([]);
      setIsRunning(false);
      return;
    }

    const { isSwap, first, second, override } = animations[index];

    setSelected([first, second]);

    if (isSwap) {
      setArray((array) => {
        const newArray = [...array];
        swap(newArray, first, second);
        return newArray;
      });
    }

    if (override) {
      setArray((array) => {
        const newArray = [...array];
        const { index, value } = override;
        newArray[index] = value;
        return newArray;
      });
    }

    setTimeout(() => loop(animations, index + 1), speed);
  };

  const handleStart = () => {
    setIsRunning(true);
    const animations =
      algorithm === "bubble"
        ? bubbleSort(array)
        : algorithm === "selection"
        ? selectionSort(array)
        : algorithm === "insertion"
        ? insertionSort(array)
        : algorithm === "merge"
        ? mergeSort(array)
        : quickSort(array);
    loop(animations, 0);
  };

  useEffect(() => {}, [isRunning]);

  const handleSizeChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    setArraySize(value as number);
  };

  const handleSpeedChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    const inverted = 101 - (value as number);
    const speed = inverted * 5;
    setSpeed(speed);
  };

  return (
    <div className="app">
      <Header
        isRunning={isRunning}
        handleStart={handleStart}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        handleSizeChange={handleSizeChange}
        handleSpeedChange={handleSpeedChange}
      />
      <ArrayContainer array={array} selected={selected} speed={speed} />
    </div>
  );
};

export default App;
