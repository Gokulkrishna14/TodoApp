import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [{
        id: "1",
        text : "Hello",
        completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    editTodo: (id, todo) => {},
    completeTodo : (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider

