









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
