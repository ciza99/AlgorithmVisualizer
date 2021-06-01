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

/**
 * Component to render an array item
 * @param props
 * @param props.value value of the item
 * @param props.isSelected marks the item as selected
 * @param props.height height of the item
 * @param props.width width of the item
 * @param props.margin total margin on both sides of the item
 * @param props.speed speed used for the transitions
 * @param props.textSize size of the text under the array item
 */
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
