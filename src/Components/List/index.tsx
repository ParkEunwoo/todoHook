import React from 'react';
import Item from './Item';
import './List.css';

interface Todo {
    id: number;
    title: string;
    state: string;
}

interface Props {
    todos: Array<Todo>;
}

const List: React.SFC<Props> = ({todos}) => {
    const todoList = todos.map(todo => <Item key={todo.id} title={todo.title} />)
    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default List;