import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {add} from './store/todosSlice'
import {RootState} from './store/store'
import {TodoModel, TodoStatusEnum} from './models/Todo'
import Todo from './components/Todo/Todo'
import './App.scss'

function App(): JSX.Element {

  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch()

  const test: TodoModel = {
    id: '-',
    title: 'title',
    status: false
  }

  const addTodo = (): void => {
    dispatch(add(test))
  }

  return (
    <div className="app">
      <div className="list">
        <Todo />
      </div>
    </div>
  )
}

export default App
