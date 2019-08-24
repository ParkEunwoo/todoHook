import React, {useContext} from 'react';
import Item from './Item';
import './List.css';
import { TodoContext } from './../../Store';

const List: React.FC = () => {
    const {todos, loading} = useContext(TodoContext);
    let todoList = loading ? <div>loading...</div> : todos.map(todo => <Item key={todo.id} title={todo.title} state={todo.state}/>);

    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default List;