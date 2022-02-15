import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useToggle from "../../hooks/useToggle";
import Dropdown from "../UI/Dropdown";
import classes from "./GameHeading.module.scss";

interface GameHeadingProps {
  heading: string;
}

const GameHeading: React.FC<GameHeadingProps> = (props) => {
  const [dropdown, setDropdown] = useToggle(false);

  return (
    <>
      <section className={classes.heading}>
        <div className={`${classes.icon} ${dropdown && classes.active}`}>
          <span onClick={setDropdown} aria-label="Open Game Settings">
            <FontAwesomeIcon icon={["fas", "cog"]} className="icon" />
          </span>
        </div>
        <h1>{props.heading}</h1>
        <span></span>
      </section>
      <Dropdown show={dropdown}>{props.children}</Dropdown>
    </>
  );
};

export default GameHeading;
