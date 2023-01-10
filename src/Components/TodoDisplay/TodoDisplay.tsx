import React from "react";
import classes from "./TodoDisplay.module.css"

interface TodoDisplayProps {
  todo: string;
}

const TodoDisplay = ({ todo }: TodoDisplayProps) => {
  return <span className={classes.display}>{todo}</span>;
};

export default TodoDisplay;
