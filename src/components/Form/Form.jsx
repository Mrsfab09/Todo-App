import { useState } from "react";
import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { Alert } from "../Alert/Alert";
import styles from "./Form.module.css";
import { Button } from "../Button/Button";

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
    <div className={styles.wrapperForm}>
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
          placeholder="Task. . ."
          type="text"
        />
        <IconContext.Provider value={{ color: "#3498db", size: "35px" }}>
          <BsFillCalendarCheckFill />
        </IconContext.Provider>
        <Button>
          <FaPlus />
        </Button>
      </form>
    </div>
  );
}
