const { useState } = require("react");

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value: boolean | null) => {
    setValue((currentValue: boolean) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue];
};

export default useToggle;
