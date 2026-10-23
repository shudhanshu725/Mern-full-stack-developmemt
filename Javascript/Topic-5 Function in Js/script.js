// The main advantage of function is we can achieve code reusability

/**
 * ! Example-1

function greet(username)
{
    if(typeof(username) === "string")
    {
        console.log(`Good Morning ${username}`)
    }
    else{
        throw new Error("please pass a valid character");
    }
}

greet("Vishal");
greet("Amit");
greet(10);

function findMultiply(x,y)
{
    const prod = x*y;
    return prod;
}

function findSum(n1,n2)
{
    const total = n1 + n2;
    return total;
}


const res1 = findSum(10,20)
console.log("res1:",res1);

const res2 = findMultiply(res1, 2)
console.log("res2:",res2)
 */

/**
 * ! FUNCTION AS EXPRESSION | FIRST CLASS FUNCTION

const greet = function (username)
                {
                    console.log(`Welcome ${username}`);
                }

greet("Aditya")
greet("Aditi")
 */

/**
 * ! Immediately Invoked Function Expression(IIFE)
 * 
 * ? It runs only 1 time


(
    function getLocation(user)
    {
        const response = confirm(`${user} Do you want to share your location?`);
        console.log("response:", response);
    }
)("Raj")
*/

async function getData() {
  return 10;
}

console.log(getData());


console.log("5" - 2);
console.log("hello" - 3);
