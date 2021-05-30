import React, { FC } from "react";
import "./ArrayItem.css";

interface Props {
  value: number;
  height: number;
  isSelected: boolean;
  width: number;
  margin: number;
  speed: number;
  textSize: number;
}

const ArrayItem: FC<Props> = ({
  value,
  isSelected,
  height,
  width,
  margin,
  speed,
  textSize,
}) => {
  const className = isSelected ? "array-item--selected" : "";

  return (
    <div
      className={`array-item ${className}`}
      style={{
        width,
        margin: `0 ${margin / 2}px`,
        height: `${height}%`,
        transitionDuration: `${speed}ms`,
      }}
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
