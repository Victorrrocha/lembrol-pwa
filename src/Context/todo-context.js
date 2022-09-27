import { createContext } from "react";

const TodoContext = createContext({
    user: {},
    todos: [],
    loginUser: () => {},
    addNewTodo: () => {},
    editTodo: () => {},
    deleteTodo: () => {},
    getTodoByImportance: () => {},
    getTodosForToday: () => {},
});

export default TodoContext;
