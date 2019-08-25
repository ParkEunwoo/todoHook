import React, {useContext, useRef} from 'react';
import './Item.css';
import { TodoContext } from './../../Store';

interface Props {
    id: number;
    title: string;
    status: string;
}

const Item: React.FC<Props> = ({id, title, status}) => {
    const {dispatch} = useContext(TodoContext);
    const itemRef = useRef<HTMLLIElement>(null);

    const toggleItem = () => {
        if(itemRef && itemRef.current){
            const {id} = itemRef.current.dataset;
            dispatch && dispatch({type:'CHANGE_TODO_STATUS', payload:id});
        }
    }
    return (
        <li data-id={id} className={status} ref={itemRef} onClick={toggleItem}>{title}</li>
    )
}

export default Item;