import React, { useState } from 'react';
import uuid from 'uuid/v4';

const initialTodos = [
  {
    id: uuid(),
    task: 'Learn Javascript',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn React',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn Redux',
    complete: false,
  }
]

const App = () => {
  const[todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState('');

  const handleChangeInput = (event) => {
    setTask(event.target.value);
  }

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  const handleSubmit = event => {
    // alert(task);
    if (task) {
      // add new todo item
      setTodos(todos.concat({ id: uuid(), task, complete: false }));
    }
    // makes the input field's value empty again after submitting the new todo item
    setTask('');

    // prevents the default browser behaviour of refreshing the page after clicking on submit button
    event.preventDefault();
    
  }

  return (   
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              {todo.task}
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>  
  );
}

export default App;
