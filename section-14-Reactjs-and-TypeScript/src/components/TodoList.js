"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TodoList = (_a) => {
    var { todos } = _a, props = __rest(_a, ["todos"]);
    return (react_1.default.createElement("ul", { style: { listStyleType: 'none' } }, todos.map(todo => (react_1.default.createElement("li", { key: todo.id },
        react_1.default.createElement("button", { onClick: () => props.onDeleteTodo(todo.id) }, "X"),
        react_1.default.createElement("span", { className: 'spacer', style: { marginLeft: '.5em' } }),
        todo.text)))));
};
exports.default = TodoList;
