import React from "react";
import useToggle from "../hooks/useToggle";

const NavContext = React.createContext({
  drawerShowing: false,
  toggleDrawer: () => {},
});

export const NavContextProvider = (props) => {
  const [drawerShowing, toggleDrawer] = useToggle(false);

  return (
    <NavContext.Provider
      value={{
        drawerShowing: drawerShowing,
        toggleDrawer: toggleDrawer,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
