import React from "react";
import classes from "./Display.module.css";

const Display = ({ formula, output }) => {
  return (
    <div>
      <div className={ [classes.display, classes.display__formula].join(' ') }>
        { formula }
      </div>
      <div className={ classes.display } id="display">
        { output }
      </div>
    </div>
  );
};

export default Display;
