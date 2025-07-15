# Promises in JavaScript

## 🧠 Why Promises?
To solve:
- ❌ Callback Hell
- ❌ Pyramid of Doom
- ❌ Inversion of Control
Promises offer a **cleaner**, **chained**, and **more controlled** way to handle async operations.

---

## 💡 What is a Promise?
> A **Promise** is an object that represents the eventual **completion** (or failure) of an asynchronous operation.
```js
const promise = new Promise((resolve, reject) => {
  // async task here
  if (success) resolve(result);
  else reject(error);
});
````

---

## 🧩 Promise States
| State       | Meaning                |
| ----------- | ---------------------- |
| `pending`   | Initial state          |
| `fulfilled` | `resolve()` was called |
| `rejected`  | `reject()` was called  |
Once settled (fulfilled/rejected), it’s **immutable**.

---

## ✅ Using Promises
```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});
myPromise
  .then((res) => {
    console.log("Resolved:", res);
  })
  .catch((err) => {
    console.log("Rejected:", err);
  });
```

---

## 🔗 Chaining Promises
```js
doStep1()
  .then(doStep2)
  .then(doStep3)
  .catch(handleError);
```
* Each `.then()` returns a **new promise**, allowing smooth chaining.
* `.catch()` catches **any error** in the chain.

---

## 🔄 Behind the Scenes: How Promises Work?
```js
const p = new Promise((resolve, reject) => {
  console.log("Promise started");
  resolve("done");
});
p.then((data) => console.log(data));
console.log("After promise");
```

🧠 Output:
```
Promise started
After promise
done
```
✔️ Promise callbacks (`then`, `catch`) are **asynchronous**
✔️ They go to the **microtask queue**, and are executed **after current stack is empty**

---

## 🔥 Bonus Gold Nuggets
* `Promise` constructor runs **immediately**
* `.then()` is **queued** in the **microtask queue**
* Promises allow **flattened structure**, no nesting
* Promises let *you* handle the flow — **no inversion of control**

---

## ✨ Clean Example: Callback Hell → Promises
### ❌ Callback Hell
```js
loadScript("a.js", function () {
  loadScript("b.js", function () {
    loadScript("c.js", function () {
      // callback hell...
    });
  });
});
```

### ✅ Promise Chain
```js
loadScript("a.js")
  .then(() => loadScript("b.js"))
  .then(() => loadScript("c.js"))
  .then(() => console.log("All scripts loaded"))
  .catch(err => console.error(err));
```

---

## 🔁 Quick Comparison: Callbacks vs Promises
| Feature        | Callbacks              | Promises                |
| -------------- | ---------------------- | ----------------------- |
| Chaining       | ❌ Nested               | ✅ Flat & clean          |
| Error Handling | ❌ Messy                | ✅ Single `.catch()`     |
| Control        | ❌ Inversion of Control | ✅ You control the chain |
| Composition    | ❌ Hard                 | ✅ Easy chaining         |
