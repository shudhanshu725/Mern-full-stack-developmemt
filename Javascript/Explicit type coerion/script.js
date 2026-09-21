// Number to string conversion
// const a = 10;
// const b = String(a);
// console.log(b);
// console.log(typeof b);

// string to number conversion
// const m = "500";
// const n = Number(m);
// console.log(n);
// console.log(typeof (n));

// const x="10x";
// const y= Number(x);
// console.log(typeof (y));

//convert any data to boolean 
// 0, -0, 0.0, 0n, Null, undefined, NaN, ""(empty string)  all are false
// [] Array, {}object , " "(having one space) , -1 all output come true
// const a= {};
// const b= Boolean(a);
// console.log(b);
// console.log(typeof (b));

const username= prompt("enter you name");
const age = +prompt("enter your age ");
console.log(username ,typeof username);
console.log(age ,typeof  age)