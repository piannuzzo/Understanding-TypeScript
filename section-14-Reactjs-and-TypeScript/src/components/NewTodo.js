"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NewTodo = ({ onAddNewTodo }) => {
    const inputRef = react_1.default.createRef();
    const submitClickHandler = (event) => {
        event.preventDefault();
        const inputValue = inputRef.current.value;
        onAddNewTodo(inputValue);
    };
    return (react_1.default.createElement("form", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", { htmlFor: 'todo-text' }, "Todo Text"),
            react_1.default.createElement("input", { type: 'text', id: 'todo-text', ref: inputRef })),
        react_1.default.createElement("button", { type: 'submit', onClick: submitClickHandler }, "Add Todo")));
};
exports.default = NewTodo;
