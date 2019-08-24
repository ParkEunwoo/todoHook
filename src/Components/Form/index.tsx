import React, {useContext, useRef} from 'react';
import './Form.css';
import { TodoContext } from './../../Store';

const Form: React.FC = () => {
    const {dispatch} = useContext(TodoContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodoData = (e:React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      if(inputRef && inputRef.current){
        dispatch && dispatch({type:'ADD_TODO', payload:inputRef.current.value});
        inputRef.current.value = '';
      }
    }

    return (
        <form>
            <input type="text" ref={inputRef} />
            <input type="submit" value="확인" onClick={addTodoData} />
        </form>
    );
}

export default Form;
