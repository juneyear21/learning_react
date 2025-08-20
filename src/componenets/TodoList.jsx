import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

    const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
    };

  return (
    <div>
      TodoList
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add the task"
      />
      <button onClick={addTodo}>Add to Todo</button>
      <ul>
        {todo.map((t, index) => (
          <div key={index}>
            <li>
              {t}
            </li><button onClick={() => deleteTodo(index)}><MdDeleteForever/></button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;