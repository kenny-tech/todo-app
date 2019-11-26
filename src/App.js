import React from 'react';

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
  return (   
    <div>
      <ul>
        {initialTodos.map(todo => (
          <li key={todo.id}>
            <label>{todo.task}</label>
          </li>
        ))}
      </ul>
    </div>  
  );
}

export default App;
