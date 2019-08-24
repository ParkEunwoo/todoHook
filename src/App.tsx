import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import List from './Components/List';

interface Todo {
  id: number;
  title: string;
  state: string;
}

const App: React.FC<{Todos?: Array<Todo>}> = ({Todos = []}) => {
  const [todos, setTodos] = useState(Todos);
  const [newTodo, setNewTodo] = useState();

  const addTodo = (e:React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({id: todos.length, title: e.target.value, state:'todo'});
  }

  useEffect(() => {
    setTodos([{id:0, title:'리액트 훅 공부', state:'todo'}]);
  }, [])

  return (
    <>
      <Header />
      <Form addTodo={addTodo} changeInput={changeInput}/>
      <List todos={todos}/>
    </>
  );
}

export default App;
