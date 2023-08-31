import { useState } from "react";
import { Button } from "../Button/Button";
import { FaPlus } from "react-icons/fa";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(inputValue);
      }}
      className={styles.form}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={styles.input}
        placeholder="Add new task. . ."
        type="text"
      />
      <Button>
        <FaPlus />
      </Button>
    </form>
  );
}
