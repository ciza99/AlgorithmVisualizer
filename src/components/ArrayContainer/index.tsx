import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import "./ArrayContainer.css";

import ArrayItem from "../ArrayItem";

interface Props {
  array: number[];
  selected: number[];
  speed: number;
}

const computeSizes = (arrayLength: number) => {
  const fullSize = Math.max((window.innerWidth - 50) / arrayLength, 3);
  const width = fullSize * 0.75;
  const margin = fullSize * 0.25;
  return { width, margin };
};

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
