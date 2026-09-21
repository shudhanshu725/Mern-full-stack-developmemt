## 1. What is Node Js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows JavaScript to run outside the browser, primarily on the server side, using the V8 JavaScript engine.

i) Event-driven & non-blocking I/O
ii) Single-threaded JavaScript execution.

## 2. What is Common Js?

CommonJS (CJS) is a JavaScript module system used primarily in Node.js, where modules are loaded synchronously using require() and values are exported using module.exports

## 3. What is ES Module or Module Js?

ES Modules (ESM) is JavaScript's standardized module system that uses import and export to share code between modules.

**Named import export**
A named import is used to import a specific exported value from a module by using the same exported name inside { }.

```
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

**Default export import**
Default export allows a module to export one primary value that can be imported using any name without curly braces.

```
// math.js
 function add(a, b) {
  return a + b;
}
export default add;

// app.js
import addition from "./math.js";
```
## What is Module function executor

- In node.js the module function executor refer to the automatic function wrapper that node .js    uses to execute every module 
- before node.js run a module code ,it wraps the entire file content inside a function like this -
- (function (export,require, __filename, __dirname ){
    //your module code actually live here
   });

## what is __filename,__dirname ?

1. __filename: the full absolute path of current javascript file (including the file name)
  ex- c:\Users\Shudhanshu\OneDrive\Desktop\Mern full stack developmemt\NODE\Day-6 Path module\app.js
  
2. __dirname : the full absolute path of folder that contains the current  javascript file
  ex- c: \Users\Shudhanshu\OneDrive\Desktop\Mern full stack developmemt\NODE\Day-6 Path module

# What is path modules
  the path module is a build-in node.js tool that help you work with file and folder paths (join them,  get the directory name ,file name , extension, etc) in a safe and cross platform way.

1. **Path.join():** Joins path segment safely.
2. **path.resolve():** resole to a absolute path.
3. **path.dirname():** return te directory name of path.
4. **path.basename():** return the last portion of path (filename).
5. **path.extname():** return the file extension .
6. **path.parser():** parses a path into a object .
7. **path.format():** builds a path string from object.
8. **path.isAbsolute():** checks if a path is absolute. 
