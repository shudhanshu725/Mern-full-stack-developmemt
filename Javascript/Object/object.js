const user = {
    name: "Shudhanshu",
    age: 22,
    city: "Noida",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

console.log(user.name); // Output: Shudhanshu
console.log(user.age); // Output: 22
user.greet(); // Output: Hello, my name is Shudhanshu and I am 22 years old.


//Insertion of new property in object
user.country = "India";
console.log(user.country); // Output: India

//Updating existing property in object
user.age = 23;
console.log(user.age); // Output: 23

//Deletion of property in object
delete user.city;
console.log(user.city); // Output: undefined

console.log(user); // Output: { name: 'Shudhanshu', age: 23, greet: [Function: greet], country: 'India' }