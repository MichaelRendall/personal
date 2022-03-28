import React, { useContext } from "react";
import Wrapper from "../UI/Wrapper";
import classes from "./Thumbnails.module.scss";
import { ThemeContext } from "../../context/theme-context";
import { FlagContext } from "../../context/flag-context";

const Thumbnails: React.FC = () => {
  const flagCtx = useContext(FlagContext);
  const themeCtx = useContext(ThemeContext);

  const thumbnails = flagCtx.flags.map((flag, index) => {
    return (
      <span
        key={flag.name}
        className={`${classes.thumb} ${
          index === flagCtx.currentFlag ? classes.active : ""
        } ${flag.correct ? classes.correct : ""}`}
        onClick={() => flagCtx.setCurrentFlag(index)}
      >
        <img src={flag.thumb} alt={`thumbnail for ${flag.name}`} />
      </span>
    );
  });

  return (
    <Wrapper size="auto">
      <div className={`${classes.thumbs} ${classes[themeCtx.theme]}`}>
        {thumbnails}
      </div>
    </Wrapper>
  );
};

export default Thumbnails;
