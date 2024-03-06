import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch