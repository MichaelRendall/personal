import { IoSettingsSharp } from "react-icons/io5";

import useToggle from "../../hooks/useToggle";
import Dropdown from "../UI/Dropdown";
import classes from "./GameHeading.module.scss";

interface GameHeadingProps {
  heading: string;
  showSettings?: boolean;
}

const GameHeading: React.FC<GameHeadingProps> = (props) => {
  const [dropdown, setDropdown] = useToggle(false);

  return (
    <>
      <section className={classes.heading}>
        <div className={`${classes.icon} ${dropdown && classes.active}`}>
          {props.showSettings && (
            <IoSettingsSharp
              className={`${dropdown && classes.active}`}
              onClick={() => setDropdown()}
              aria-label="Open Game Settings"
            />
          )}
        </div>
        <h1>{props.heading}</h1>
        <span></span>
      </section>
      {props.showSettings && (
        <Dropdown show={dropdown}>{props.children}</Dropdown>
      )}
    </>
  );
};

export default GameHeading;
