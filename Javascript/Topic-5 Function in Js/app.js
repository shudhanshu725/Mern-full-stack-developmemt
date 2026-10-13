/**
 *  ? write an arrow function to find sum of first 100 natural numbers?

const findSum = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum = sum + i;
  }
  return sum;
};

const x = findSum();
console.log("first 100 natural sum:", x);
 */
/** ? write an arrow function to find which no is divisible by 7?

const isDivisbileBy7 = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 7 === 0) {
      console.log(`No ${i} is divisble by 7`);
    }
  }
};

const start = +prompt("Enter first number");
const end = +prompt("Enter last number");
isDivisbileBy7(start, end);
 */

/** 
 * ? write an arrow function to find which no is divisible by 7 and ends with 7?

const isDivAndEnd7 = (start, end) => {
  for(let i = start; i<=end; i++)
  {
      if(i%7 === 0 && i%10 === 7)
      {
        console.log(`${i} is divisible and ends with 7`)
      }
  }
}


const start = +prompt("Enter first number");
const end = +prompt("Enter last number");

isDivAndEnd7(start,end); // 1, 100
 */

/**
 *  ? write an arrow function to count the digits 12345?

const countDigit = (digit = 0) => {
  let count = 0;
  let num = digit;

  while (num !== 0) {
    const rem = num % 10;
    count++;
    num = Math.floor(num / 10);
  }

  console.log(`Count of digit ${digit} is: ${count}`);
};

const val = +prompt("Enter any number to count");
countDigit(val);
 */
/**
 * ! Write an arrow js function to find Prime Number?
 * ! Write an arrow js function to find Palindrome Number?
 */


/**
 *  ? Implicit Return Type Arrow Function

const sum = (a,b) => console.log(a + b);
const pow = (a,b) => console.log(a**b);

const x = sum(10,20);
const y = pow(4,2);

console.log("sum is x:",x);
console.log("power is y:",y);
 */

const sum = (a,b) => console.log(a + b);
const pow = (a,b) => console.log(a**b);

sum(10,20);
pow(4,2);
