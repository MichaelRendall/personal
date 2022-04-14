import classes from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <>
      <div className={classes.background}></div>
      <div className={classes.spinner}></div>
    </>
  );
};

export default Spinner;
