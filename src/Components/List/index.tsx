import React, {useContext} from 'react';
import Item from './Item';
import './List.css';
import { TodoContext } from './../../Store';

const List: React.FC = () => {
    const {todos, loading} = useContext(TodoContext);
    
    let todoList = loading || todos.length===0 ? <div>Please add todo</div> : todos.map(todo => <Item key={todo.id} {...todo}/>);

    return (
        <ul>
            {todoList}
        </ul>
    );
}

export default List;