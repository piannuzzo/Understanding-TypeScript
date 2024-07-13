import { RequestHandler } from 'express'
import { Todo } from '../models/todo'

const TODOS: Todo[] = []

export const createTodo: RequestHandler = (req, res, next) => {
	const text = (req.body as {text: string}).text
	const newTodo = new Todo(Math.random().toString(), text)

	TODOS.push(newTodo)
console.log(TODOS)
	res.status(201).json({message: 'Created new todo', createdTodo: newTodo})
}

export const getTodos: RequestHandler = (req, res, next) => {
	res.json({todos: TODOS})
}

export const updateTodos: RequestHandler<{id: string}> = (req, res, next) => {
	const id = req.params.id
	const text = (req.body as { text: string }).text

	const todo = TODOS.find(todo => todo.id === id)

	if (!todo) {
		throw new Error(`Unable to update todo item, todo with id: "${id}" not found.`)
	}

	todo.text = text

	res.json({message: 'Update!', updatedTodo: todo})
}

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
	const id = req.params.id
	const todoIndex = TODOS.findIndex(todo => todo.id === id)

	if (todoIndex < 0) {
		throw new Error(`Unable to delete todo item, todo with id: "${id}" does not exist.`)
	}

	TODOS.splice(todoIndex, 1)

	res.json({message: "Todo deleted!"})
}