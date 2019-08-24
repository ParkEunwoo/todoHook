

type ActionType = {
    type: 'ADD_TODO'|'SET_INIT_DATA'|'CHANGE_TODO_STATE'|'SAVE_DATA';
    payload: any;
}

interface Todo {
    id: number;
    title: string;
    state: string;
}
  
const reducer = (todos:Array<Todo>, {type, payload}:ActionType) => {
    switch(type){
        case 'ADD_TODO':
            return [...todos, {title: payload, id : todos.length, state : 'todo'}];
        case 'SET_INIT_DATA':
            return payload?payload:[];
        case 'CHANGE_TODO_STATE':
            return todos.map(todo => {
                if(todo.id === +payload) {
                    todo.state === "done" ? todo.state = "todo" : todo.state = "done";
                }
                return todo;
            });
        case 'SAVE_DATA':
            return;
        default:
            return;
    }
}

export default reducer;