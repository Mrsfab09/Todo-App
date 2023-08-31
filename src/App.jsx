import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
// import { getSubHeading } from "./utils/getSubHeading";

function App() {
  function addItem(newTodoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { name: newTodoName, done: false, id: prevTodos.at(-1).id + 1 },
    ]);
    setIsFormShown(false);
  }

  function removeItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function doneItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          done: true,
        };
      })
    );
  }

  const [isFormShown, setIsFormShown] = useState(false);

  const [todos, setTodos] = useState([
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Wyrzucić śmieci", done: true, id: 2 },
  ]);

  return (
    <>
      <h1>TODO LIST</h1>
      {/* <h2>{getSubHeading(todos.length)}</h2> */}
      <div className={styles.wrapperButton}>
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
        {isFormShown && (
          <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
        )}
      </div>
      <div className={styles.wrapper}>
        <ul>
          {todos.map(({ name, done, id }) => (
            <TodoItem
              key={id}
              name={name}
              done={done}
              onDeleteButtonClick={() => removeItem(id)}
              onDoneButtonClick={() => doneItem(id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
