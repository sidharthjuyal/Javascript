# 📘 Shortest JS Program, `window`, & `this`

---

## 🔍 1. Shortest JS Program
- An **empty `.js` file** → no code → still executes.
- JS engine creates:
  - **Global Execution Context (GEC)**
  - **Global object** (`window` in browsers)
  - `this` in global scope points to `window` :contentReference[oaicite:1]{index=1}

---

## 🌐 2. `window` – The Global Object
- Represents the global scope in browsers.
- Automatically created when code runs.
- All **global variables/functions** attach to `window`.
```js
var a = 5;
function c() { return 10; }

console.log(window.a); // 5
console.log(window.c()); // 10
````
* Variables/functions inside functions are **not** on `window`.

---

## ✅ 3. `this` in Global Scope
* Outside any function, `this === window` in browsers.
```js
var x = 10;
console.log(this.x);         // 10
console.log(window.x);       // 10
```
* `this` and `window` are interchangeable globally ([scribd.com][1]).

---

## 🧠 4. Key Takeaways
* **Empty script** still triggers:
  * Global Execution Context
  * Creation of `window` and `this` linking to it
* Global variables/functions attach to `window`.
* `this` in global scope references `window`.

---

## 🧾 Summary Table
| Concept   | Behavior in Browser Global Scope      |
| --------- | ------------------------------------- |
| Global EC | Always created, even if file is empty |
| `window`  | Global object that holds globals      |
| `this`    | Same as `window` outside any function |
