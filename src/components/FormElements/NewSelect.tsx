import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOnClickOutside } from "usehooks-ts";
import classes from "./NewSelect.module.scss";

interface SelectProps {
  id?: string;
  element: string;
  label: string;
  options: { value: string; label: string }[];
  param: string;
}

const NewSelect: React.FC<SelectProps> = (props) => {
  const [open, setOpen] = useState(false);
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

  const changeOptionHandler = (value: string) => {
    if (value !== null) {
      queryParams.set(props.param, value);
    } else {
      queryParams.delete(props.param);
    }
    navigate(`?${queryParams}`);
  };

  return (
    <div className={classes.wrapper} ref={dropDownRef}>
      <div className={classes.select} onClick={() => setOpen(!open)}>
        {props.options[selectedOption].label}
      </div>
      {open && (
        <div className={classes.select__options}>
          <ul>
            {props.options.map((option) => (
              <li
                className={classes.active}
                key={option.value}
                value={option.value}
                onClick={() => changeOptionHandler(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewSelect;
