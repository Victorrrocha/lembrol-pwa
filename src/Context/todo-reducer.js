import { sendLogEvent } from "../firebase/analytics";

const deleteTodo = (todos, id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    return { todos: updatedTodos };
};

const editTodo = (todos, edited) => {
    todos[todos.findIndex((todo) => todo.id === edited.id)] = edited;
    return { todos };
};

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD TODO":
            sendLogEvent("User created a new todo");
            return { todos: [...state.todos, action.item] };
        case "EDIT":
            sendLogEvent("User edited a todo");
            return editTodo(state.todos, action.item);
        case "DELETE":
            sendLogEvent("User deleted a todo");
            return deleteTodo(state.todos, action.item);
        default:
            return state;
    }
};

export default todoReducer;
