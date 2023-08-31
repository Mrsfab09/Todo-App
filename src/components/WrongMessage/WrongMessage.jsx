import styles from "./WrongMessage.module.css";

export function WrongMessage() {
  return (
    <div className={styles.container}>
      <span>The field cannot be empty</span>
    </div>
  );
}
