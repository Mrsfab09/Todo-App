import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubHeading } from "./utils/getSubHeading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const todos = [
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubHeading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => {
              setIsFormShown(true);
            }}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={() => {
            alert("test");
          }}
        />
      )}
      <ul>
        {todos.map(({ name, done, id }) => (
          <TodoItem key={id} name={name} done={done} />
        ))}
      </ul>
    </div>
  );
}

export default App;
