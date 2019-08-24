import React, {useContext} from 'react';
import './Item.css';
import { TodoContext } from './../../Store';

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