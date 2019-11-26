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
  const [task, setTask] = useState('');

  const handleChangeInput = (event) => {
    setTask(event.target.value);
  }

  return (   
    <div>
      <ul>
        {initialTodos.map(todo => (
          <li key={todo.id}>
            <label>{todo.task}</label>
          </li>
        ))}
      </ul>

      <input type="text" value={task} onChange={handleChangeInput} />
    </div>  
  );
}

export default App;
