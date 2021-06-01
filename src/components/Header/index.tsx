import React, { FC, useState } from "react";
import "./Header.css";
import { Algorithm } from "../App";

import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { IconButton, MenuItem } from "@material-ui/core";
import Sliders, { SliderChange } from "../Sliders";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
  isRunning: boolean;
  handleStart: React.MouseEventHandler<HTMLButtonElement>;
  handleStop: React.MouseEventHandler<HTMLButtonElement>;
  handleShuffle: React.MouseEventHandler<HTMLButtonElement>;
  algorithm: Algorithm;
  setAlgorithm: React.Dispatch<React.SetStateAction<Algorithm>>;
  handleSizeChange: SliderChange;
  handleSpeedChange: SliderChange;
}

/**
 * Header component for the app
 * @param props
 * @param props.isRunning disables the inputs
 * @param props.handleStart function called when pressing the start button (when isRunning is false)
 * @param props.handleStop function called when pressing the stop button (when isRunning is true)
 * @param props.handleShuffle function called when pressing the shuffle button
 * @param props.algorithm currently selected algorithm
 * @param props.setAlgorithm function to set the selected algorithm
 * @param props.handleSizeChange function called when size slider changes
 * @param props.handleSpeedChange function called when speed slider changes
 */
const Header: FC<Props> = ({
  isRunning,
  handleStart,
  handleStop,
  handleShuffle,
  algorithm,
  setAlgorithm,
  handleSizeChange,
  handleSpeedChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleAlgoChange = (e: React.ChangeEvent<any>) => {
    setAlgorithm(e.target.value);
  };

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__logo-container">
        <EqualizerIcon className="header__algo-icon" />
        <h1 className="header__title">
          Algorithm
          <br /> Visualizer
        </h1>
      </div>
      <form
        className={`header__actions ${open ? "header__actions--visible" : ""}`}
      >
        <div className="header__menu-heading">
          <span className="header__menu-title">Menu</span>
          <IconButton onClick={closeMenu} className="header__menu-button">
            <CloseIcon />
          </IconButton>
        </div>
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

        <Button
          variant="outlined"
          onClick={handleShuffle}
          className="header__button"
          disabled={isRunning}
        >
          Shuffle
        </Button>

        <Button
          variant="outlined"
          onClick={isRunning ? handleStop : handleStart}
          className="header__button"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
      </form>
      <IconButton onClick={openMenu} className="header__menu-button">
        <MenuIcon fontSize="large" />
      </IconButton>
    </header>
  );
};

export default Header;
