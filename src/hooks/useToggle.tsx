import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value?: boolean) => {
    setValue((currentValue: boolean) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue] as const;
};

export default useToggle;
