# 📘 Callback Functions & Event Listeners 🔥

## 🔍 1. What Is a Callback Function?
- A **callback** is a function passed as an **argument** to another function, which is **called back later**.
- Transforms synchronous code into asynchronous behavior.

---

## ⚡ 2. Example: setTimeout
```js
console.log("Start");
setTimeout(function callback() {
  console.log("Delayed Hello");
}, 2000);
console.log("End");
````

**Flow:**
```
Start
End
…after 2 seconds…
Delayed Hello
```
* `setTimeout` schedules the callback in the future.
* Meanwhile, the JS engine continues executing remaining code.

---

## 🧠 3. Event Listener Callback
```js
button.addEventListener("click", function () {
  console.log("Button clicked!");
});
```
* The provided function runs **only** when the event (like "click") fires.
* Acts like a callback: JS registers it and invokes it later.

---

## 🧩 4. Private Counter Using Callbacks
You can use closures to keep event-state hidden:
```js
const btn = document.getElementById("btn");
(function () {
  let count = 0;
  btn.addEventListener("click", function () {
    count++;
    console.log("Clicked", count);
  });
})();
```
* `count` lives privately in a closure.
* Only the event callback can access it.
* You prevent accidental external mutations.

---

## ⚠️ 5. Main Thread Blocking – Why Callbacks Matter
JS runs on a **single thread**. If you run a heavy task:
```js
for (let i = 0; i < 1e9; i++) { /* heavy operation */ }
console.log("Done");
```
* The UI will **freeze** until that loop finishes.
* Callbacks (like for timers or events) *wait* in the queue.
* Once the loop ends, callbacks execute—keeping the UI responsive.

---

## 🚀 6. Visual Flow of Events & Callbacks
```
Main Thread
   ↓
Run JS:
1. Register setTimeout callback
2. Register event listener callback
3. Continue execution
Event Loop → Callback Queue:
...when timer or click happens...
   ↓
JS Engine picks callback from queue
and executes it (on the same thread)
```

---

## 🧠 7. Key Takeaways
* Callbacks let JS handle **asynchrony** with a single thread.
* They make code **event-driven** and responsive.
* Use closures in callbacks for **data hiding and encapsulation**.
* Avoid blocking the thread—callback patterns keep UI and logic decoupled and fluid.

