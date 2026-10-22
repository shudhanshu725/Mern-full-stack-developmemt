









// Array unbuild methods
//push() - adds one or more elements to the end of an array and returns the new length of the array
const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array); // Output: [1, 2, 3, 4, 5, 6]

//pop() - removes the last element from an array and returns that element
array.pop();
console.log(array); // Output: [1, 2, 3, 4, 5]

//shift() - removes the first element from an array and returns that element
array.shift();
console.log(array); // Output: [2, 3, 4, 5]

//unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
array.unshift(1);
console.log(array); // Output: [1, 2, 3, 4, 5]

//splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const lang = ['Python', 'Java', 'C++'];
lang.splice(1, 0, 'JavaScript');
console.log(lang); // Output: ['Python', 'JavaScript', 'Java', 'C++']

const skill = ["html", "react", "css", "javascript", "next"];
skill.splice(1, 4, "css", "javascript", "react", "next");
console.log(skill); // Output: ['html', 'css', 'javascript', 'react', 'next']

//slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'cherry', 'date']

//map() - creates a new array populated with the results of calling a provided function on every element in the calling array
//It returns a new array with the same length as the original array, but with the values transformed based on the provided function.
const arr = [10, 20, 30, 40, 50];

const x = arr.map(element =>{
    if (element > 30) {
        return element;
    }
});
console.log(x); // Output: [undefined, undefined, undefined, 40, 50]

//filter() - creates a new array with all elements that pass the test implemented by the provided function
const numbers = [1, 2, 3, 4, 5, 6];
const numbersGreaterThanThree = numbers.filter(num => num > 3);
console.log(numbersGreaterThanThree); // Output: [4, 5, 6]

const products =[
    { id: 1, name: "Samsung FE Tab", price: 90000  , company: "Samsung"},
    { id: 2, name: "Mac book", price: 149000 , company: "Apple"},
    { id: 3, name: "Samsung s26", price: 134000 , company: "Samsung"},
    { id: 4, name: "iphone", price: 179000 , company: "Apple"},
    { id: 5, name: "ipad pro", price: 85000 , company: "Apple"},
]

const expensiveProducts = products.filter(product => product.price < 150000);
console.log(expensiveProducts);

const samsungProducts = products.filter(product => product.company === "Samsung" && product.price > 130000);
console.log(samsungProducts);

//some() - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
const ages = [18, 20, 25, 30, 35];
const hasAdult = ages.some(age => age >= 18);
console.log(hasAdult); // Output: true

//every() - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const allAdults = ages.every(age => age >= 18);
console.log(allAdults); // Output: true

//reduce() - executes a reducer function on each element of the array, resulting in a single output value. It takes two parameters: a callback function and an optional initial value.
const numbersToReduce = [1, 2, 3, 4, 5];
const sum = numbersToReduce.reduce((accumulator, currentValue) => {
    accumulator = accumulator * currentValue ;
    return accumulator ;
    }, 1);  // Initial value is 1
console.log(sum); // Output: 120

const product = [
    { id: 1, name: "Samsung FE Tab", price: 90000  , company: "Samsung", qty: 10},
    { id: 2, name: "Mac book", price: 149000 , company: "Apple", qty: 5},
    { id: 3, name: "Samsung s26", price: 134000 , company: "Samsung", qty: 8},
    { id: 4, name: "iphone", price: 179000 , company: "Apple", qty: 15},
    { id: 5, name: "ipad pro", price: 85000 , company: "Apple", qty: 12},
]

const totalqty = product.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.qty;
}, 0); // Initial value is 0
console.log(totalqty); // Output: 50
