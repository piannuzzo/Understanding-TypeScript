"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
class App extends react_2.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", { className: "app" },
            react_1.default.createElement("header", null, this.props.name)));
    }
}
exports.default = App;
