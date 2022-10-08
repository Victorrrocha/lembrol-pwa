import { useReducer } from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import dayjs from "dayjs";
import { CONSTANTS } from "../helpers/constants";

const todo_db = [
    {
        id: "1",
        title: "Projeto da Pós Graduação",
        status: false,
        importance: CONSTANTS.URGENT_AND_IMPORTANT,
        scheduled_data: dayjs(),
        begins_at: dayjs(),
        ends_at: dayjs(),
        time_before: "15",
        time_after: "30",
    },
    {
        id: "2",
        title: "Projeto da Pós Graduação",
        status: false,
        importance: CONSTANTS.COULD_BE_RESCHEDULED,
        scheduled_data: dayjs(),
        begins_at: dayjs(),
        ends_at: dayjs(),
        time_before: "15",
        time_after: "30",
    },
    {
        id: "3",
        title: "Projeto da Pós Graduação",
        status: false,
        importance: CONSTANTS.COULD_BE_DELEGATED,
        scheduled_data: dayjs(),
        begins_at: dayjs(),
        ends_at: dayjs(),
        time_before: "15",
        time_after: "30",
    },
    {
        id: "4",
        title: "Projeto da Pós Graduação",
        status: false,
        importance: CONSTANTS.NOT_IMPORTANT,
        scheduled_date: dayjs(),
        begins_at: dayjs(),
        ends_at: dayjs(),
        time_before: "15",
        time_after: "30",
    },
];

const defaultTodoState = {
    todos: [],
};

export const TodoProvider = ({ children }) => {
    const [storeState, dispatchTodoAction] = useReducer(
        todoReducer,
        defaultTodoState
    );

    const addNewTodo = (todo) => {
        dispatchTodoAction({ type: "ADD TODO", item: todo });
    };

    const editTodo = (todo) => {
        dispatchTodoAction({ type: "EDIT", item: todo });
    };

    const deleteTodo = (id) => {
        dispatchTodoAction({ type: "DELETE", item: id });
    };

    const getTodoById = (id) => {
        return storeState.todos.find((todo) => todo.id === id);
    };

    const getTodoByImportance = (importance) => {
        return storeState.todos.filter(
            (todo) => todo.importance === importance
        );
    };

    const getTodosForToday = () => {
        const today = dayjs().get("date");
        return storeState.todos.filter(
            (todo) => todo.scheduled_date?.get("date") === today
        );
    };

    const loginUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        // dispatchTodoAction({ type: "ADD USER", item: user });
    };

    const todoContext = {
        user: {},
        loginUser,
        todos: storeState.todos,
        addNewTodo,
        editTodo,
        deleteTodo,
        getTodoById,
        getTodoByImportance,
        getTodosForToday,
    };

    return (
        <TodoContext.Provider value={todoContext}>
            {children}
        </TodoContext.Provider>
    );
};
