import { useState } from "react";
import { Button } from "../Button/Button";
import { FaPlus } from "react-icons/fa";
import styles from "./Form.module.css";
import { WrongMessage } from "../WrongMessage/WrongMessage/";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [showErrorMessage, setErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
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
      {showErrorMessage && <WrongMessage />}
    </form>
  );
}
