import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, discription: "Hello Champ! Welcome to the Todo App. You can add, remove and update your todos. Click on the pen icon to update the todo. Click on the plus icon to add a new todo. You can also Dragme Have fun!"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                discription: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state , action)=> {
            console.log(action.payload.discription)
            state.todos =  state.todos.map((todo)=>(todo.id === action.payload.id ? {...todo , discription:action.payload.discription}: todo
            ))
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer