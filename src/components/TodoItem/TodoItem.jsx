import { Button } from "../Button/Button";
import { FaCheck, FaTrashAlt, FaEdit } from "react-icons/fa";
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
