import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import classes from "./Select.module.scss";

interface SelectProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  param: string;
  refValue?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dropDownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get(props.param) || null;
  const selectedOption = props.options.findIndex(
    (option) => option.value === filter
  );

  const clickOutsideHandler = () => {
    setOpen(false);
  };

  useOnClickOutside(dropDownRef, clickOutsideHandler);

  const changeOptionHandler = (value: string | null) => {
    if (value !== null) {
      queryParams.set(props.param, value);
      setInputValue(value);
    } else {
      queryParams.delete(props.param);
      setInputValue("");
    }
    navigate(`?${queryParams}`);
    setOpen(false);
  };

  let placeholder = "Please Select";
  if (props.options[selectedOption]) {
    placeholder = props.options[selectedOption].label;
  } else if (props.placeholder) {
    placeholder = props.placeholder;
  }

  const listItems = props.options.map((option) => {
    let liClasses: string;
    if (props.options[selectedOption]) {
      liClasses =
        props.options[selectedOption].label === option.label
          ? classes.active
          : "";
    }

    return (
      <li
        className={liClasses!}
        key={option.value}
        value={option.value}
        onClick={() => changeOptionHandler(option.value)}
      >
        {option.label}
      </li>
    );
  });

  return (
    <div className={`input__wrapper`}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.options[selectedOption] && (
        <small
          className={classes.clear}
          onClick={() => changeOptionHandler(null)}
        >
          Clear
        </small>
      )}
      <div id={props.id} className={classes.wrapper} ref={dropDownRef}>
        <div
          className={`${classes.select} ${open && classes.open}`}
          onClick={() => setOpen(!open)}
        >
          {placeholder}
          <span className={classes.arrow}></span>
        </div>
        {open && (
          <div className={`${classes.select__options} width100`}>
            <ul>{listItems}</ul>
          </div>
        )}
      </div>
      <input
        type="hidden"
        className={props.id}
        value={inputValue}
        ref={props.refValue}
      />
    </div>
  );
};

export default Select;
