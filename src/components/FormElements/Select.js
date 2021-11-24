import React from "react";
import { useNavigate, useLocation } from "react-router";
import ReactSelect from "react-select";
import "./Select.scss";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#f9f9f9",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#4c5464",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#f9f9f9",
  }),
  option: (provided, state) => {
    let backgroundColor = "#f9f9f9";
    let color = "#4c5464";
    if (state.isSelected || state.isFocused) {
      backgroundColor = "#fc7061";
      color = "#f9f9f9";
    }
    return {
      ...provided,
      "&:active": { backgroundColor: "#fab0a8" },
      backgroundColor,
      color,
    };
  },
};

const Select = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get(props.param) || null;

  const initialValue = props.options.findIndex(
    (option) => option.value === filter
  );

  const changeFilterHandler = (selectedOption) => {
    if (selectedOption !== null) {
      queryParams.set(props.param, selectedOption.value);
    } else {
      queryParams.delete(props.param);
    }
    navigate(`?${queryParams}`);
  };

  return (
    <ReactSelect
      styles={customStyles}
      isSearchable={props.isSearchable}
      isClearable={props.isClearable}
      placeholder={props.placeholder}
      isMulti={props.isMulti}
      options={props.options}
      onChange={changeFilterHandler}
      defaultValue={props.options[initialValue]}
    />
  );
};

export default Select;
