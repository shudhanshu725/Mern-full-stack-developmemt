// const user = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//         city:"noida",
//         state:"UP"
//     }
// } 
// const { name, age, address } = user;
// const { city, state } = address;
// console.log(name); // Output: John Doe
// console.log(age); // Output: 30
// console.log(city); // Output: noida
// console.log(state); // Output: UP

/// * ! array destructuring

const movies = ["Inception", "Interstellar", "The Dark Knight" , [ "Iron Man", "Thor"]];
const [firstMovie, secondMovie, thirdMovie, superheros] = movies;
const [ ironMan, thor] = superheros;
console.log(firstMovie); // Output: Inception
console.log(secondMovie); // Output: Interstellar
console.log(thirdMovie); // Output: The Dark Knight
console.log(superheros); // Output: ["Iron Man", "Thor"]
console.log(ironMan); // Output: Iron Man
console.log(thor); // Output: Thor


const skills = [["Angular", "react", "vue"] , "java", "SQL"]
const [[,frontend,], backend, database] = skills;
console.log(frontend); // Output: react
console.log(backend); // Output: java
console.log(database); // Output: SQL



/// * ! shallow copy vs deep copy

const jack ={
    bike: "KTM",
}

// const oogy = jack; // shallow copy
// oogy.bike = "Royal Enfield";
// console.log(jack.bike); // Output: Royal Enfield

const oogy = structuredClone(jack); // deep copy
oogy.bike = "Royal Enfield";
console.log(jack.bike); // Output: KTM


const user = {
    name: "John Doe",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

const userCopy = structuredClone(user); // deep copy
userCopy.name = "Jane Smith";
userCopy.address.city = "Los Angeles";
console.log(userCopy.name); // Output: Jane Smith
console.log(userCopy.address.city); // Output: Los Angeles

console.log(user.name); // Output: John Doe
console.log(user.address.city); // Output: New York

