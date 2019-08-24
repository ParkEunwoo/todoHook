import React from 'react';
import './Form.css';

interface Props {
    addTodo:(e:React.MouseEvent<HTMLInputElement>) => void;
    changeInput:(e:React.ChangeEvent<HTMLInputElement>) => void;
}
const Form: React.SFC<Props> = ({addTodo, changeInput}) => {
    return (
        <form>
            <input type="text" onChange={changeInput} />
            <input type="submit" value="확인" onClick={addTodo} />
        </form>
    );
}

export default Form;
