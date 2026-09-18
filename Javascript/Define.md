1. javascript is scripting and programming language 
2. Javascript is object based language
3. javascript is dynamically typed language 
4. Javascript uis both compiled and interpreter language 
5. javascript is synchronous single threaded language because has only 1 call stack
6. Javascript can also perform asynchronous task with the help of event loop and queues




# Javascript Runtime environment (JRE)
 - Javascript runtime environment provides environment where we excute our javascript code 

# Type of JRE 
it is two types-
            1) Browser
            2) NODE JS 

# if npm throw error after node install then type " Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser "

# TOKEN -
  it is a smallest unit of programming language 
  ex - let a = 10 ;
        |  | |  | |
        |  | |  | |
        |  | |  |  ----> Punctuator\ Separator 
        |  | |  ----> Literals
        |  | -----> Operator
        |   -----> Identifier
        -------- > keyword

# Type of token :- it is five type
            1) Keyword - Keyword are pre defined word that is used to prefer some specific task 
              ex - var, let, const, function, if , else, switch, case, break, continue, do , while, for, in , delete , try, catch, finally,  throw, extend 

            2) Identifier - identifier is user given name 
               i) name of variable
               ii) name function
               iii)name of class and className
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

# What is difference between "var" , "let" and "const" keyword?
1) VAR- MULTIPLE TIME DECLARATION  , MULTIPLE TIME INITIALIZATION ,  Variable declared with var keyword goes to global scope , variable declared with var keyword support hosting and does not belong to temporal dead Zone (TDJ)
     EX- var a = 10 ;

2) let -> one time declaration, multiple time initialization , Variable declared with let keyword goes to block scope on script scope ,  variable declared with let keyword support hosting bbut belong to TDZ 
        ex- let b = 20;

3) const -> one time declaration , one time  initialization, '''''' etc
        ex- const c = 30        

# TYPE OF OPERATOR on the basis of operand , operator are 3 type
  1) Unary operator:- i>increment/ decrement
                      ii> logical not (!)

  2) binary operator:- i> Arithamatic operator ( +,-,/, %)    
                      ii> Assignment operator  (=)       
                      iii> Compound assignment operator ( +=, -=, *=,/=,%=, **=)
                      iv> relational operator /comparison operator (>,<,>=,<=, ==, !=)  ===(strict equality)  !== (strict not equality)  
  3) Logical operator :- i>Logical AND (&&),  ii> Logical OR (||) operator 
  4) Ternary Operator :-  i> conditional operator 
                          operand 1 ? operand 2 : operand 3

# TYPE COERION :- 
To convert one type of data into another type of js engine is known as type coerion  
# type of type coerion  - it is two type
1)Implicit type coerion -> to convert one type of data into anther type with the help of js engine implicit (autometically) is known as implicit type coerion 

ex- const a = 10 ; const b= "5";
console.log(a - b) ---- Automatically  b string convert into a number and answer is 5 

