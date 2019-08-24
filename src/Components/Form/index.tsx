import React, {useRef} from 'react';
import './Form.css';

interface Props {
    addTodo:(title:string) => void;
}

const Form: React.SFC<Props> = ({addTodo}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodoData = (e:React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();
      if(inputRef && inputRef.current){
        addTodo(inputRef.current.value);
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
