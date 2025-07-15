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
| Global Scope (non-strict)  | `window` (in browser)                           |
| Global Scope (strict mode) | `undefined`                                     |
| Inside Object Method       | The object itself (LHS of dot while calling)    |
| Inside Regular Function    | `window` or `undefined`                         |
| Inside Arrow Function      | Lexically bound (inherits from enclosing scope) |
| Constructor Function       | New instance (object being constructed)         |
| Event Listener (DOM)       | The DOM element that received the event         |

---

## 🧪 Example 1 – Global Context
```js
console.log(this); // window (in non-strict mode)
```

---

## 🔍 Example 2 – Function Context
```js
function x() {
  console.log(this);
}
x(); // window (non-strict), undefined (strict)
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
Arrow functions **don’t create their own `this`**. They inherit from the outer lexical environment.

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

---

## ✅ Takeaways
* `this` is **not lexical** like variables. It’s **runtime-bound**.
* Arrow functions are great, but dangerous if used without knowing their scope.
* The value of `this` changes with the **type of function** and **how it is called**.
