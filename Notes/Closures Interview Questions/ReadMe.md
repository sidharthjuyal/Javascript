# 📘 CRAZY JS INTERVIEW 🤯 ft. Closures

## 🔍 1. Famous Closure Questions & Answers

### Q1: What is a closure?
A **closure** is a function paired with its **lexical environment**, meaning it can access variables from its outer scope even after that outer function has finished.
```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); // logs 10
````

---

### Q2: Does order matter?
No. Even if you declare the variable after the inner function:
```js
function outer() {
  function inner() { console.log(a); }
  var a = 10;
  return inner;
}
outer()(); // still logs 10
```

---

### Q3: `const` or `let` instead of `var`?
Doesn't matter—closures work the same way:
```js
function outer() {
  let a = 10;
  function inner() { console.log(a); }
  return inner;
}
outer()(); // logs 10
```

---

### Q4: Arguments are captured too?
Yes! Closures include function parameters:
```js
function outer(str) {
  let a = 10;
  function inner() {
    console.log(a, str);
  }
  return inner;
}
outer('hi')(); // logs 10, "hi"
```

---

### Q5: Multiple nested layers?
Closures can reach all the way up the chain:
```js
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
outest()('hi')(); // logs 10, 20, "hi"
```

---

### Q6: What if global variables shadow inner names?

Inner scope always wins unless it's missing:
```js
let a = 100;
outest()('hello')(); // still logs 10 — inner `a` shadows global
```

---

## 🧩 2. Why Closures Matter
* **Data hiding & encapsulation**: variables live only inside your function.
* **Module pattern, currying, memoization**: closures keep state alive.
* **Event handlers, timers**: let functions remember data after outer execution.

---

## ⚠️ 3. Memory & Garbage Collection
* Closures **hold references to outer variables**, which prevents them from being garbage-collected.
* If misused, this can cause **memory leaks** or bloated memory usage.
* Modern JS engines are optimized to clean up unused closures, but awareness is key.

---

## ✅ 4. Quick Summary Table
| Concept                       | Details                                                          |
| ----------------------------- | ---------------------------------------------------------------- |
| **Closure**                   | Function + captured lexical environment                          |
| **Order**                     | Declaration order doesn’t matter — closures capture by reference |
| **Scoping (`var/let/const`)** | All work fine; closure depends on lexical placement, not type    |
| **Parameters**                | Also captured inside closures                                    |
| **Nested closures**           | Able to access from multiple nested scopes                       |
| **Shadowing**                 | Inner variables take precedence over outer ones                  |
| **Memory impact**             | Variables in closure aren’t freed until function is out of scope |
