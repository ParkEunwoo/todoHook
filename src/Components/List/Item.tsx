import React from 'react';
import './Item.css';

interface Props {
    title: string;
    state: string;
}

const Item: React.SFC<Props> = ({title, state}) => {
    return (
        <li className={state}>{title}</li>
    )
}

export default Item;