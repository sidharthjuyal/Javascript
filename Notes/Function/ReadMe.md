# 📘 How Functions Work & Variable Environment

---

## 🔍 1. Function Invocation & Execution Context
Whenever a function is invoked, JavaScript creates a **new Functional Execution Context (FEC)** — a container similar to the global one but scoped to that function
Each FEC has:
```
Execution Context (Function)
├── Memory Component (Variable Environment)
│   ├── Parameters as variables
│   ├── Local variables (initialized `undefined`)
├── Code Component (Thread of Execution)
│   └── Function body executed line-by-line
└── Outer Lexical Environment reference
````

---

## 🧠 2. Variable Environment in Function
When a function runs:
1. **Memory Phase**:
   - Parameters get their passed-in values.
   - Local `var` variables are hoisted and set to `undefined`.
2. **Execution Phase**:
   - Code runs, assigns values, performs logic, returns a value.

### 🔁 Example:
```js
var x = 10;

function foo(a, b) {
  var c = a + b;
  console.log(x, a, b, c);
}

foo(3, 4);
// Global x accessible;
a=3, b=4, c=7
````

---

## 📦 3. Call Stack + Function Contexts
When `foo()` is invoked:
```
Call Stack:
[ foo() Execution Context ]  ← top
[ Global Execution Context  ]
```
* `foo` FEC is pushed on call stack.
* After `foo` finishes, its context is popped off.
* Execution returns to Global.

---

## 💡 4. Accessing Variables: Scope Chain

Inside `foo`, variable lookup:
```
foo’s Variable Environment
→ refers to Global as outer context
```
Means:
* Looks locally first (`a, b, c`),
* If not found, climbs to Global (`x`),
* If still absent, throws ReferenceError.

---

## 📝 5. Memory Environment Visualized
```
Global VE:
- x → 10
- foo → [function]

foo VE (after invocation):
- a → 3
- b → 4
- c → undefined (initially)
```
After execution:

```
c → 7
```

---

## ✅ 6. Why This Matters
* Each function call gets its own isolated memory!
* It prevents local variables from leaking globally.
* Variables live only inside their function’s Variable Enviroment.
* Setting the stage for closures by linking outer context.

---

## 🔁 7. ASCII Diagram – FEC Lifecycle

```
Invoke foo(3, 4)
┌───────────────────────────────┐
│ foo Execution Context created │
│ ┌ VE: a = 3, b = 4, c(undefined)     │
│ └ Execute: c = a + b         │
│ ┌ VE updated: c = 7          │
│ └ console.log(...)           │
└───────────────────────────────┘
Return → foo EC popped off the stack
```

---

## ✅ 8. Key Takeaways

* Function calls create **new Execution Contexts** with isolated memory.
* Parameters and local `var` variables are hoisted inside that context.
* Global variables are still accessible via the scope chain.
* Understanding this lays the groundwork for closures and advanced JS patterns.

---
