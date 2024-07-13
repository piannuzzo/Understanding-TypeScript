"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Product_price;
const cL = console.log;
function Logger(log) {
    cL('Logger Factory');
    return function (constructor) {
        cL(`Logger: ${log}`);
        cL(constructor);
    };
}
function HTMLTemplate(template, hookId) {
    cL('HTMLTemplate Factory');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                cL('HTMLTemplate Decorator...');
                const decoratorEl = document.getElementById('decorator');
                if (decoratorEl) {
                    decoratorEl.innerHTML = template;
                    setTimeout(() => {
                        decoratorEl.querySelector('h1').textContent = this.name;
                    }, 2000);
                }
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Peter';
        cL('Instantiate new Person');
    }
};
Person = __decorate([
    Logger('Log Person Class'),
    HTMLTemplate('<h1>Person Class Decorator</h1>', 'app'),
    __metadata("design:paramtypes", [])
], Person);
const person = new Person();
cL(person);
// Section 110 : Property Decorators
function Log(target, propertyName) {
    cL('Log Decorator');
    cL(target, propertyName);
}
function Log2(target, name, descriptor) {
    cL('Accessor Decorator');
    cL(target, name, descriptor);
}
function Log3(target, name, descriptor) {
    cL('Method Decorator');
    cL(target, name, descriptor);
}
function Log4(target, name, position) {
    cL('Parameter Decorator');
    cL(target, name, position);
}
class Product {
    constructor(title, price) {
        _Product_price.set(this, void 0);
        this.title = title;
        this.price = __classPrivateFieldSet(this, _Product_price, price, "f");
    }
    set price(price) {
        if (price > 0) {
            __classPrivateFieldSet(this, _Product_price, price, "f");
        }
        else {
            throw new Error("Invalid price. Price must be a postiive number.");
        }
    }
    get price() { return __classPrivateFieldGet(this, _Product_price, "f"); }
    getPriceWithTax(tax) {
        return __classPrivateFieldGet(this, _Product_price, "f") * 1 + tax / 100;
    }
}
_Product_price = new WeakMap();
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Log2,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Product.prototype, "getPriceWithTax", null);
const prod1 = new Product('Product1', 10);
const prod2 = new Product('Product2', 20);
prod1.getPriceWithTax(5);
// Section 115 : Autobind Decorator
function autoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedMethod = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFunction = originalMethod.bind(this);
            return boundFunction;
        }
    };
    return adjustedMethod;
}
class Printer {
    constructor() {
        this.message = 'Printer class message property';
    }
    showMessage() {
        cL(this.message);
    }
}
__decorate([
    autoBind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', printer.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumber(target, propName) {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return false;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required,
    __metadata("design:type", String)
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber,
    __metadata("design:type", Number)
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const myCourse = new Course(title, price);
    if (!validate(myCourse)) {
        alert('Invalid input');
        return;
    }
    cL(myCourse);
});
