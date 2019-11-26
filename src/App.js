import React, { useState } from 'react';

const initialTodos = [
  {
    id: 'a',
    task: 'Learn Javascript',
    complete: true,
  },
  {
    id: 'b',
    task: 'Learn React',
    complete: true,
  },
  {
    id: 'c',
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

  const handleSubmit = event => {
    // alert(task);
    if (task) {
      // add new todo item
      setTodos(todos.concat({ id: 'd', task, complete: false }));
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
            <label>{todo.task}</label>
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
