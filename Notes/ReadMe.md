# 📘 JavaScript Fundamentals – Notes
## 🧵 Single-Threaded Execution
- JavaScript runs in a single-threaded environment.
- This means it can execute one operation at a time in a single call stack.
- Even though modern machines have multi-core processors, JS will only use one core for executing your code.

## ⚙️ Interpreted Language
- JavaScript is an interpreted (not compiled) language.
- It executes code line by line, in a top-to-bottom sequence.
- This is why debugging and development can feel more dynamic and flexible compared to compiled languages.

## ⚡ Asynchronous by Nature
- Despite being single-threaded, JavaScript is asynchronous.
- It uses callbacks, Promises, and async/await to handle operations like:
   - API calls
   - Timers (e.g., setTimeout)
   - File I/O (in Node.js)
   - The event loop and callback queue manage asynchronous behavior, allowing non-blocking execution.
