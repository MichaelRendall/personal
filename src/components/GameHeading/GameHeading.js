import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useToggle from "../../hooks/useToggle";
import Dropdown from "../UI/Dropdown";
import classes from "./GameHeading.module.scss";

const GameHeading = (props) => {
  const [dropdown, setDropdown] = useToggle(false);

  return (
    <>
      <section className={classes.heading}>
        <h1>{props.heading}</h1>
        <div className={`${classes.icon} ${dropdown && classes.active}`} onClick={setDropdown}>
          <FontAwesomeIcon icon={["fas", "cog"]} className="icon" />
        </div>
      </section>
      <Dropdown show={dropdown}>{props.children}</Dropdown>
    </>
  );
};

export default GameHeading;
