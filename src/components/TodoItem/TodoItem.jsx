import { Button } from "../Button/Button";
import { IconContext } from "react-icons";
import { FaCheck, FaTrashAlt, FaEdit, FaGripVertical } from "react-icons/fa";
import styles from "./TodoItem.module.css";

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onEditButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={styles.item}>
      <IconContext.Provider value={{ color: "grey", size: "17px" }}>
        <button className={styles.button}>
          <FaGripVertical />
        </button>
      </IconContext.Provider>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && (
        <>
          <Button onClick={onDoneButtonClick}>
            <FaCheck />
          </Button>
          <Button onClick={onEditButtonClick}>
            <FaEdit />
          </Button>
        </>
      )}

      <Button onClick={onDeleteButtonClick}>
        <FaTrashAlt />
      </Button>
    </li>
  );
}
