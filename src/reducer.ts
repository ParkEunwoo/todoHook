

type ActionType = {
    type: 'ADD_TODO'|'SET_INIT_DATA'|'CHANGE_TODO_STATUS';
    payload: any;
}

interface Todo {
    id: number;
    title: string;
    status: string;
}
  
const reducer = (todos:Array<Todo>, {type, payload}:ActionType) => {
    switch(type){
        case 'ADD_TODO':
            return [...todos, {title: payload, id : todos.length, status : 'todo'}];
        case 'SET_INIT_DATA':
            return payload ? payload : [];
        case 'CHANGE_TODO_STATUS':
            return todos.map(todo => {
                let status = todo.status;
                if(todo.id === +payload) {
                    status = todo.status === 'done' ? 'todo' : 'done';
                }
                return {...todo, status};
            });
        default:
            return;
    }
}

export default reducer;