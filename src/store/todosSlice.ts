import {createSlice} from "@reduxjs/toolkit"
import {TodoModel} from "../models/Todo"

interface TodosState {
  todos: TodoModel[]
}

const initialState: TodosState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: {payload: TodoModel}) => {
      state.todos.push(action.payload)
    },
    delete: (state, action: {payload: string}) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleStatus: (state, action) => {
      const currentTodo = state.todos.find(todo => todo.id === action.payload.id)
      currentTodo?.status === action.payload.value
    }
  }
})

export const {add} = todosSlice.actions

export default todosSlice.reducer