import React, {useEffect, useReducer} from 'react';
import useLoad from './util/useLoad';
import reducer from './reducer';

interface Todo {
    id: number;
    title: string;
    state: string;
}
type ActionType = {
    type: 'ADD_TODO'|'SET_INIT_DATA'|'CHANGE_TODO_STATE';
    payload: any;
}

interface TodoInterface {
    todos: Array<Todo>;
    loading: boolean;
    dispatch: React.Dispatch<ActionType>;
}

export const TodoContext = React.createContext<TodoInterface | null>(null);

interface Props {

}

const Store:React.SFC<Props & {Todos?: Array<Todo>}> = (props, {Todos = []}) => {
    const [todos, dispatch] = useReducer(reducer, Todos);


    const setInitData = (initData: any) => {
        dispatch({type:'SET_INIT_DATA', payload:initData})
      }
    
    const loading = useLoad(setInitData, 'todos');
  
    return (
        <TodoContext.Provider value={{todos, loading, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default Store;