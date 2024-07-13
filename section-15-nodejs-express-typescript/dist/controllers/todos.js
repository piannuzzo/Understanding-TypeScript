"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodos = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    console.log(TODOS);
    res.status(201).json({ message: 'Created new todo', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodos = (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const todo = TODOS.find(todo => todo.id === id);
    if (!todo) {
        throw new Error(`Unable to update todo item, todo with id: "${id}" not found.`);
    }
    todo.text = text;
    res.json({ message: 'Update!', updatedTodo: todo });
};
exports.updateTodos = updateTodos;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === id);
    if (todoIndex < 0) {
        throw new Error(`Unable to delete todo item, todo with id: "${id}" does not exist.`);
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: "Todo deleted!" });
};
exports.deleteTodo = deleteTodo;
