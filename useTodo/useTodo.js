import { useEffect, useReducer } from "react";
import { todoReducer } from "./TodoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodo = () =>{

    const [todos, dispatch] = useReducer(todoReducer, [], init)

   
    useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos])
    
   
    
    const handleNewTodo = ( todo) =>{
     
        const action = {
            type: 'Todo_add',
            payload: todo
        }

        dispatch(action);      
    }

    const handleRemoveTodo = (id) => {

        const action = {
            type: 'Todo_remove',
            payload: id
        }

        dispatch(action);     

    }

    const handleToggleTodo = (id) =>{

        const action = {
            type: 'Todo_toggle',
            payload: id
        }

        dispatch(action);  

    }


    return {
        handleToggleTodo,
        handleRemoveTodo,
        handleNewTodo,
        todos
    }
}; 