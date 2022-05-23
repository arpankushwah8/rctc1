import React from "react";
import styles from "./addTask.module.css";
import Counter from "../Counter/Counter";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" />
      <button data-cy="add-task-button"></button>
      <Counter></Counter>
    </div>
  );
};

export default AddTask;
