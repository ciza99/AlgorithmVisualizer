import React, { FC } from "react";
import "./Sliders.css";

import { Slider } from "@material-ui/core";
import { INITIAL_ARRAY_SIZE, INITIAL_SPEED } from "../../constants";

export type SliderChange =
  | ((event: React.ChangeEvent<{}>, value: number | number[]) => void)
  | undefined;

interface Props {
  isRunning: boolean;
  handleSpeedChange: SliderChange;
  handleSizeChange: SliderChange;
}

const Sliders: FC<Props> = ({
  isRunning,
  handleSpeedChange,
  handleSizeChange,
}) => {
  return (
    <div className="">
      <div className="sliders__container">
        <p>Speed:</p>
        <div className="sliders__wrapper">
          <Slider
            disabled={isRunning}
            defaultValue={INITIAL_SPEED}
            step={1}
            min={1}
            max={100}
            onChange={handleSpeedChange}
            valueLabelDisplay="auto"
            className=""
          />
        </div>
      </div>
      <div className="sliders__container">
        <p>Size:</p>
        <div className="sliders__wrapper">
          <Slider
            disabled={isRunning}
            defaultValue={INITIAL_ARRAY_SIZE}
            step={1}
            min={1}
            max={100}
            onChange={handleSizeChange}
            valueLabelDisplay="auto"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sliders;