import Hamburger from "./hamburger/Hamburger";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Hamburger />
      <div className={classes.logo}>MICHAEL<br />RENDALL</div>
      <div></div>
    </header>
  );
};

export default Header;
