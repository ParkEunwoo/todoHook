import React from 'react';
import './Header.css';

interface Todo {
  id: number;
  title: string;
  state: string;
}

interface Props {
  todos: Array<Todo>;
}

const Header: React.SFC<Props> = ({todos}) => {
    return (
        <header>
          <h1>ToDoList</h1>
          <div className="notification">{todos.filter(todo => todo.state='todo').length}</div>
        </header>
    );
}

export default Header
