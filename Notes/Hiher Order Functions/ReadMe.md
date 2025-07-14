# Higher-Order Functions

## 🔁 What is a Function in JavaScript?
JS treats functions as **first-class citizens**:
- Functions can be:
  - Assigned to variables ✅
  - Passed as arguments ✅
  - Returned from other functions ✅
This forms the **core of functional programming** in JS.

---

## 🔺 Higher-Order Functions (HOF)
> A **Higher-Order Function** is a function that:
1. Takes another function as an **argument**, or
2. Returns a function from within.
```js
function hof(callback) {
  console.log("Inside HOF");
  callback();
}
hof(function () {
  console.log("I'm a callback");
});
````

### ✅ Real-World HOF Examples:
| Built-in Method      | Description                         |
| -------------------- | ----------------------------------- |
| `map()`              | Transforms elements                 |
| `filter()`           | Filters based on condition          |
| `reduce()`           | Reduces to a single value           |
| `forEach()`          | Loops through each element          |
| `setTimeout()`       | Takes a function to run after delay |
| `addEventListener()` | Passes a callback on event trigger  |

---

## 💡 Why Are HOFs Powerful?
* **Abstraction**: Encapsulate behavior and logic.
* **Reusability**: Generic functions handle multiple use-cases.
* **Clean Code**: Reduce loops, nested logic.
---

## 🧪 Example: Custom `map()` Implementation
```js
function customMap(arr, logic) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i]));
  }
  return result;
}
const doubled = customMap([1, 2, 3], (x) => x * 2);
console.log(doubled); // [2, 4, 6]
```

---

## 🔥 Functions Returning Functions
```js
function greet(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}
const sayHi = greet("Hi");
sayHi("Sid"); // Hi, Sid!
```
This is a **closure + HOF** combo — powerful tool in advanced JS.

---

## ✨ Functional Programming in JS
### Key Characteristics:
| Feature               | Meaning                                   |
| --------------------- | ----------------------------------------- |
| Pure Functions        | No side effects, same input → same output |
| Immutability          | Data not mutated                          |
| First-Class Functions | Functions treated like values             |
| HOFs                  | Build behavior with logic abstraction     |
```js
// Pure Function
function square(x) {
  return x * x;
}
```

---

## ⚠️ Side Effects vs Pure Functions
```js
// Impure: Side-effect (console.log)
function printSquare(x) {
  console.log(x * x);
}
```
Avoiding side-effects makes functions easier to test and reason about.

