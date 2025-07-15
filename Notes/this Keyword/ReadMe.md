# 🔍 `this` Keyword in JavaScript

## 💡 What is `this`?
`this` refers to the object from which a function is called — its **execution context**.
But **its value depends on how the function is invoked**, not where it’s written.

---

## 🔑 Key Rule
```js
// Depends on HOW a function is called, not WHERE it is defined.
```

---

## 🧭 `this` in Different Scenarios
| Scenario                   | Value of `this`                                 |
| -------------------------- | ----------------------------------------------- |
| Global Scope               | `window` (in browser)                           |
| Inside Object Method       | The object itself (LHS of dot while calling)    |
| Inside Regular Function    | `window` or `undefined` (non strict or strict)  |
| Inside Arrow Function      | Lexically bound (inherits from enclosing scope) |
| Constructor Function       | New instance (object being constructed)         |
| Event Listener (DOM)       | The DOM element that received the event         |

---

## 🧪 Example 1 – Global Context
```js
console.log(this); // window
```

---

## 🔍 Example 2 – Function Context
```js
function x() {
  console.log(this);
}
x(); // window (non-strict), undefined (strict)
```
- The value of this keyword in a function is undefined, but because js has 'this substitution', continued below...
- **this substitution:** if the value of this keyword is undefined or null, this will be replaced with global object, only in non-strict mode.
- **Gotcha**: value of this keyword also, depends on how it is called.
- Example: strict mode:
```js
"use strict";
function x() {
console.log(this);
}
x(); // undefined   (function called without any reference in strict mode)
window.x(); // window object gets printed
``` 

---

## 🧠 Example 3 – Object Method
```js
const user = {
  name: "Sid",
  getName: function () {
    console.log(this.name);
  }
};
user.getName(); // "Sid"
```
- NOTE: method: is a function which is a part of an object. (ex - getName).
- here if we console.log(this) inside getName, we will get the object user printed. (this points to the user object).
- this behavious will work in strict and non-strict mode both.

---

## ❌ Example 4 – Losing `this` Context
```js
const user = {
  name: "Sid",
  getName: function () {
    return this.name;
  }
};
const ref = user.getName;
console.log(ref()); // undefined (not bound to user)
```

---

## 🏹 Example 5 – Arrow Functions
```js
const user = {
  name: "Vex",
  getName: () => {
    console.log(this.name); // arrow doesn't bind `this`
  }
};

user.getName(); // undefined
```
- Arrow functions **don’t create their own `this`**. They inherit from the outer lexical environment.
- But if you do console.log(this), it will print the window object, as it will inherit from the outer LE and this code's outer LE is the global space.

---

## 👷‍♂️ Example 6 – Constructor Function
```js
function Person(name) {
  this.name = name;
}
const p1 = new Person("Sidharth");
console.log(p1.name); // Sidharth
```

---

## 👂 Example 7 – Event Listener
```js
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this); // the button element
});
```
But with arrow function:
```js
btn.addEventListener("click", () => {
  console.log(this); // lexical `this`, usually `window`
});
```

---

## 💥 Gotchas and Pitfalls
* Arrow functions should NOT be used as object methods if you need `this`.
* `this` is **not** static. It’s dynamic and **runtime-bound**.
* Binding issues can be resolved with `.bind()`, `.call()`, `.apply()`.

---

## 🧪 Quick Comparison Table
| Method Type      | Binds Own `this`? | Inherits from?       |
| ---------------- | ----------------- | -------------------- |
| Regular Function | ✅ Yes             | –                    |
| Arrow Function   | ❌ No              | Parent Lexical Scope |

---

## 🧙 Bonus
```js
const obj = {
  a: 10,
  b: () => {
    console.log(this.a);
  },
  c: function () {
    console.log(this.a);
  }
};
obj.b(); // undefined (lexical scope is window)
obj.c(); // 10
```

```js
const obj = {
  a: 10,
  b: function() {
    const y = () => {
       console.log(this);
    }
    y();
  }
};
obj.b(); // obj will be printed
```

---

## ✅ Takeaways
* `this` is **not lexical** like variables. It’s **runtime-bound**.
* Arrow functions are great, but dangerous if used without knowing their scope.
* The value of `this` changes with the **type of function** and **how it is called**.
