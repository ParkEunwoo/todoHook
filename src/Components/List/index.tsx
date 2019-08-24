import React from 'react';
import Item from './Item';
import './List.css';

const List: React.FC = () => {
    return (
        <ul>
            <Item />
            <Item />
            <Item />
        </ul>
    );
}

export default List;