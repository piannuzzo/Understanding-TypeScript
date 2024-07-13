"use strict";
// 95
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Foo_data, _Bar_data;
const names = ['Max'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(Math.random()), 2000);
});
promise.then((value) => { console.log(value); });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ name: 'Peter' }, { age: 25 });
console.log(merged.age);
function countAndPrint(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndPrint(['Hi there!', 'Goodbye']));
// 99 keyof Constraint
function extractAndCovert(obj, key) {
    return `${String(key)} : ${obj[key]}`;
}
console.log(extractAndCovert({ name: 'Peter' }, 'name'));
// 100 - Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
        return this;
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Foo');
textStorage.addItem('Bar');
textStorage.addItem('Baz');
console.log(textStorage.getItems());
textStorage.removeItem('Bar');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1).addItem(2).addItem(3);
console.log(numberStorage.getItems());
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
const objStorage = new DataStorage();
objStorage.addItem({ a: 'A' });
objStorage.addItem({ b: 'B' });
objStorage.addItem({ c: 'C' });
console.log(objStorage.getItems());
objStorage.removeItem({ b: 'B' });
console.log(objStorage.getItems());
function createCourseGoal(title, description, data) {
    let courseGoal = {
        title,
        description
    };
    return courseGoal;
}
const names2 = ['Peter', 'Robert'];
// names2 is readonly
names2.push('Stephen');
let foo = 'FOO';
foo = 'Bar';
// 103 Generics vs Unions
class Foo {
    constructor() {
        _Foo_data.set(this, []);
    }
    addData(item) {
        __classPrivateFieldGet(this, _Foo_data, "f").push(item);
    }
    get _data() { return [...__classPrivateFieldGet(this, _Foo_data, "f")]; }
}
_Foo_data = new WeakMap();
class Bar {
    constructor() {
        _Bar_data.set(this, []
        // this does not work as #data can only contain 1 of 3 different types
        // this function allow adding any of 3 different types
        );
    }
    // this does not work as #data can only contain 1 of 3 different types
    // this function allow adding any of 3 different types
    addData(item) {
        __classPrivateFieldGet(this, _Bar_data, "f").push(item);
    }
    get data() { return __classPrivateFieldGet(this, _Bar_data, "f"); }
}
_Bar_data = new WeakMap();
