import logo from './logo.svg'
import './App.css'
import { Timer } from './cmp/timer'
import { TodoApp } from './cmp/todo-app'

export const RootCmp = () => {
  return (
    <div className="App">
      {/* <Timer time={10} /> */}
      <TodoApp />
    </div>
  );
}

