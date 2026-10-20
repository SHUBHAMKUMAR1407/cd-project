import { useState } from "react";
import "../src/projects/Todo/Todo.css";
import { MdDeleteForever } from "react-icons/md";
import { MdCheck } from "react-icons/md";

export const Keys = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // handle input
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  console.log(task);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>

      <section id="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
              placeholder="Enter a task"
            />
          </div>

          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>

      <section className="myUnorderedList">
        <ul className="todo-list">
          {task.map((curTask, index) => {
            return <TodoList key={index} data={curTask} />;
          })}
        </ul>
      </section>
    </section>
  );
};

// TodoList Component
const TodoList = ({ data }) => {
  return (
    <li className="todo-item">
      <span>{data}</span>
      <button>
        <MdCheck className="check-btn" />
      </button>
      <button>
        <MdDeleteForever className="delete-btn" />
      </button>
    </li>
  );
};

       


