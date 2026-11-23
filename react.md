

** what is JSX **
JSX is syntax extension that means we can write html like code in javascript.

RULES: 
1. Return only one parent component
2. All tag (including self closing) must be properly closed 
3. Use camelCase for attribue ( eg onClick, onChange)
4. Javascript expression go inside {}.
5. comment use {/* */} syntax.
6. No if-else directly used inside jsx ; use ternary operator or logical operators
7. use classNameinstead of class.
8. Use htmlfor instead of for  in <label> tags.

** what is component **
A component is react reusable , self contained piece of code that return JSX.

types
1. Class based component 
 - A javascript class taht extend react component 
 - has a render() method to return JSX 
 - traditional way of writing component (beforn 2019)

2. functional component 
  - A simple javascript function return JSX 
  - recommended and most popular way in modern react
