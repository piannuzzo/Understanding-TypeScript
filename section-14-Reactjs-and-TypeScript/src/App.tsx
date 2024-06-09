import React, { ReactElement, useState } from 'react'

import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'

import './app.css'

export interface Todo {
	id: string
	text: string
}

const initialTodos: Todo[] = [{ id: `id-${Math.random()}`, text: 'Finish this course' }]

const App: React.FC = (): ReactElement => {
	const [todos, setTodos] = useState<Todo[]>(initialTodos.map(todo => ({ ...todo })))

	const addNewTodoHandler = (newTodo: string): void => {
		setTodos(prevTodos => {
			const newTodos = prevTodos.map(todo => ({ ...todo }))
			newTodos.push({
				id: `id-${Math.random()}`,
				text: newTodo
			})
			return newTodos
		})
	}

	const onDeleteTodoHandler = (id: string) => {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== id)
		})
	}

	return (
		<div>
			<NewTodo onAddNewTodo={addNewTodoHandler} />
			<TodoList onDeleteTodo={onDeleteTodoHandler} todos={todos}  />
		</div>
	)
}

export default App