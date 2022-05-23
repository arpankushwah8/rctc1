import React from "react";
import styles from "./counter.module.css";
import Task from "../Task/Task"

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button"></button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button"></button>
      <Task></Task>
    </div>
  );
};

export default Counter;
