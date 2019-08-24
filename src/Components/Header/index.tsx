import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
          <h1>ToDoList</h1>
          <div className="notification">1</div>
        </header>
    );
}

export default Header
