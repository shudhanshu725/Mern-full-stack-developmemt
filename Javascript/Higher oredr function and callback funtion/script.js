// HOF 
const Greet =(Username, Task) =>{
    Task(Username);
}
const un = prompt("enter your name")
Greet("Shudhanshu", (un) => {
    console.log(`Hello ${un}`);
});
