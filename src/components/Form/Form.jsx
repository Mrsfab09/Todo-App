import { useState } from "react";
import { Button } from "../Button/Button";
import { FaPlus } from "react-icons/fa";
import { Alert } from "../Alert/Alert";
import styles from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setAlert(true);
    } else {
      setAlert(false);
      onFormSubmit(inputValue);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
      className={styles.form}
    >
      {showAlert && <Alert />}
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
