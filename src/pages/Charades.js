import React from "react";
import useToggle from "../hooks/useToggle";
import Button from "../components/FormElements/Button";
import Dropdown from "../components/UI/Dropdown";
import Input from "../components/FormElements/Input";
//import classes from "./Charades.module.scss";

const themeOptions = [
  { value: "festive", label: "Festive" },
  { value: "easter", label: "Easter" },
];

const categoryOptions = [
  { value: "film", label: "Films" },
  { value: "tv", label: "TV Shows" },
  { value: "song", label: "Songs" },
  { value: "action", label: "Actions" },
];

const timerOptions = [
  { value: "30s", label: "30 Seconds" },
  { value: "1m", label: "1 Minute" },
  { value: "2m", label: "2 Minutes" },
  { value: "5m", label: "5 Minutes" },
];

const Charades = () => {
  const [dropdown, setDropdown] = useToggle(false);
  return (
    <section className="">
      <Button
        name="Settings"
        filter={true}
        active={dropdown}
        onClick={setDropdown}
      />
      <Dropdown show={dropdown}>
        <Input
          element="select"
          options={themeOptions}
          isSearchable={false}
          isClearable={true}
          placeholder="Standard"
          label="Theme"
          param="theme"
        />
        <Input
          element="select"
          options={categoryOptions}
          isSearchable={true}
          isClearable={true}
          placeholder="All Categories"
          label="Category"
          param="cat"
        />
        <Input
          element="select"
          options={timerOptions}
          isClearable={true}
          placeholder="No Limits"
          label="Time Limit"
          param="time"
        />
      </Dropdown>
      <h1>charades</h1>
    </section>
  );
};

export default Charades;
