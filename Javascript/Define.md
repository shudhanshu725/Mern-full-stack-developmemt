1. javascript is scripting and programming language 
2. Javascript is object based language
3. javascript is dynamically typed language 
4. Javascript uis both compiled and interpreter language 
5. javascript is synchronous single threaded language because has only 1 call stack
6. Javascript can also perform asynchronous task with the help of event loop and queues




## Javascript Runtime environment (JRE)
 - Javascript runtime environment provides environment where we excute our javascript code 

## Type of JRE 
it is two types-
            1) Browser
            2) NODE JS 

## if npm throw error after node install then type " Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser "

## TOKEN -
  it is a smallest unit of programming language 
  ex - let a = 10 ;
        |  | |  | |
        |  | |  | |
        |  | |  |  ----> Punctuator\ Separator 
        |  | |  ----> Literals
        |  | -----> Operator
        |   -----> Identifier
        -------- > keyword

## Type of token :- it is five type
            1) Keyword - Keyword are pre defined word that is used to prefer some specific task 
              ex - var, let, const, function, if , else, switch, case, break, continue, do , while, for, in , delete , try, catch, finally,  throw, extend 

            2) Identifier - identifier is user given name 
               i) name of variable - Lower camel casing ie fullName
               ii) name function - lower camel casing ie  '''
               iii)name of class and className - upper camel casing i.e SedanCar 
               ex- let user =" raj";
                        |
                        ----Identifier(variable)  

            3)Operator :- operator are predefined symbols that is used to perform some specific task 
            ex- const result = 10+ 20;

            4) Literals :- Literals are different types of value that is used in writing a program   
             - Literals are two types 
                i)Primitive literals
                ii)Non primitive literals 

            5) Punctuator :- these are symbols used to group, separate or punctuate code .  
              ex - () , {}, [], commas"," , ; , and the period (used to excess objects property ).            

## What is difference between "var" , "let" and "const" keyword?
1) VAR- MULTIPLE TIME DECLARATION  , MULTIPLE TIME INITIALIZATION ,  Variable declared with var keyword goes to global scope , variable declared with var keyword support hosting and does not belong to temporal dead Zone (TDJ)
     EX- var a = 10 ;

2) let -> one time declaration, multiple time initialization , Variable declared with let keyword goes to block scope or script scope ,  variable declared with let keyword support hosting but belong to TDZ 
        ex- let b = 20;

3) const -> one time declaration , one time  initialization, '''''' etc
        ex- const c = 30        

## TYPE OF OPERATOR on the basis of operand , operator are 3 type
  1) Unary operator:- i>increment/ decrement
                      ii> logical not (!)

  2) binary operator:- i> Arithematic operator ( +,-,/, %)    
                      ii> Assignment operator  (=)       
                      iii> Compound assignment operator ( +=, -=, *=,/=,%=, **=)
                      iv> relational operator /comparison operator (>,<,>=,<=, ==, !=)  ===(strict equality)  !== (strict not equality)  
          


  3) Logical operator :- i>Logical AND (&&),  ii> Logical OR (||) operator 
  4) Ternary Operator :-  i> conditional operator 
                          operand 1 ? operand 2 : operand 3

## TYPE COERION :- 
To convert one type of data into another type of js engine is known as type coerion  
# type of type coerion  - it is two type
1)Implicit type coerion -> to convert one type of data into anther type with the help of js engine implicit (automatically) is known as implicit type coerion 

ex- const a = 10 ; const b= "5";
console.log(a - b) ---- Automatically  b string convert into a number and answer is 5 

2) Explicit type coerion -> to convert onr type of data into another type forcefully (explicit) with the help of jsengine is known as explicit type coerion  
  ii) here we use inbuild methods - string(), bigint(), boolean(), symbol(), number()

## Type of literals

1) Primitive literal: Primitive values are single-valued literals. Primitive literals are immutable (cannot be changed).
Ex - let a =10;

## Scope ##
Scope defined the accessibility and visibility of code

### type of scope
1) Global scope
2) Local / function / block scope






## what is array
### Array is the object in javascript,it is a non primitive type of literal, it is a block of memory used to store multiple type of value(any type of literal) in a same memory block, Array size is dynamically (size is not fixed like other language )it mean we store n number of element and js engine will handle memory usage automatically, value store inside array are referred as array element , if want to access the index greater than array length we will get undefined.  

Array Inbuild methods
1)push() - it use to add one or more element in array , it modify the original array, it return new length of array
2)pop() - it is used to remove the element of array from last, it also modify the original arrayit return the remove array
3)shift() - 
unshift(), splice(), slice(), reverse(), indexof(), includes(), sort(), Foreach(), map(), filter(), find(), findindex(), reduce(), some(), every(), Array.isArray(), 

4) Map : it return same lenght of array

## Difference between map() and filter()
   1) map()- it is used to iterate over an array and transform each element, it is a higher order function , it always return a new array of same length 
   2) filter()- it is used to iterate over an array and select element based on condition , it is higher order function , it return a new array that may be sorter than the original (return empty array[] if match not found) 

## difference between Find() and filter() 
   1) find() - it is used to itterate over an array and return first element that satisfy the condition , it is higher order function , it return a single element or undefined if no match found  
   2) filer() - it is used to iterate over an array and return all element satisfy the condition , it return higher order function ,  it return new array (empty array[] if no match found ).   


### OBJECT IN JS
1. Object is non primitive , refrence based data , object is block of code which have state (property) and behaviour (method) and it can store heterogenous type of data , in object we can store data in key value pair and each key value pair is separated by comma 
ex - const user = {
  name : "ram", // state(properties)
  age: 23,      // state(property)
  greet:()=>{         //Behavior (method)
    c.log("hello")
  }
}    