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

  const addTodo = (title:string) => {
    const newTodo = {id: todos.length, title, state:'todo'}
    setTodos([...todos, newTodo]);
  }

  useEffect(() => {
    setTodos([{id:0, title:'리액트 훅 공부', state:'todo'}]);
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Form addTodo={addTodo}/>
      <List todos={todos}/>
    </>
  );
}

export default App;
