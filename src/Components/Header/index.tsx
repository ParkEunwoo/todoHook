import React, {useContext} from 'react';
import './Header.css';
import { TodoContext } from './../../Store';

const Header: React.FC = () => {
    const {todos} = useContext(TodoContext);
    console.log(todos);
    return (
        <header>
          <h1>ToDoList</h1>
          <div className="notification">{todos.filter(todo => todo.state='todo').length}</div>
        </header>
    );
}

export default Header
