import React from 'react';
import './Item.css';

interface Props {
    title: string;
}

const Item: React.SFC<Props> = ({title}) => {
    return (
        <li>{title}</li>
    )
}

export default Item;