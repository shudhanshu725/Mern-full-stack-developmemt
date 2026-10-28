const user ={
    fullname: "John Doe",
    age: 30,
}

//! Serialization
const userJSON = JSON.stringify(user);
console.log(userJSON)

//! Deserialization
const userjs = JSON.parse(user);
console.log(userjs);