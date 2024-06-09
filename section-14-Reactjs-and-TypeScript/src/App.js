"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const NewTodo_1 = __importDefault(require("./components/NewTodo"));
const TodoList_1 = __importDefault(require("./components/TodoList"));
require("./app.css");
const initialTodos = [{ id: `id-${Math.random()}`, text: 'Finish this course' }];
const App = () => {
    const [todos, setTodos] = (0, react_1.useState)(initialTodos.map(todo => (Object.assign({}, todo))));
    const addNewTodoHandler = (newTodo) => {
        setTodos(prevTodos => {
            const newTodos = prevTodos.map(todo => (Object.assign({}, todo)));
            newTodos.push({
                id: `id-${Math.random()}`,
                text: newTodo
            });
            return newTodos;
        });
    };
    const onDeleteTodoHandler = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(NewTodo_1.default, { onAddNewTodo: addNewTodoHandler }),
        react_1.default.createElement(TodoList_1.default, { onDeleteTodo: onDeleteTodoHandler, todos: todos })));
};
exports.default = App;
