import React, { FC } from "react";
import "./Header.css";
import { Algorithm } from "../App/App";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import Sliders, { SliderChange } from "../Sliders";

interface IProps {
  isRunning: boolean;
  handleStart: React.MouseEventHandler<HTMLButtonElement>;
  algorithm: Algorithm;
  setAlgorithm: React.Dispatch<React.SetStateAction<Algorithm>>;
  handleSizeChange: SliderChange;
  handleSpeedChange: SliderChange;
}

const Header: FC<IProps> = ({
  isRunning,
  handleStart,
  algorithm,
  setAlgorithm,
  handleSizeChange,
  handleSpeedChange,
}) => {
  const handleAlgoChange = (e: React.ChangeEvent<any>) => {
    setAlgorithm(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__logo-container">
        <h1>
          Algorithm
          <br /> Visualizer
        </h1>
      </div>
      <form className="header__actions">
        <Select
          value={algorithm}
          onChange={handleAlgoChange}
          className="header__algo-selection"
          disabled={isRunning}
        >
          <MenuItem value={"bubble"}>BubbleSort</MenuItem>
          <MenuItem value={"insertion"}>InsertionSort</MenuItem>
          <MenuItem value={"selection"}>SelectionSort</MenuItem>
          <MenuItem value={"merge"}>MergeSort</MenuItem>
          <MenuItem value={"quick"}>QuickSort</MenuItem>
        </Select>

        <Sliders
          isRunning={isRunning}
          handleSizeChange={handleSizeChange}
          handleSpeedChange={handleSpeedChange}
        />

        <Button variant="outlined" onClick={handleStart} disabled={isRunning}>
          Start
        </Button>
      </form>
    </header>
  );
};

export default Header;
