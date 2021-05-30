import React, { FC, useMemo } from "react";
import "./ArrayItem.css";

interface Props {
  value: number;
  height: number;
  isSelected: boolean;
  width: number;
  margin: number;
}

const ArrayItem: FC<Props> = ({ value, isSelected, height, width, margin }) => {
  const className = isSelected ? "array-item--selected" : "";
  const textSize = useMemo(() => {
    const size = Math.min(width * 0.75, 35);
    return size >= 8 ? size : 0;
  }, [width]);

  return (
    <div
      className={`array-item ${className}`}
      style={{ width, margin: `0 ${margin / 2}px`, height: `${height}%` }}
    >
      <span
        className="array-item__text"
        style={{ fontSize: `${textSize}px`, bottom: `-${textSize + 10}px` }}
      >
        {value}
      </span>
    </div>
  );
};

export default ArrayItem;
