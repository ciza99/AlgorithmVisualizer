import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import "./ArrayContainer.css";

import ArrayItem from "../ArrayItem";

interface Props {
  array: number[];
  selected: number[];
  speed: number;
}

/**
 * Computes the sizes of the array items based on the window width
 * @param arrayLength length of the array
 * @returns width and margin of the array items
 */
const computeSizes = (arrayLength: number) => {
  const fullSize = Math.max((window.innerWidth - 50) / arrayLength, 3);
  const width = fullSize * 0.75;
  const margin = fullSize * 0.25;
  return { width, margin };
};

/**
 * Component that encapsulates the array items
 * @param props
 * @param props.array current array to render
 * @param props.selected array of the indexes of selected elements
 * @param props.speed speed used for the transitions
 */
const ArrayContainer: FC<Props> = ({ array, selected, speed }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [sizes, setSizes] = useState(() => computeSizes(array.length));

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const updateWidth = useCallback(() => {
    setSizes(computeSizes(array.length));
  }, [array.length]);

  useEffect(() => {
    updateWidth();
  }, [width, updateWidth]);

  /** Recalculate the text size whenever the width changes */
  const textSize = useMemo(() => {
    const size = Math.min(sizes.width * 0.75, 35);
    console.log(size);
    return size >= 8 ? size : 0;
  }, [sizes.width]);

  return (
    <div className="array-container">
      {array.map((value, index) => (
        <ArrayItem
          speed={speed}
          textSize={textSize}
          height={(100 / array.length) * value}
          width={sizes.width}
          margin={sizes.margin}
          value={value}
          key={index}
          isSelected={selected.includes(index)}
        />
      ))}
    </div>
  );
};

export default ArrayContainer;
